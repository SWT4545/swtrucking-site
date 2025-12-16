import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "SMS Policy",
  description:
    "SMS messaging policy for Smith & Williams Trucking. Operations-only messaging, opt-in/opt-out procedures, and contact information.",
};

export default function SMSPolicyPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              SMS Policy
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
                Operations-Only Messaging
              </h2>
              <p className="text-gray-400 mb-6">
                Smith & Williams Trucking uses SMS (text messaging) exclusively
                for operational coordination and service-related communications.
                We do not send marketing, promotional, or advertising messages
                via SMS.
              </p>
              <p className="text-gray-400 mb-8">
                Text messages from Smith & Williams Trucking may include:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
                <li>Load status updates and dispatch coordination</li>
                <li>Delivery confirmations and scheduling notifications</li>
                <li>Documentation requests and operational alerts</li>
                <li>Service-related responses to your inquiries</li>
              </ul>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Opt-In Consent
              </h2>
              <p className="text-gray-400 mb-6">
                By providing your mobile phone number to Smith & Williams
                Trucking and engaging in text message communication with us, you
                consent to receive operational SMS messages related to our
                services. Consent may be obtained through:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
                <li>Initiating a text message conversation with us</li>
                <li>Providing your phone number for service coordination</li>
                <li>Agreeing to receive operational updates during onboarding</li>
              </ul>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Message Frequency
              </h2>
              <p className="text-gray-400 mb-8">
                Message frequency varies based on operational needs and your
                engagement with our services. You will only receive messages
                that are necessary for service coordination and operational
                communication.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Message and Data Rates
              </h2>
              <p className="text-gray-400 mb-8">
                Message and data rates may apply depending on your mobile
                carrier and service plan. Smith & Williams Trucking is not
                responsible for any charges incurred from your mobile carrier
                for receiving SMS messages.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Opt-Out Instructions
              </h2>
              <p className="text-gray-400 mb-6">
                You may opt out of receiving SMS messages from Smith & Williams
                Trucking at any time by:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                <li>
                  Replying <strong className="text-white">STOP</strong> or{" "}
                  <strong className="text-white">UNSUBSCRIBE</strong> to any
                  message
                </li>
                <li>
                  Contacting us at{" "}
                  <a
                    href="mailto:dispatch@smithwilliamstrucking.com"
                    className="text-red-500 hover:text-red-400"
                  >
                    dispatch@smithwilliamstrucking.com
                  </a>
                </li>
              </ul>
              <p className="text-gray-400 mb-8">
                After opting out, you will receive a confirmation message and no
                further SMS messages will be sent unless you re-initiate contact
                or provide renewed consent.
              </p>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Help and Support
              </h2>
              <p className="text-gray-400 mb-6">
                For assistance with SMS messaging or any questions about this
                policy:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                <li>
                  Reply <strong className="text-white">HELP</strong> to any
                  message for assistance
                </li>
                <li>
                  Email us at{" "}
                  <a
                    href="mailto:dispatch@smithwilliamstrucking.com"
                    className="text-red-500 hover:text-red-400"
                  >
                    dispatch@smithwilliamstrucking.com
                  </a>
                </li>
              </ul>

              <div className="divider-red my-8" />

              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-4">
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
                <Link href="/terms" className="text-red-500 hover:text-red-400">
                  Terms of Service
                </Link>{" "}
                for additional information about how we handle your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
