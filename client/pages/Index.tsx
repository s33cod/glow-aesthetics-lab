import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { TreatmentModal } from "@/components/ui/treatment-modal";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Star,
  Clock,
  Award,
  Users,
  Shield,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (treatment: any) => {
    // Convert homepage treatment to modal format
    const modalTreatment = {
      name: treatment.name,
      description: treatment.description,
      duration: "30-60 minutes", // Default duration
      price: treatment.price,
      details: [
        "Professional consultation included",
        "Personalized treatment plan",
        "Follow-up care guidance",
        "Proven, safe techniques",
      ],
    };
    setSelectedTreatment(modalTreatment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTreatment(null);
  };

  const treatments = [
    {
      name: "Botox & Dermal Fillers",
      description:
        "Professional anti-aging treatments for natural-looking results",
      image: "/placeholder.svg",
      price: "From £299",
    },
    {
      name: "Chemical Peels",
      description:
        "Reveal fresh, radiant skin with our customized peel treatments",
      image: "/placeholder.svg",
      price: "From £150",
    },
    {
      name: "Laser Hair Removal",
      description:
        "Safe, effective permanent hair reduction for all skin types",
      image: "/placeholder.svg",
      price: "From £99",
    },
    {
      name: "Skin Rejuvenation",
      description:
        "Advanced treatments for texture, tone, and overall skin health",
      image: "/placeholder.svg",
      price: "From £199",
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
      <Navigation />

      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/4046735/4046735-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Reveal Your
                <span className="text-gold block">Natural Glow</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
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
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/treatments">View Treatments</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-white/80">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Surrey Quays, LONDON</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-gold fill-current" />
                  <span>5.0 (200+ Reviews)</span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-8">
                <img
                  src="https://cdn.builder.io/api/v1/assets/103648a78fd24251870681fe3bc208a8/gal-logox500-620a4a?format=webp&width=800"
                  alt="Glow Aesthetics Lab"
                  className="w-64 h-auto opacity-90"
                />
              </div>
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
                  <div className="w-16 h-16 bg-[#fb0090]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fb0090]/20 transition-colors">
                    <Icon className="h-8 w-8 text-[#fb0090]" />
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
                  <span className="text-[#fb0090] font-semibold">
                    {treatment.price}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#fb0090] text-[#fb0090] hover:bg-[#fb0090]/10"
                    onClick={() => handleLearnMore(treatment)}
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
              className="bg-[#fb0090] hover:bg-[#fb0090]/90 text-white font-semibold"
              asChild
            >
              <Link to="/treatments">View All Treatments & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Real Results, Real Transformations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the stunning transformations our clients have achieved with
              our expert treatments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Microneedling Treatment",
                description: "Skin texture improvement after one session",
                before:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F6067c8cf367948fd856ee972edb43066?format=webp&width=800",
                after:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F639e8b19d68a42729be93231a640ec67?format=webp&width=800",
              },
              {
                title: "Lip Enhancement",
                description:
                  "Natural lip volume enhancement with dermal fillers",
                before:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F4c1b54bbbb90491fb9fe373a2f020c8c?format=webp&width=800",
                after:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Ffd971bd5b6724ca193083843d4154bbb?format=webp&width=800",
              },
              {
                title: "Anti-Aging Treatment",
                description: "Neck and jawline rejuvenation results",
                before:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F92d76ba92d8c40daa7c60cc310cb4a0e?format=webp&width=800",
                after:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fd31ffe02157b486e8799d898c80eedf8?format=webp&width=800",
              },
            ].map((result, index) => (
              <div key={index} className="bg-cream rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {result.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 text-center uppercase tracking-wide">
                      Before
                    </p>
                    <div className="aspect-square bg-gradient-to-br from-gold/10 to-warm-beige/20 rounded-lg overflow-hidden">
                      <img
                        src={result.before}
                        alt="Before treatment"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#fb0090] mb-2 text-center uppercase tracking-wide">
                      After
                    </p>
                    <div className="aspect-square bg-gradient-to-br from-gold/10 to-warm-beige/20 rounded-lg overflow-hidden">
                      <img
                        src={result.after}
                        alt="After treatment"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center text-muted-foreground text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-[#fb0090] text-[#fb0090] hover:bg-[#fb0090]/10"
              asChild
            >
              <Link to="/gallery">View More Results</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                treatment: "Botox & Dermal Fillers",
                rating: 5,
                text: "Absolutely amazing experience! Olivene made me feel so comfortable and the results are exactly what I wanted. My skin looks naturally refreshed and I couldn't be happier.",
                image:
                  "https://images.pexels.com/photos/4046658/pexels-photo-4046658.jpeg?auto=compress&cs=tinysrgb&w=150",
              },
              {
                name: "Emma Wilson",
                treatment: "Chemical Peel",
                rating: 5,
                text: "The best investment I've made for my skin. The team at Glow Aesthetics Lab is professional, knowledgeable, and truly cares about their clients. Highly recommend!",
                image:
                  "https://images.pexels.com/photos/4046640/pexels-photo-4046640.jpeg?auto=compress&cs=tinysrgb&w=150",
              },
              {
                name: "Lisa Thompson",
                treatment: "Laser Hair Removal",
                rating: 5,
                text: "I've been to several clinics before, but none compare to Glow Aesthetics Lab. The quality of service and attention to detail is exceptional. Thank you for giving me my confidence back!",
                image:
                  "https://images.pexels.com/photos/4046641/pexels-photo-4046641.jpeg?auto=compress&cs=tinysrgb&w=150",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fb0090]/20 to-gold/20 rounded-full mr-4 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[#fb0090] hover:bg-[#fb0090]/90 text-white font-semibold"
              asChild
            >
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Follow Our Journey
            </h2>
            <p className="text-muted-foreground mb-6">
              See our latest treatments and transformations on Instagram
            </p>
            <a
              href="https://www.instagram.com/glow_aesthetics_lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#fb0090] hover:text-[#fb0090]/80 transition-colors font-semibold"
            >
              @glow_aesthetics_lab
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fe5f17c02215f4d4fb7e0e96ad84d5888?format=webp&width=300",
                alt: "Professional facial treatment session",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fe572a766472442be84487efa50564391?format=webp&width=300",
                alt: "Aesthetic injection treatment",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Ff260a1ba2ee94b719aa24773a2efd267?format=webp&width=300",
                alt: "Lip enhancement procedure",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F624c103e669846699ec80213a5723756?format=webp&width=300",
                alt: "Professional skincare treatment",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F29ecb9d2758444de84b1dc7996674e9c?format=webp&width=300",
                alt: "Client consultation and results",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fc3c844b0a9b4474cbae560ce945dd908?format=webp&width=300",
                alt: "Advanced aesthetic treatment",
              },
            ].map((item, index) => (
              <a
                key={index}
                href="https://www.instagram.com/glow_aesthetics_lab"
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square bg-gradient-to-br from-gold/10 to-warm-beige/20 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                />
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-[#fb0090] text-[#fb0090] hover:bg-[#fb0090]/10"
              asChild
            >
              <a
                href="https://www.instagram.com/glow_aesthetics_lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                View More on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#fb0090]/10 via-gold/10 to-warm-beige/20">
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
              className="bg-[#fb0090] hover:bg-[#fb0090]/90 text-white font-semibold px-8"
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
              asChild
            >
              <a href="tel:+447904949580">Call +44 7904 949580</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Treatment Detail Modal */}
      {selectedTreatment && (
        <TreatmentModal
          treatment={selectedTreatment}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Fixed UI Components */}
      <BackToTop />
      <Chatbot />
      <CookieConsent />
    </div>
  );
}
