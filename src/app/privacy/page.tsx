import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Smith & Williams Trucking | Privacy Policy",
  description:
    "Privacy policy for Smith & Williams Trucking. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Privacy Policy
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
                Introduction
              </h2>
              <p className="text-gray-400 mb-8">
                Smith & Williams Trucking (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) respects your privacy and is committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you interact with our services.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-400 mb-4">
                We may collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company or business information</li>
                <li>Communication preferences</li>
                <li>Information provided through our contact forms</li>
                <li>Operational data related to transportation services</li>
              </ul>
              <p className="text-gray-400 mb-8">
                We may also automatically collect certain information when you
                visit our website, including IP address, browser type, and
                usage data.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-400 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
                <li>Provide and manage transportation services</li>
                <li>Communicate with you about service-related matters</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send operational SMS messages (see our{" "}
                  <Link href="/sms-policy" className="text-red-500 hover:text-red-400">
                    SMS Policy
                  </Link>
                )</li>
                <li>Maintain records for compliance and audit purposes</li>
                <li>Improve our services and operations</li>
              </ul>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                SMS Communications
              </h2>
              <p className="text-gray-400 mb-6">
                We use SMS messaging exclusively for operational coordination
                and service-related communications. We do not send marketing
                or promotional text messages. Message frequency varies based on
                operational needs. Message and data rates may apply.
              </p>
              <p className="text-gray-400 mb-8">
                For complete details about our SMS practices, please review our{" "}
                <Link href="/sms-policy" className="text-red-500 hover:text-red-400">
                  SMS Policy
                </Link>.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-400 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Business partners involved in transportation services</li>
                <li>Legal authorities when required by law</li>
                <li>Professional advisors as necessary</li>
              </ul>
              <p className="text-gray-400 mb-8">
                We do not sell your personal information to third parties.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Data Security
              </h2>
              <p className="text-gray-400 mb-8">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet or electronic storage
                is completely secure.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Data Retention
              </h2>
              <p className="text-gray-400 mb-8">
                We retain your personal information for as long as necessary to
                fulfill the purposes for which it was collected, comply with
                legal obligations, resolve disputes, and enforce our agreements.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Your Rights
              </h2>
              <p className="text-gray-400 mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of certain communications</li>
              </ul>
              <p className="text-gray-400 mb-8">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:dispatch@smithwilliamstrucking.com"
                  className="text-red-500 hover:text-red-400"
                >
                  dispatch@smithwilliamstrucking.com
                </a>.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-400 mb-8">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-400 mb-4">
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us:
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
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
