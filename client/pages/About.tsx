import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import {
  ArrowLeft,
  Star,
  Award,
  Users,
  Shield,
  Heart,
  Home,
  User,
  Stethoscope,
  MessageSquare,
  Camera,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Beauty",
      description:
        "We believe everyone deserves to feel confident and beautiful in their own skin.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Using only FDA-approved treatments and maintaining the highest safety standards.",
    },
    {
      icon: Users,
      title: "Personalized Care",
      description:
        "Every treatment plan is tailored to your unique needs and aesthetic goals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering exceptional results that exceed expectations.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Treatment Types" },
    { number: "5.0", label: "Average Rating" },
  ];

  const certifications = [
    "Advanced Aesthetic Practitioner Certification",
    "Botox & Dermal Filler Training",
    "Chemical Peel Specialist",
    "Laser Safety Certification",
    "Medical Aesthetics Diploma",
    "CPR & First Aid Certified",
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-gold/20 sticky top-0 z-50">
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
                  className="text-muted-foreground hover:text-[#fb0090] transition-colors font-medium flex items-center"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
                <a
                  href="#"
                  className="text-[#fb0090] hover:text-[#fb0090] transition-colors font-medium flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  About
                </a>
                <Link
                  to="/treatments"
                  className="text-muted-foreground hover:text-[#fb0090] transition-colors font-medium flex items-center"
                >
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Treatments
                </Link>
                <Link
                  to="/testimonials"
                  className="text-muted-foreground hover:text-[#fb0090] transition-colors font-medium flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Testimonials
                </Link>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-[#fb0090] transition-colors font-medium flex items-center"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-[#fb0090] transition-colors font-medium flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Link>
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

      {/* Header with Background Image */}
      <section className="relative h-64 bg-gradient-to-br from-gold/20 to-warm-beige/30 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
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
              About Glow Aesthetics Lab
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner in aesthetic excellence and natural beauty
              enhancement
            </p>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Welcome to Glow Aesthetics Lab
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a passion for enhancing natural beauty, Glow
                Aesthetics Lab has become a premier destination for aesthetic
                treatments. Under the expert guidance of Olivene D, our clinic
                combines cutting-edge technology with personalized care to help
                you achieve your aesthetic goals.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that everyone deserves to feel confident and
                beautiful in their own skin. Our comprehensive range of
                treatments, from non-invasive rejuvenation to advanced aesthetic
                procedures, are designed to enhance your natural features while
                maintaining a refreshed, authentic look.
              </p>
              <Button
                size="lg"
                className="bg-[#fb0090] hover:bg-[#fb0090]/90 text-white font-semibold"
                asChild
              >
                <Link to="/booking">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#fb0090]/10 to-gold/20 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4046658/pexels-photo-4046658.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Glow Aesthetics Lab clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Olivene D */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gradient-to-br from-gold/10 to-[#fb0090]/20 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4046640/pexels-photo-4046640.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Olivene D - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Meet Olivene D
                <span className="block text-xl font-normal text-[#fb0090] mt-2">
                  Founder & Lead Aesthetic Practitioner
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 3 years of experience in the aesthetic industry,
                Olivene D founded Glow Aesthetics Lab with a vision to provide
                exceptional, personalized aesthetic treatments in a welcoming
                and luxurious environment.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Olivene's approach combines artistic vision with medical
                expertise, ensuring each client receives treatments that enhance
                their natural beauty while maintaining safety and comfort
                throughout their journey.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground mb-3">
                  Qualifications & Certifications:
                </h3>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#fb0090] mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Glow Aesthetics Lab
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-[#fb0090]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fb0090]/20 transition-colors">
                    <Icon className="h-8 w-8 text-[#fb0090]" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#fb0090] mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#fb0090]/10 via-gold/10 to-warm-beige/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Beauty Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your consultation today and discover how we can help you
            achieve your aesthetic goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#fb0090] hover:bg-[#fb0090]/90 text-white font-semibold px-8"
              asChild
            >
              <Link to="/booking">Book Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10"
              asChild
            >
              <Link to="/treatments">View Our Treatments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bronze text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="https://cdn.builder.io/api/v1/assets/103648a78fd24251870681fe3bc208a8/gal-logox500-620a4a?format=webp&width=800"
                alt="Glow Aesthetics Lab"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-cream/80 mb-4">
                Premium aesthetic treatments in a luxury setting. Owned and
                operated by Olivene D.
              </p>
              <div className="flex items-center space-x-4 text-cream/60">
                <span>Follow us:</span>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/glowaestheticslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fb0090] transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
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
                  >
                    <svg
                      className="h-5 w-5"
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
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-cream/80">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a
                    href="tel:+447904949580"
                    className="hover:text-[#fb0090] transition-colors"
                  >
                    +44 7904 949580
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>123 Beauty Ave, Downtown</span>
                </div>
                <div>
                  <span>Email: </span>
                  <a
                    href="mailto:info@glowaestheticslab.com"
                    className="hover:text-[#fb0090] transition-colors"
                  >
                    info@glowaestheticslab.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-cream/80">
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
              </div>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
            <p>&copy; 2025 Glow Aesthetics Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed UI Components */}
      <BackToTop />
      <Chatbot />
    </div>
  );
}
