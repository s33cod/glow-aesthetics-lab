import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                <strong>Last updated:</strong> January 1, 2025
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground mb-6">
                By accessing and using the services of Glow Aesthetics Lab, you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Services Provided
              </h2>
              <p className="text-muted-foreground mb-4">
                Glow Aesthetics Lab provides aesthetic and cosmetic treatments
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Botox and dermal filler treatments</li>
                <li>Chemical peels and skin rejuvenation</li>
                <li>Laser hair removal</li>
                <li>Microneedling and HydraFacial treatments</li>
                <li>Aesthetic consultations</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Appointment Policy
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong>Booking:</strong> All appointments must be booked in
                advance through our website, phone, or email.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Cancellation:</strong> We require 24 hours notice for
                cancellations or changes. Failure to provide adequate notice may
                result in a cancellation fee of 50% of the treatment cost.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>No-Shows:</strong> Failure to attend a scheduled
                appointment without notice will result in the full treatment fee
                being charged.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Payment Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                Payment is due at the time of service. We accept cash, credit
                cards, and debit cards. For multiple treatments, payment plans
                may be available upon request.
              </p>
              <p className="text-muted-foreground mb-6">
                All prices are quoted in British Pounds (£) and include VAT
                where applicable.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Medical Considerations
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong>Consultation Required:</strong> All new clients must
                undergo a thorough consultation before any treatment.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Medical History:</strong> You must disclose all relevant
                medical history, medications, and allergies.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>Contraindications:</strong> Some treatments may not be
                suitable for certain medical conditions. Our practitioner
                reserves the right to refuse treatment if deemed unsafe.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Treatment Expectations
              </h2>
              <p className="text-muted-foreground mb-4">
                Results may vary between individuals. We cannot guarantee
                specific outcomes, and multiple sessions may be required for
                optimal results.
              </p>
              <p className="text-muted-foreground mb-6">
                Before and after photographs may be taken for treatment records
                and may be used for marketing purposes with your written
                consent.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Liability and Risks
              </h2>
              <p className="text-muted-foreground mb-4">
                All aesthetic treatments carry some degree of risk. These will
                be explained during your consultation, and you will be required
                to sign a consent form acknowledging these risks.
              </p>
              <p className="text-muted-foreground mb-6">
                Glow Aesthetics Lab's liability is limited to the cost of the
                treatment provided. We recommend appropriate insurance coverage
                for any treatments undertaken.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Aftercare
              </h2>
              <p className="text-muted-foreground mb-6">
                Detailed aftercare instructions will be provided following your
                treatment. Failure to follow these instructions may affect your
                results and could void any guarantees.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Privacy and Data Protection
              </h2>
              <p className="text-muted-foreground mb-6">
                We are committed to protecting your privacy and personal data in
                accordance with GDPR regulations. Please refer to our Privacy
                Policy for detailed information.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Modifications to Terms
              </h2>
              <p className="text-muted-foreground mb-6">
                Glow Aesthetics Lab reserves the right to modify these terms at
                any time. Updated terms will be posted on our website, and
                continued use of our services constitutes acceptance of any
                changes.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Contact Information
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms & Conditions, please
                contact us:
              </p>
              <div className="text-muted-foreground">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@glowaestheticslab.com"
                    className="text-[#fb0090] hover:text-[#fb0090]/80"
                  >
                    info@glowaestheticslab.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+447904949580"
                    className="text-[#fb0090] hover:text-[#fb0090]/80"
                  >
                    +44 7904 949580
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Surrey Quays, LONDON SE16. UK
                </p>
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
