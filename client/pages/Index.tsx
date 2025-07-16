import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Phone,
  Star,
  Clock,
  Award,
  Users,
  Shield,
  Home,
  Stethoscope,
  MessageSquare,
  Camera,
  Mail,
} from "lucide-react";

export default function Index() {
  const treatments = [
    {
      name: "Botox & Dermal Fillers",
      description:
        "Professional anti-aging treatments for natural-looking results",
      image: "/placeholder.svg",
      price: "From $299",
    },
    {
      name: "Chemical Peels",
      description:
        "Reveal fresh, radiant skin with our customized peel treatments",
      image: "/placeholder.svg",
      price: "From $150",
    },
    {
      name: "Laser Hair Removal",
      description:
        "Safe, effective permanent hair reduction for all skin types",
      image: "/placeholder.svg",
      price: "From $99",
    },
    {
      name: "Skin Rejuvenation",
      description:
        "Advanced treatments for texture, tone, and overall skin health",
      image: "/placeholder.svg",
      price: "From $199",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Expert Care",
      description: "Led by experienced aesthetics professionals",
    },
    {
      icon: Shield,
      title: "Safe & Effective",
      description: "FDA-approved treatments with proven results",
    },
    {
      icon: Users,
      title: "Personalized",
      description: "Customized treatment plans for your unique needs",
    },
    {
      icon: Clock,
      title: "Convenient",
      description: "Flexible scheduling to fit your lifestyle",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-gold/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/assets/103648a78fd24251870681fe3bc208a8/gal-logox500-620a4a?format=webp&width=800"
                alt="Glow Aesthetics Lab"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-foreground hover:text-gold transition-colors font-medium flex items-center"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </a>
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
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <a
                  href="tel:+447904949580"
                  className="hover:text-gold transition-colors"
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-warm-beige/30 to-gold-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Reveal Your
                <span className="text-gold block">Natural Glow</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience premium aesthetic treatments in a luxurious,
                welcoming environment. Our expert team is dedicated to helping
                you look and feel your absolute best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-white font-semibold px-8"
                  asChild
                >
                  <Link to="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Appointment
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  asChild
                >
                  <Link to="/treatments">View Treatments</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Downtown Location</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-gold fill-current" />
                  <span>5.0 (200+ Reviews)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-warm-beige/30 rounded-full p-8">
                <div className="w-full h-full bg-gradient-to-br from-gold/10 to-transparent rounded-full flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/103648a78fd24251870681fe3bc208a8/gal-logox500-620a4a?format=webp&width=800"
                    alt="Glow Aesthetics Lab"
                    className="w-3/4 h-auto opacity-80"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-warm-beige/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Glow Aesthetics Lab
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized care to
              deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatments Overview */}
      <section id="treatments" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Premium Treatments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of aesthetic treatments, each
              designed to enhance your natural beauty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-square bg-gradient-to-br from-gold/10 to-warm-beige/20 rounded-xl mb-6 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-3">
                  {treatment.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold">
                    {treatment.price}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-white font-semibold"
              asChild
            >
              <Link to="/treatments">View All Treatments & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gold/10 via-warm-beige/20 to-gold-light/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book your personalized consultation with our expert team today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-white font-semibold px-8"
              asChild
            >
              <Link to="/booking">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Appointment
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +44 7904 949580
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
              <div className="flex space-x-4 text-cream/60">
                <span>Follow us:</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-gold transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-gold transition-colors">
                    Instagram
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
                    className="hover:text-gold transition-colors"
                  >
                    +44 7904 949580
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>123 Beauty Ave, Downtown</span>
                </div>
                <div>
                  <span>Email: </span>
                  <a
                    href="mailto:info@glowaestheticslab.com"
                    className="hover:text-gold transition-colors"
                  >
                    info@glowaestheticslab.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-cream/80">
                <a href="#" className="block hover:text-gold transition-colors">
                  Book Appointment
                </a>
                <a href="#" className="block hover:text-gold transition-colors">
                  Treatment Menu
                </a>
                <a href="#" className="block hover:text-gold transition-colors">
                  About Olivene D
                </a>
                <a href="#" className="block hover:text-gold transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
            <p>&copy; 2025 Glow Aesthetics Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
