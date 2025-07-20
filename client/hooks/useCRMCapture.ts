import { useCallback } from "react";

interface LeadCaptureData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source?: string;
  page?: string;
  interestedTreatments?: string[];
  marketingConsent?: boolean;
  emailConsent?: boolean;
  smsConsent?: boolean;
  message?: string;
}

interface BookingCaptureData extends LeadCaptureData {
  service: string;
  date: string;
  time: string;
}

export function useCRMCapture() {
  const capturePageView = useCallback(
    async (page: string, duration?: number) => {
      try {
        // Get customer ID from localStorage if they've interacted before
        const customerId = localStorage.getItem("crm_customer_id");

        await fetch("/api/crm/tracking/page-view", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerId,
            page,
            duration,
          }),
        });
      } catch (error) {
        console.error("Failed to track page view:", error);
      }
    },
    [],
  );

  const captureLead = useCallback(async (data: LeadCaptureData) => {
    try {
      const response = await fetch("/api/crm/leads/capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          source: data.source || "website",
          page: data.page || window.location.pathname,
        }),
      });

      const result = await response.json();

      if (result.success && result.data) {
        // Store customer ID for future tracking
        localStorage.setItem("crm_customer_id", result.data.id);

        // Track successful conversion
        if (typeof gtag !== "undefined") {
          gtag("event", "lead_capture", {
            event_category: "CRM",
            event_label: data.source || "website",
            value: 1,
          });
        }
      }

      return result;
    } catch (error) {
      console.error("Failed to capture lead:", error);
      return { success: false, error: "Failed to capture lead" };
    }
  }, []);

  const captureBooking = useCallback(
    async (data: BookingCaptureData) => {
      try {
        // First capture/update the lead
        const leadResult = await captureLead(data);

        if (leadResult.success && leadResult.data) {
          // Then create the appointment
          const appointmentResponse = await fetch("/api/crm/appointments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              customerId: leadResult.data.id,
              treatmentType: data.service,
              appointmentDate: new Date(
                `${data.date}T${data.time}`,
              ).toISOString(),
              duration: 60, // Default duration
              status: "scheduled",
              price: 0, // To be updated by staff
              notes: data.message,
            }),
          });

          const appointmentResult = await appointmentResponse.json();

          if (appointmentResult.success) {
            // Track booking conversion
            if (typeof gtag !== "undefined") {
              gtag("event", "booking_completed", {
                event_category: "CRM",
                event_label: data.service,
                value: 1,
              });
            }
          }

          return {
            success: true,
            customer: leadResult.data,
            appointment: appointmentResult.data,
          };
        }

        return leadResult;
      } catch (error) {
        console.error("Failed to capture booking:", error);
        return { success: false, error: "Failed to capture booking" };
      }
    },
    [captureLead],
  );

  const trackInteraction = useCallback(
    async (
      customerId: string,
      type: string,
      content: string,
      outcome?: string,
    ) => {
      try {
        await fetch("/api/crm/interactions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerId,
            type,
            direction: "inbound",
            content,
            outcome,
          }),
        });
      } catch (error) {
        console.error("Failed to track interaction:", error);
      }
    },
    [],
  );

  const identifyUser = useCallback(async (email: string) => {
    try {
      const response = await fetch(
        `/api/crm/customers?search=${encodeURIComponent(email)}`,
      );
      const result = await response.json();

      if (result.success && result.data.length > 0) {
        const customer = result.data[0];
        localStorage.setItem("crm_customer_id", customer.id);
        return customer;
      }

      return null;
    } catch (error) {
      console.error("Failed to identify user:", error);
      return null;
    }
  }, []);

  return {
    capturePageView,
    captureLead,
    captureBooking,
    trackInteraction,
    identifyUser,
  };
}

// Analytics integration
export function initializeCRMAnalytics() {
  // Track page views automatically
  const { capturePageView } = useCRMCapture();

  // Track initial page view
  if (typeof window !== "undefined") {
    capturePageView(window.location.pathname);

    // Track page duration when user leaves
    let startTime = Date.now();

    const trackPageDuration = () => {
      const duration = Math.round((Date.now() - startTime) / 1000);
      capturePageView(window.location.pathname, duration);
    };

    window.addEventListener("beforeunload", trackPageDuration);
    window.addEventListener("pagehide", trackPageDuration);

    // Track navigation for SPA
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      trackPageDuration();
      startTime = Date.now();
      originalPushState.apply(history, args);
      setTimeout(() => capturePageView(window.location.pathname), 100);
    };

    history.replaceState = function (...args) {
      trackPageDuration();
      startTime = Date.now();
      originalReplaceState.apply(history, args);
      setTimeout(() => capturePageView(window.location.pathname), 100);
    };

    window.addEventListener("popstate", () => {
      trackPageDuration();
      startTime = Date.now();
      setTimeout(() => capturePageView(window.location.pathname), 100);
    });
  }
}
