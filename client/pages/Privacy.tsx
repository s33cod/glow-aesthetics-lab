import { BackToTop } from "@/components/ui/back-to-top";
import { Chatbot } from "@/components/ui/chatbot";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                <strong>Last updated:</strong> January 1, 2025
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground mb-6">
                Glow Aesthetics Lab ("we," "our," or "us") is committed to
                protecting your privacy and personal data. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services in
                compliance with the General Data Protection Regulation (GDPR).
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Personal Information
              </h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide
                to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Name and contact details (email, phone, address)</li>
                <li>Date of birth and age</li>
                <li>Medical history and health information</li>
                <li>Treatment preferences and goals</li>
                <li>Payment information</li>
                <li>Photos for treatment records (with consent)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-muted-foreground mb-6">
                When you visit our website, we may automatically collect certain
                information about your device and usage patterns, including IP
                address, browser type, operating system, and pages viewed.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
                <li>Providing aesthetic treatments and consultations</li>
                <li>Scheduling and managing appointments</li>
                <li>Processing payments and billing</li>
                <li>Maintaining treatment records</li>
                <li>Communicating about your treatments and aftercare</li>
                <li>Sending appointment reminders and follow-ups</li>
                <li>Marketing communications (with your consent)</li>
                <li>Improving our services and website</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Legal Basis for Processing
              </h2>
              <p className="text-muted-foreground mb-4">
                Under GDPR, we process your personal data based on:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
                <li>
                  <strong>Consent:</strong> For marketing communications and
                  photography
                </li>
                <li>
                  <strong>Contract:</strong> To provide the services you
                  requested
                </li>
                <li>
                  <strong>Legal obligation:</strong> For medical record keeping
                  and regulatory compliance
                </li>
                <li>
                  <strong>Legitimate interests:</strong> For improving our
                  services and website functionality
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Data Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground mb-4">
                We do not sell or rent your personal information. We may share
                your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>
                  With trusted service providers (under strict agreements)
                </li>
                <li>In case of medical emergencies</li>
                <li>For insurance purposes (with your consent)</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Data Security
              </h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Data Retention
              </h2>
              <p className="text-muted-foreground mb-6">
                We retain your personal data for as long as necessary to fulfill
                the purposes outlined in this privacy policy, typically 7 years
                for medical records as required by professional regulations, or
                until you withdraw your consent where applicable.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Your Rights Under GDPR
              </h2>
              <p className="text-muted-foreground mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
                <li>
                  <strong>Right of access:</strong> Request a copy of your
                  personal data
                </li>
                <li>
                  <strong>Right to rectification:</strong> Correct inaccurate
                  data
                </li>
                <li>
                  <strong>Right to erasure:</strong> Request deletion of your
                  data
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> Limit how we
                  use your data
                </li>
                <li>
                  <strong>Right to data portability:</strong> Receive your data
                  in a portable format
                </li>
                <li>
                  <strong>Right to object:</strong> Object to certain types of
                  processing
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Withdraw consent
                  at any time
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground mb-6">
                Our website uses cookies to enhance your browsing experience.
                You can control cookie settings through our cookie consent
                banner and your browser settings. Essential cookies are
                necessary for website functionality, while analytics and
                marketing cookies require your consent.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-muted-foreground mb-6">
                Your personal data is primarily processed within the UK. If we
                transfer data outside the UK/EU, we ensure appropriate
                safeguards are in place to protect your information.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Contact Information and Complaints
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </p>
              <div className="text-muted-foreground mb-6">
                <p>
                  <strong>Data Protection Officer:</strong> Olivene D
                </p>
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

              <p className="text-muted-foreground mb-4">
                If you believe we have not addressed your concerns adequately,
                you have the right to lodge a complaint with the Information
                Commissioner's Office (ICO):
              </p>
              <div className="text-muted-foreground">
                <p>
                  <strong>ICO Website:</strong>{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fb0090] hover:text-[#fb0090]/80"
                  >
                    ico.org.uk
                  </a>
                </p>
                <p>
                  <strong>ICO Helpline:</strong> 0303 123 1113
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated "Last updated" date.
                We encourage you to review this Privacy Policy periodically.
              </p>
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
