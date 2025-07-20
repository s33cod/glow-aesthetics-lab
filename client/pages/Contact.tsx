import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailBody = `
Contact Form Submission from Glow Aesthetics Lab Website

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Subject: ${formData.subject}

Message:
${formData.message}

Please respond to this inquiry promptly.
    `.trim();

    const mailtoLink = `mailto:info@glowaestheticslab.com?subject=Contact Form: ${formData.subject}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+44 7904 949580",
      link: "tel:+447904949580",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@glowaestheticslab.com",
      link: "mailto:info@glowaestheticslab.com",
      description: "Send us a message anytime",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Surrey Quays, LONDON SE16. UK",
      link: "#",
      description: "Visit our beautiful clinic",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      link: "#",
      description: "We're here when you need us",
    },
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book online through our booking system, call us directly, or send us an email. We'll confirm your appointment within 24 hours.",
    },
    {
      question: "What should I expect during my consultation?",
      answer:
        "During your consultation, we'll discuss your goals, assess your skin, and create a personalized treatment plan. The consultation typically takes 30 minutes and is completely free.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment options including installment plans for larger treatments. Please discuss this during your consultation.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require 24 hours notice for cancellations. Same-day cancellations may incur a fee. Please contact us as soon as possible if you need to reschedule.",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream">
        <Navigation />

        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <Send className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Message Sent!
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Thank you for contacting us. We've received your message and
                will respond within 24 hours.
              </p>
              <Button
                asChild
                className="bg-[#fb0090] hover:bg-gold text-white font-semibold"
              >
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
        <Chatbot />
        <CookieConsent />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Header with Background Image */}
      <section className="relative h-64 bg-gradient-to-br from-gold/20 to-warm-beige/30 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4015620/pexels-photo-4015620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center h-full">
          <div className="flex items-center mb-6">
            <Link
              to="/"
              className="flex items-center text-white/80 hover:text-[#fb0090] transition-colors mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center w-full">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get in touch with our expert team - we're here to help with all
              your aesthetic needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to answer your questions and help you start your beauty
              journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#fb0090]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-[#fb0090]" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {info.description}
                  </p>
                  {info.link !== "#" ? (
                    <a
                      href={info.link}
                      className="text-[#fb0090] hover:text-[#fb0090]/80 transition-colors font-medium"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">
                      {info.details}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have a question about our treatments or want to schedule a
                consultation? Fill out the form and we'll get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#fb0090]/20"
                      placeholder="Enter your full name"
                    />
                  </div>
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
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#fb0090]/20"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#fb0090]/20"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#fb0090]/20"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Booking Question">Booking Question</option>
                      <option value="Treatment Information">
                        Treatment Information
                      </option>
                      <option value="Consultation Request">
                        Consultation Request
                      </option>
                      <option value="Follow-up Care">Follow-up Care</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#fb0090]/20"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#fb0090] hover:bg-gold text-white font-semibold w-full"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-input pb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#fb0090]/5 rounded-2xl">
                <h4 className="font-semibold text-foreground mb-3">
                  Emergency Contact
                </h4>
                <p className="text-muted-foreground text-sm mb-3">
                  For urgent matters or after-hours concerns:
                </p>
                <a
                  href="tel:+447904949580"
                  className="text-[#fb0090] hover:text-[#fb0090]/80 transition-colors font-semibold"
                >
                  +44 7904 949580
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Fixed UI Components */}
      <BackToTop />
      <Chatbot />
      <CookieConsent />
    </div>
  );
}
