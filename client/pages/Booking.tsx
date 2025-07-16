import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Clock, User, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Booking() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-gold/20">
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
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-gold transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/treatments"
                  className="text-muted-foreground hover:text-gold transition-colors font-medium"
                >
                  Treatments
                </Link>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-gold transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-gold transition-colors font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-gold/10 via-warm-beige/20 to-gold-light/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              to="/"
              className="flex items-center text-muted-foreground hover:text-gold transition-colors mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl text-muted-foreground">
              Schedule your consultation or treatment with our expert team
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Placeholder */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <Calendar className="h-16 w-16 text-gold mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Booking System Coming Soon
              </h2>
              <p className="text-muted-foreground">
                We're building a comprehensive online booking system that will
                allow you to:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center text-foreground">
                  <Calendar className="h-5 w-5 text-gold mr-3" />
                  <span>Select your preferred date and time</span>
                </div>
                <div className="flex items-center text-foreground">
                  <User className="h-5 w-5 text-gold mr-3" />
                  <span>Choose your treatment and provider</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Clock className="h-5 w-5 text-gold mr-3" />
                  <span>View real-time availability</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-foreground">
                  <Mail className="h-5 w-5 text-gold mr-3" />
                  <span>Receive email confirmations</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Phone className="h-5 w-5 text-gold mr-3" />
                  <span>SMS appointment reminders</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Calendar className="h-5 w-5 text-gold mr-3" />
                  <span>Easy rescheduling options</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready to Book Now?
              </h3>
              <p className="text-muted-foreground mb-6">
                Call us directly or send an email to schedule your appointment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-white font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (555) 123-4567
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Phone className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Phone</h4>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>
            <div>
              <Mail className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Email</h4>
              <p className="text-muted-foreground">charles@consultant.com</p>
            </div>
            <div>
              <Clock className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Hours</h4>
              <p className="text-muted-foreground">
                Mon-Fri: 9AM-6PM
                <br />
                Sat: 10AM-4PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bronze text-cream py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cream/60">
            &copy; 2024 Glow Aesthetics Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
