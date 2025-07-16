import { Button } from "./button";
import {
  Home,
  User,
  Stethoscope,
  MessageSquare,
  Camera,
  Mail,
  Phone,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className = "" }: NavigationProps) {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/treatments", label: "Treatments", icon: Stethoscope },
    { path: "/testimonials", label: "Testimonials", icon: MessageSquare },
    { path: "/gallery", label: "Gallery", icon: Camera },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      className={`bg-background/95 backdrop-blur-md border-b border-gold/20 sticky top-0 z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://cdn.builder.io/api/v1/assets/103648a78fd24251870681fe3bc208a8/gal-logox500-620a4a?format=webp&width=800"
                alt="Glow Aesthetics Lab"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`transition-colors font-medium flex items-center ${
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
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-2" />
              <a
                href="tel:+447904949580"
                className="hover:text-[#fb0090] transition-colors"
              >
                +44 7904 949580
              </a>
            </div>
            <Button
              className="bg-gold hover:bg-gold/90 text-white font-semibold"
              asChild
            >
              <Link to="/booking">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
