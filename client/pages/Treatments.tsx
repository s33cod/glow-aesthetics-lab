import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { TreatmentModal } from "@/components/ui/treatment-modal";
import { Calendar, Clock, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (treatment: any) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTreatment(null);
  };

  const treatmentCategories = [
    {
      name: "Injectables",
      treatments: [
        {
          name: "Botox",
          description:
            "Reduce fine lines and wrinkles with precision botulinum toxin injections",
          duration: "30 minutes",
          price: "£299",
          details: [
            "Forehead lines",
            "Crow's feet",
            "Frown lines",
            "Results last 3-4 months",
          ],
        },
        {
          name: "Dermal Fillers",
          description:
            "Restore volume and smooth lines with hyaluronic acid fillers",
          duration: "45 minutes",
          price: "£599",
          details: [
            "Lip enhancement",
            "Cheek augmentation",
            "Nasolabial folds",
            "Results last 12-18 months",
          ],
        },
        {
          name: "Lip Fillers",
          description:
            "Enhance lip volume and definition for a natural, beautiful look",
          duration: "30 minutes",
          price: "£499",
          details: [
            "Volume enhancement",
            "Border definition",
            "Symmetry correction",
            "Natural-looking results",
          ],
        },
      ],
    },
    {
      name: "Skin Rejuvenation",
      treatments: [
        {
          name: "Chemical Peels",
          description:
            "Reveal fresh, radiant skin with customized chemical exfoliation",
          duration: "60 minutes",
          price: "£150",
          details: [
            "Light, medium, or deep peels",
            "Acne treatment",
            "Pigmentation correction",
            "Minimal downtime",
          ],
        },
        {
          name: "Microneedling",
          description:
            "Stimulate collagen production for improved skin texture and tone",
          duration: "75 minutes",
          price: "£299",
          details: [
            "Collagen induction",
            "Scar reduction",
            "Pore refinement",
            "Series recommended",
          ],
        },
        {
          name: "HydraFacial",
          description:
            "Multi-step treatment that cleanses, extracts, and hydrates",
          duration: "45 minutes",
          price: "£199",
          details: [
            "Deep cleansing",
            "Gentle extraction",
            "Intense hydration",
            "Immediate glow",
          ],
        },
      ],
    },
    {
      name: "Laser Treatments",
      treatments: [
        {
          name: "Laser Hair Removal",
          description:
            "Safe, effective permanent hair reduction for all skin types",
          duration: "30-90 minutes",
          price: "£99",
          details: [
            "All skin types",
            "Multiple areas available",
            "6-8 sessions recommended",
            "Long-lasting results",
          ],
        },
        {
          name: "Laser Skin Resurfacing",
          description:
            "Advanced laser technology for skin texture and tone improvement",
          duration: "60 minutes",
          price: "£599",
          details: [
            "Wrinkle reduction",
            "Scar improvement",
            "Sun damage repair",
            "Minimal downtime",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Header with Background Image */}
      <section className="relative h-64 bg-gradient-to-br from-gold/20 to-warm-beige/30 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4046735/pexels-photo-4046735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
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
              Treatment Menu & Pricing
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our comprehensive range of premium aesthetic treatments,
              each designed to enhance your natural beauty
            </p>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {treatmentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.treatments.map((treatment, treatmentIndex) => (
                  <div
                    key={treatmentIndex}
                    className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gold/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {treatment.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gold">
                          {treatment.price}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {treatment.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {treatment.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {treatment.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <Star className="h-3 w-3 mr-2 text-gold fill-current" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button
                        className="w-full bg-gold hover:bg-gold/90 text-white font-semibold"
                        asChild
                      >
                        <Link to="/booking">
                          <Calendar className="mr-2 h-4 w-4" />
                          Book This Treatment
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-gold text-gold hover:bg-gold/10"
                        onClick={() => handleLearnMore(treatment)}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-gradient-to-br from-gold/10 via-warm-beige/20 to-gold-light/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Not Sure Which Treatment is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a complimentary consultation with our expert team to create a
            personalized treatment plan
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-white font-semibold px-8"
            asChild
          >
            <Link to="/booking">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Link>
          </Button>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Treatment Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the real transformations achieved with our expert treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "HydroFiller Treatment",
                before:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F4c1b54bbbb90491fb9fe373a2f020c8c?format=webp&width=400",
                after:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F4c1b54bbbb90491fb9fe373a2f020c8c?format=webp&width=400",
              },
              {
                title: "Lip Enhancement",
                before:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Ffd971bd5b6724ca193083843d4154bbb?format=webp&width=400",
                after:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Ffd971bd5b6724ca193083843d4154bbb?format=webp&width=400",
              },
              {
                title: "Microneedling",
                before:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F6067c8cf367948fd856ee972edb43066?format=webp&width=400",
                after:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F639e8b19d68a42729be93231a640ec67?format=webp&width=400",
              },
              {
                title: "Anti-Aging Treatment",
                before:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2F92d76ba92d8c40daa7c60cc310cb4a0e?format=webp&width=400",
                after:
                  "https://cdn.builder.io/api/v1/image/assets%2F103648a78fd24251870681fe3bc208a8%2Fd31ffe02157b486e8799d898c80eedf8?format=webp&width=400",
              },
            ].map((result, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-4 shadow-md"
              >
                <h4 className="font-semibold text-foreground mb-3 text-center text-sm">
                  {result.title}
                </h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1 text-center uppercase tracking-wide">
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
                    <p className="text-xs text-gold mb-1 text-center uppercase tracking-wide">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Booking Policy
              </h3>
              <p className="text-sm text-muted-foreground">
                24-hour cancellation notice required. Same-day cancellations may
                incur a fee.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Payment Options
              </h3>
              <p className="text-sm text-muted-foreground">
                We accept cash, credit cards, and offer financing options for
                larger treatments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Results Timeline
              </h3>
              <p className="text-sm text-muted-foreground">
                Results vary by treatment. Some show immediate effects, others
                develop over 2-4 weeks.
              </p>
            </div>
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
