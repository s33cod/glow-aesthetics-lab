import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-bronze text-cream py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://cdn.builder.io/api/v1/assets/103648a78fd24251870681fe3bc208a8/gal-logox500-620a4a?format=webp&width=800"
              alt="Glow Aesthetics Lab"
              className="h-10 sm:h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-cream/80 mb-4 text-sm sm:text-base">
              Premium aesthetic treatments in a luxury setting. Owned and
              operated by Olivene D.
            </p>
            <div className="flex items-center space-x-4 text-cream/60">
              <span className="text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/glowaestheticslab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fb0090] transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/glow_aesthetics_lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fb0090] transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.367-1.3C3.683 14.498 3 12.995 3 11.5c0-1.496.683-2.998 2.082-4.188C5.998 6.512 7.149 6.023 8.449 6.023c1.297 0 2.448.49 3.367 1.3C13.215 8.513 13.898 10.015 13.898 11.51c0 1.496-.683 2.998-2.082 4.188-.919.81-2.07 1.29-3.367 1.29zm7.718-10.96a.896.896 0 01-.896-.896.896.896 0 01.896-.896.896.896 0 01.896.896.896.896 0 01-.896.896z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@glowaestheticslab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fb0090] transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Contact Info
            </h3>
            <div className="space-y-2 text-cream/80 text-sm sm:text-base">
              <div className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+447904949580"
                  className="hover:text-[#fb0090] transition-colors"
                >
                  +44 7904 949580
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Surrey Quays, LONDON SE16. UK</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@glowaestheticslab.com"
                  className="hover:text-[#fb0090] transition-colors break-all"
                >
                  info@glowaestheticslab.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h3>
            <div className="space-y-2 text-cream/80 text-sm sm:text-base">
              <Link
                to="/booking"
                className="block hover:text-[#fb0090] transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                to="/treatments"
                className="block hover:text-[#fb0090] transition-colors"
              >
                Treatment Menu
              </Link>
              <Link
                to="/about"
                className="block hover:text-[#fb0090] transition-colors"
              >
                About Olivene D
              </Link>
              <Link
                to="/contact"
                className="block hover:text-[#fb0090] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/gallery"
                className="block hover:text-[#fb0090] transition-colors"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Legal
            </h3>
            <div className="space-y-2 text-cream/80 text-sm sm:text-base">
              <Link
                to="/terms"
                className="block hover:text-[#fb0090] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="block hover:text-[#fb0090] transition-colors"
              >
                Privacy Policy
              </Link>
              <a
                href="#"
                className="block hover:text-[#fb0090] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // Trigger cookie consent modal
                  localStorage.removeItem("cookie-consent");
                  window.location.reload();
                }}
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-cream/60 text-xs sm:text-sm text-center sm:text-left">
              &copy; 2025 Glow Aesthetics Lab. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-cream/60">
              <span>Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
