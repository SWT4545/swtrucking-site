import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Smith & Williams Trucking | Terms of Service",
  description:
    "Terms of service for Smith & Williams Trucking. Review our terms and conditions for using our services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Content */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass border-white/5">
            <CardContent className="p-8 md:p-12 prose prose-invert prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-400 mb-8">
                By accessing or using the services provided by Smith & Williams
                Trucking (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
                you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our services.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Services Description
              </h2>
              <p className="text-gray-400 mb-8">
                Smith & Williams Trucking provides transportation, logistics,
                and dispatch support services. Our services are subject to
                availability and may be modified or discontinued at our
                discretion. Specific service terms may be outlined in separate
                agreements.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-400 mb-4">
                When using our services or communicating with us, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with or disrupt our services</li>
              </ul>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Communications
              </h2>
              <p className="text-gray-400 mb-6">
                By providing your contact information, you consent to receive
                operational communications from us related to our services.
                This may include:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                <li>Service-related emails</li>
                <li>Operational SMS messages (see our{" "}
                  <Link href="/sms-policy" className="text-red-500 hover:text-red-400">
                    SMS Policy
                  </Link>
                )</li>
                <li>Status updates and notifications</li>
              </ul>
              <p className="text-gray-400 mb-8">
                We use SMS exclusively for operational purposes—not marketing.
                Message frequency varies based on operational needs. Message
                and data rates may apply.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-400 mb-8">
                All content on our website and materials, including but not
                limited to text, graphics, logos, and software, are the
                property of Smith & Williams Trucking and are protected by
                applicable intellectual property laws. You may not use,
                reproduce, or distribute our content without our written
                permission.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-400 mb-8">
                To the maximum extent permitted by law, Smith & Williams
                Trucking shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or
                related to your use of our services. Our total liability shall
                not exceed the amount paid by you for the specific services
                giving rise to the claim.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-gray-400 mb-8">
                Our services are provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express
                or implied. We do not warrant that our services will be
                uninterrupted, error-free, or completely secure.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Indemnification
              </h2>
              <p className="text-gray-400 mb-8">
                You agree to indemnify and hold harmless Smith & Williams
                Trucking, its officers, directors, employees, and agents from
                any claims, damages, losses, or expenses arising from your use
                of our services or violation of these terms.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Governing Law
              </h2>
              <p className="text-gray-400 mb-8">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of Arizona, without
                regard to its conflict of law provisions.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-400 mb-8">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting to our
                website. Your continued use of our services after any changes
                constitutes acceptance of the modified terms.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Severability
              </h2>
              <p className="text-gray-400 mb-8">
                If any provision of these Terms of Service is found to be
                unenforceable, the remaining provisions shall continue in full
                force and effect.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Smith & Williams Trucking</strong>
                <br />
                7600 N. 15th St. Suite 150
                <br />
                Phoenix, AZ 85020
                <br />
                Email:{" "}
                <a
                  href="mailto:dispatch@smithwilliamstrucking.com"
                  className="text-red-500 hover:text-red-400"
                >
                  dispatch@smithwilliamstrucking.com
                </a>
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Related Policies
              </h2>
              <p className="text-gray-400">
                Please also review our{" "}
                <Link href="/privacy" className="text-red-500 hover:text-red-400">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/sms-policy" className="text-red-500 hover:text-red-400">
                  SMS Policy
                </Link>{" "}
                for additional information about our practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
