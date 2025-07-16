import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { SEO } from "@/components/ui/seo";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const galleryCategories = [
    {
      title: "Before & After - Skin Rejuvenation",
      images: [
        {
          before:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F0aaed9e3c0bc4af1824e9f223c554dbf?format=webp&width=400",
          after:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F0aaed9e3c0bc4af1824e9f223c554dbf?format=webp&width=400",
          description: "Skin texture improvement with advanced treatments",
        },
        {
          before:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fcf33cb88d8c64324bb2f795f89747654?format=webp&width=400",
          after:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fa17cffd0404f43c19b369d4aadf23bf8?format=webp&width=400",
          description: "Microneedling results - One session progress",
        },
      ],
    },
    {
      title: "Before & After - Dermal Fillers",
      images: [
        {
          before:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fc82837296ec840dcadde9932b5ec0112?format=webp&width=400",
          after:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fc82837296ec840dcadde9932b5ec0112?format=webp&width=400",
          description: "HydroFiller+ treatment - Natural enhancement",
        },
        {
          before:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F0f93fbf6d06343d5bcc3902c307f9a14?format=webp&width=400",
          after:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F0f93fbf6d06343d5bcc3902c307f9a14?format=webp&width=400",
          description: "Lip enhancement - Volume and definition",
        },
      ],
    },
    {
      title: "Before & After - Anti-Aging Treatments",
      images: [
        {
          before:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fb297d62335e842ad8a4b49f5d2260c7c?format=webp&width=400",
          after:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fb297d62335e842ad8a4b49f5d2260c7c?format=webp&width=400",
          description: "Neck and jawline rejuvenation results",
        },
        {
          before:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fad3e74e66b8949959ba57fdca82c0a6e?format=webp&width=400",
          after:
            "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fad3e74e66b8949959ba57fdca82c0a6e?format=webp&width=400",
          description: "Body contouring and measurement results",
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
      <SEO
        title="Treatment Gallery - Before & After Results | Glow Aesthetics Lab London"
        description="View real before and after results from our aesthetic treatments. See transformations from Botox, dermal fillers, microneedling and skin rejuvenation treatments in Surrey Quays, London."
        keywords="before after results London, aesthetic treatment gallery, botox results, dermal filler results, microneedling before after, Surrey Quays beauty results"
        url="https://glowaestheticslab.com/gallery"
      />
      <Navigation />

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

      <Footer />

      {/* Fixed UI Components */}
      <BackToTop />
      <Chatbot />
      <CookieConsent />
    </div>
  );
}
