import { useState, useEffect } from "react";
import { Button } from "./button";
import { X, Cookie } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-gold/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="h-6 w-6 text-[#fb0090] flex-shrink-0" />
            <div className="text-sm text-foreground">
              <p className="mb-1">
                <strong>We use cookies to enhance your experience</strong>
              </p>
              <p className="text-muted-foreground">
                This website uses cookies to ensure you get the best experience.
                We use essential cookies for site functionality and analytics
                cookies (with your consent) to help us improve our services.{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#fb0090] hover:text-[#fb0090]/80 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
              className="border-muted-foreground text-muted-foreground hover:bg-muted"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="bg-[#fb0090] hover:bg-gold text-white"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
