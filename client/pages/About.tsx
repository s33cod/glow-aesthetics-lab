import { Button } from "@/components/ui/button";
import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import {
  ArrowLeft,
  Star,
  Award,
  Users,
  Shield,
  Heart,
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

      <Footer />

      {/* Fixed UI Components */}
      <BackToTop />
      <Chatbot />
      <CookieConsent />
    </div>
  );
}
