import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { SEO } from "@/components/ui/seo";
import { ArrowLeft, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      treatment: "Botox & Dermal Fillers",
      rating: 5,
      text: "Absolutely amazing experience! Olivene made me feel so comfortable and the results are exactly what I wanted. My skin looks naturally refreshed and I couldn't be happier.",
      image: "/placeholder.svg",
    },
    {
      name: "Emma Wilson",
      treatment: "Chemical Peel",
      rating: 5,
      text: "The best investment I've made for my skin. The team at Glow Aesthetics Lab is professional, knowledgeable, and truly cares about their clients. Highly recommend!",
      image: "/placeholder.svg",
    },
    {
      name: "Lisa Thompson",
      treatment: "Laser Hair Removal",
      rating: 5,
      text: "I've been to several clinics before, but none compare to Glow Aesthetics Lab. The quality of service and attention to detail is exceptional. Thank you for giving me my confidence back!",
      image: "/placeholder.svg",
    },
    {
      name: "Michelle Davis",
      treatment: "HydraFacial",
      rating: 5,
      text: "Outstanding results and such a relaxing experience. My skin has never looked better. I'm already booking my next appointment!",
      image: "/placeholder.svg",
    },
    {
      name: "Rachel Green",
      treatment: "Microneedling",
      rating: 5,
      text: "The expertise and care I received was beyond my expectations. The clinic is beautiful, the staff is wonderful, and my results speak for themselves.",
      image: "/placeholder.svg",
    },
    {
      name: "Jennifer Adams",
      treatment: "Lip Fillers",
      rating: 5,
      text: "Perfect natural-looking results! Olivene really listened to what I wanted and delivered exactly that. I feel so much more confident now.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Client Testimonials - Glow Aesthetics Lab London"
        description="Read genuine client reviews and testimonials about our aesthetic treatments. See why clients love Glow Aesthetics Lab in Surrey Quays, London."
        keywords="client testimonials London, aesthetic treatment reviews, botox reviews London, dermal filler testimonials, Surrey Quays beauty reviews"
        url="https://glowaestheticslab.com/testimonials"
      />
      <Navigation />

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
              className="flex items-center text-white/80 hover:text-gold transition-colors mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center w-full">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Client Testimonials
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Hear what our valued clients have to say about their experiences
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Real Stories, Real Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our clients' satisfaction is our greatest achievement. Read their
              stories and discover why they choose Glow Aesthetics Lab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gold/10 relative"
              >
                <Quote className="h-8 w-8 text-gold/30 mb-4" />
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-warm-beige/30 rounded-full mr-4 overflow-hidden">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gold/10 via-warm-beige/20 to-gold-light/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Share Your Own Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community of satisfied clients and experience the
            difference at Glow Aesthetics Lab
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-white font-semibold px-8"
            asChild
          >
            <Link to="/booking">Book Your Consultation</Link>
          </Button>
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
