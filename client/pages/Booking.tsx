import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import {
  Calendar,
  ArrowLeft,
  Clock,
  User,
  Mail,
  Phone,
  Home,
  Stethoscope,
  MessageSquare,
  Camera,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: "botox", name: "Botox Treatment", duration: "30 min", price: "£299" },
    {
      id: "dermal-fillers",
      name: "Dermal Fillers",
      duration: "45 min",
      price: "£599",
    },
    { id: "lip-fillers", name: "Lip Fillers", duration: "30 min", price: "£499" },
    {
      id: "chemical-peel",
      name: "Chemical Peel",
      duration: "60 min",
      price: "£150",
    },
    {
      id: "microneedling",
      name: "Microneedling",
      duration: "75 min",
      price: "£299",
    },
    { id: "hydrafacial", name: "HydraFacial", duration: "45 min", price: "£199" },
    {
      id: "laser-hair-removal",
      name: "Laser Hair Removal",
      duration: "30-90 min",
      price: "£99",
    },
    {
      id: "consultation",
      name: "Free Consultation",
      duration: "30 min",
      price: "Free",
    },
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  // Generate available dates (next 30 days, excluding Sundays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) {
        // Exclude Sundays
        dates.push(date.toISOString().split("T")[0]);
      }
    }
    return dates;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const selectedService = services.find(s => s.id === formData.service);
    const emailBody = `
New Booking Request from Glow Aesthetics Lab Website

Client Details:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Appointment Details:
- Service: ${selectedService?.name || formData.service}
- Duration: ${selectedService?.duration || 'N/A'}
- Price: ${selectedService?.price || 'N/A'}
- Requested Date: ${formData.date}
- Requested Time: ${formData.time}

Additional Message:
${formData.message || 'None'}

Please confirm this appointment by contacting the client directly.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@glowaestheticslab.com?subject=New Booking Request - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
  };

  if (isSubmitted) {
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
                    className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                  >
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </Link>
                  <Link
                    to="/treatments"
                    className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                  >
                    <Stethoscope className="h-4 w-4 mr-2" />
                    Treatments
                  </Link>
                  <Link
                    to="/testimonials"
                    className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Testimonials
                  </Link>
                  <Link
                    to="/gallery"
                    className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Gallery
                  </Link>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Success Message */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Booking Request Sent!
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Thank you for your booking request. We've opened your email client with all the details.
                Our team will review your request and contact you within 24 hours to confirm your appointment.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>What happens next?</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                  <li>• We'll call you to confirm your preferred date and time</li>
                  <li>• You'll receive an email confirmation with appointment details</li>
                  <li>• We'll send you pre-appointment instructions if needed</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild className="bg-gold hover:bg-gold/90 text-white font-semibold">
                  <Link to="/">Return Home</Link>
                </Button>
                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
                  <Link to="/treatments">View More Treatments</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <BackToTop />
        <Chatbot />
      </div>
    );
  }

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
                  className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
                <Link
                  to="/treatments"
                  className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                >
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Treatments
                </Link>
                <Link
                  to="/testimonials"
                  className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Testimonials
                </Link>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Gallery
                </Link>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-gold transition-colors font-medium flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Header with Background Image */}
        <section className="relative h-64 bg-gradient-to-br from-gold/20 to-warm-beige/30 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/4015620/pexels-photo-4015620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center h-full">
            <div className="flex items-center mb-6">
              <Link
                to="/"
                className="flex items-center text-white/80 hover:text-gold transition-colors mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="text-center w-full">
              <h1 className="text-4xl font-bold text-white mb-4">
                Book Your Appointment
              </h1>
              <p className="text-xl text-white/90">
                Schedule your consultation or treatment with our expert team
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Book Your Appointment
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you to confirm your appointment
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold/20"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold/20"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold/20"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold/20"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Select Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold/20"
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.duration} - {service.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date *
                    </label>
                    <select
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold/20"
                    >
                      <option value="">Select a date...</option>
                      {getAvailableDates().map((date) => {
                        const dateObj = new Date(date);
                        const formattedDate = dateObj.toLocaleDateString("en-GB", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        });
                        return (
                          <option key={date} value={date}>
                            {formattedDate}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold/20"
                    >
                      <option value="">Select a time...</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="Tell us about your concerns, goals, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gold hover:bg-gold/90 text-white font-semibold px-8"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Request Appointment
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll contact you within 24 hours to confirm your appointment
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Need Immediate Assistance?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Phone className="h-8 w-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground">
                  <a href="tel:+447904949580" className="hover:text-gold transition-colors">
                    +44 7904 949580
                  </a>
                </p>
              </div>
              <div>
                <Mail className="h-8 w-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground">
                  <a href="mailto:info@glowaestheticslab.com" className="hover:text-gold transition-colors">
                    info@glowaestheticslab.com
                  </a>
                </p>
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
              &copy; 2025 Glow Aesthetics Lab. All rights reserved.
            </p>
          </div>
        </footer>
        
        {/* Fixed UI Components */}
        <BackToTop />
        <Chatbot />
      </div>
    );
  }
}