import express from "express";
import { crmDatabase } from "../db/database";
import {
  CustomerSchema,
  CreateCustomerSchema,
  UpdateCustomerSchema,
  CreateAppointmentSchema,
  CreateInteractionSchema,
  CreateCampaignSchema,
} from "../db/schema";

const router = express.Router();

// Customer routes
router.get("/customers", (req, res) => {
  try {
    const { search, status, source } = req.query;

    let customers = crmDatabase.getAllCustomers();

    if (search) {
      customers = crmDatabase.searchCustomers(search as string);
    }

    if (status || source) {
      customers = crmDatabase.getCustomersBySegment({
        status: status ? [status as string] : undefined,
        leadSource: source ? [source as string] : undefined,
      });
    }

    res.json({
      success: true,
      data: customers,
      total: customers.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch customers",
    });
  }
});

router.get("/customers/:id", (req, res) => {
  try {
    const customer = crmDatabase.getCustomer(req.params.id);

    if (!customer) {
      return res.status(404).json({
        success: false,
        error: "Customer not found",
      });
    }

    const appointments = crmDatabase.getCustomerAppointments(customer.id);
    const interactions = crmDatabase.getCustomerInteractions(customer.id);

    res.json({
      success: true,
      data: {
        customer,
        appointments,
        interactions,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch customer",
    });
  }
});

router.post("/customers", (req, res) => {
  try {
    const customerData = CreateCustomerSchema.parse(req.body);
    const customer = crmDatabase.createCustomer(customerData);

    // Create initial interaction
    crmDatabase.createInteraction({
      customerId: customer.id,
      type: "website_form",
      direction: "inbound",
      content: `New customer registered via ${customerData.leadSource}`,
      outcome: "Lead created",
      followUpRequired: true,
      followUpDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });

    res.status(201).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Invalid customer data",
      details: error,
    });
  }
});

router.put("/customers/:id", (req, res) => {
  try {
    const updates = UpdateCustomerSchema.parse(req.body);
    const customer = crmDatabase.updateCustomer(req.params.id, updates);

    if (!customer) {
      return res.status(404).json({
        success: false,
        error: "Customer not found",
      });
    }

    res.json({
      success: true,
      data: customer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Invalid update data",
      details: error,
    });
  }
});

// Lead capture from website forms
router.post("/leads/capture", (req, res) => {
  try {
    const { source, page, ...customerData } = req.body;

    // Check if customer already exists by email
    const existingCustomers = crmDatabase.getAllCustomers();
    const existingCustomer = existingCustomers.find(
      (c) => c.email === customerData.email,
    );

    if (existingCustomer) {
      // Update existing customer
      const updatedCustomer = crmDatabase.updateCustomer(existingCustomer.id, {
        ...customerData,
        websiteVisits: existingCustomer.websiteVisits + 1,
        lastContactDate: new Date().toISOString(),
      });

      // Add new interaction
      crmDatabase.createInteraction({
        customerId: existingCustomer.id,
        type: "website_form",
        direction: "inbound",
        content: `Form submission from ${page || "website"} - ${source || "unknown source"}`,
        outcome: "Contact information updated",
        followUpRequired: true,
      });

      return res.json({
        success: true,
        data: updatedCustomer,
        message: "Existing customer updated",
      });
    }

    // Create new customer
    const newCustomer = crmDatabase.createCustomer({
      ...customerData,
      leadSource: source || "website",
      status: "lead",
      marketingConsent: customerData.marketingConsent || false,
      emailConsent: customerData.emailConsent || false,
      smsConsent: customerData.smsConsent || false,
      websiteVisits: 1,
      pageViews: [
        {
          page: page || "/",
          timestamp: new Date().toISOString(),
        },
      ],
      interestedTreatments: customerData.interestedTreatments || [],
      tags: ["new_lead"],
    });

    // Create initial interaction
    crmDatabase.createInteraction({
      customerId: newCustomer.id,
      type: "website_form",
      direction: "inbound",
      content: `New lead from ${page || "website"} - ${source || "unknown source"}`,
      outcome: "New lead created",
      followUpRequired: true,
      followUpDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });

    res.status(201).json({
      success: true,
      data: newCustomer,
      message: "New lead captured",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Failed to capture lead",
      details: error,
    });
  }
});

// Appointment routes
router.get("/appointments", (req, res) => {
  try {
    const appointments = crmDatabase.getAllAppointments();
    res.json({
      success: true,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch appointments",
    });
  }
});

router.post("/appointments", (req, res) => {
  try {
    const appointmentData = CreateAppointmentSchema.parse(req.body);
    const appointment = crmDatabase.createAppointment(appointmentData);

    // Create interaction for appointment booking
    crmDatabase.createInteraction({
      customerId: appointmentData.customerId,
      type: "in_person",
      direction: "inbound",
      content: `Appointment booked for ${appointmentData.treatmentType}`,
      outcome: "Appointment scheduled",
      followUpRequired: false,
    });

    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Invalid appointment data",
      details: error,
    });
  }
});

// Interaction routes
router.get("/interactions", (req, res) => {
  try {
    const { customerId } = req.query;

    let interactions;
    if (customerId) {
      interactions = crmDatabase.getCustomerInteractions(customerId as string);
    } else {
      interactions = crmDatabase.getAllInteractions();
    }

    res.json({
      success: true,
      data: interactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch interactions",
    });
  }
});

router.post("/interactions", (req, res) => {
  try {
    const interactionData = CreateInteractionSchema.parse(req.body);
    const interaction = crmDatabase.createInteraction(interactionData);

    res.status(201).json({
      success: true,
      data: interaction,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Invalid interaction data",
      details: error,
    });
  }
});

// Campaign routes
router.get("/campaigns", (req, res) => {
  try {
    const campaigns = crmDatabase.getAllCampaigns();
    res.json({
      success: true,
      data: campaigns,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch campaigns",
    });
  }
});

router.post("/campaigns", (req, res) => {
  try {
    const campaignData = CreateCampaignSchema.parse(req.body);
    const campaign = crmDatabase.createCampaign(campaignData);

    res.status(201).json({
      success: true,
      data: campaign,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Invalid campaign data",
      details: error,
    });
  }
});

// Analytics routes
router.get("/analytics/dashboard", (req, res) => {
  try {
    const stats = crmDatabase.getDashboardStats();
    res.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch analytics",
    });
  }
});

// Page tracking route
router.post("/tracking/page-view", (req, res) => {
  try {
    const { customerId, page, duration } = req.body;

    if (customerId) {
      const customer = crmDatabase.getCustomer(customerId);
      if (customer) {
        const updatedPageViews = [
          ...customer.pageViews,
          {
            page,
            timestamp: new Date().toISOString(),
            duration,
          },
        ];

        crmDatabase.updateCustomer(customerId, {
          pageViews: updatedPageViews,
          websiteVisits: customer.websiteVisits + 1,
        });
      }
    }

    res.json({
      success: true,
      message: "Page view tracked",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to track page view",
    });
  }
});

export default router;
