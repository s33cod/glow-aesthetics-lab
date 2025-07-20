import { Button } from "./button";
import {
  Home,
  User,
  Stethoscope,
  MessageSquare,
  Camera,
  Mail,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className = "" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/treatments", label: "Treatments", icon: Stethoscope },
    { path: "/testimonials", label: "Testimonials", icon: MessageSquare },
    { path: "/gallery", label: "Gallery", icon: Camera },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`bg-background/95 backdrop-blur-md border-b border-gold/20 sticky top-0 z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F7fe33af5fbb54f1c926bc36781e78316?format=webp&width=800"
                alt="Glow Aesthetics Lab"
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`transition-colors font-medium flex items-center text-sm xl:text-base ${
                      isActive
                        ? "text-[#fb0090]"
                        : "text-muted-foreground hover:text-[#fb0090]"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-2" />
              <a
                href="tel:+447904949580"
                className="hover:text-[#fb0090] transition-colors"
              >
                +44 7904 949580
              </a>
            </div>
            <Button
              className="bg-gold hover:bg-[#fb0090] text-white font-semibold"
              asChild
            >
              <Link to="/booking">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile/Tablet Right Side */}
          <div className="flex lg:hidden items-center space-x-2">
            <Button
              size="sm"
              className="bg-gold hover:bg-[#fb0090] text-white font-semibold text-xs px-3"
              asChild
            >
              <Link to="/booking">Book</Link>
            </Button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-[#fb0090] hover:bg-muted focus:outline-none focus:ring-2 focus:ring-[#fb0090]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-gold/20">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#fb0090] bg-[#fb0090]/10"
                        : "text-muted-foreground hover:text-[#fb0090] hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile Contact Info */}
              <div className="px-3 py-2 border-t border-gold/20 mt-4">
                <a
                  href="tel:+447904949580"
                  className="flex items-center text-muted-foreground hover:text-[#fb0090] transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  +44 7904 949580
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
