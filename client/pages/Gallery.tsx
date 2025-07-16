import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import {
  ArrowLeft,
  Calendar,
  Home,
  Stethoscope,
  MessageSquare,
  Camera,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const galleryCategories = [
    {
      title: "Before & After - Botox",
      images: [
        {
          before:
            "https://images.pexels.com/photos/4046658/pexels-photo-4046658.jpeg?auto=compress&cs=tinysrgb&w=400",
          after:
            "https://images.pexels.com/photos/4046640/pexels-photo-4046640.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Forehead lines reduction - 2 weeks post treatment",
        },
        {
          before:
            "https://images.pexels.com/photos/4046659/pexels-photo-4046659.jpeg?auto=compress&cs=tinysrgb&w=400",
          after:
            "https://images.pexels.com/photos/4046641/pexels-photo-4046641.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Crow's feet treatment - 3 weeks post treatment",
        },
      ],
    },
    {
      title: "Before & After - Dermal Fillers",
      images: [
        {
          before:
            "https://images.pexels.com/photos/4046658/pexels-photo-4046658.jpeg?auto=compress&cs=tinysrgb&w=400",
          after:
            "https://images.pexels.com/photos/4046640/pexels-photo-4046640.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Lip enhancement - Natural volume increase",
        },
        {
          before:
            "https://images.pexels.com/photos/4046659/pexels-photo-4046659.jpeg?auto=compress&cs=tinysrgb&w=400",
          after:
            "https://images.pexels.com/photos/4046641/pexels-photo-4046641.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Cheek augmentation - 1 month post treatment",
        },
      ],
    },
    {
      title: "Before & After - Skin Rejuvenation",
      images: [
        {
          before:
            "https://images.pexels.com/photos/4046658/pexels-photo-4046658.jpeg?auto=compress&cs=tinysrgb&w=400",
          after:
            "https://images.pexels.com/photos/4046640/pexels-photo-4046640.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Chemical peel results - 6 weeks post treatment",
        },
        {
          before:
            "https://images.pexels.com/photos/4046659/pexels-photo-4046659.jpeg?auto=compress&cs=tinysrgb&w=400",
          after:
            "https://images.pexels.com/photos/4046641/pexels-photo-4046641.jpeg?auto=compress&cs=tinysrgb&w=400",
          description: "Microneedling series - 3 months post treatment",
        },
      ],
    },
  ];

  const clinicImages = [
    {
      src: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Treatment Room 1",
    },
    {
      src: "https://images.pexels.com/photos/4015620/pexels-photo-4015620.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Reception Area",
    },
    {
      src: "https://images.pexels.com/photos/4046658/pexels-photo-4046658.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Consultation Room",
    },
    {
      src: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Treatment Equipment",
    },
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
                <a
                  href="#"
                  className="text-foreground hover:text-gold transition-colors font-medium flex items-center"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Gallery
                </a>
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
              <Button className="bg-gold hover:bg-gold/90 text-white font-semibold">
                Book Appointment
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
            backgroundImage: `url('https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
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
              Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See the stunning transformations and beautiful results we achieve
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Before & After Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients. See the transformative power of
              our treatments.
            </p>
          </div>

          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.images.map((imageSet, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-6 shadow-lg"
                  >
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-2 text-center">
                          BEFORE
                        </p>
                        <div className="aspect-square bg-gradient-to-br from-gold/10 to-warm-beige/20 rounded-xl overflow-hidden">
                          <img
                            src={imageSet.before}
                            alt="Before treatment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gold mb-2 text-center">
                          AFTER
                        </p>
                        <div className="aspect-square bg-gradient-to-br from-gold/10 to-warm-beige/20 rounded-xl overflow-hidden">
                          <img
                            src={imageSet.after}
                            alt="After treatment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-muted-foreground text-sm">
                      {imageSet.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Beautiful Clinic
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Step into our luxurious, state-of-the-art facility designed for
              your comfort and relaxation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-gold/10 to-warm-beige/20 rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gold/10 via-warm-beige/20 to-gold-light/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your consultation today and start your journey to looking and
            feeling your best
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-white font-semibold px-8"
            asChild
          >
            <Link to="/booking">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Consultation
            </Link>
          </Button>
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
