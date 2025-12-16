import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smith & Williams Trucking - our approach to transportation, logistics, and operational excellence.",
};

const values = [
  {
    icon: Target,
    title: "Documentation Accuracy",
    description:
      "Every load is supported by properly processed and verified documentation, from initial dispatch to final closeout.",
  },
  {
    icon: Users,
    title: "Clean Communication",
    description:
      "Structured updates, defined escalation paths, and operational messaging only—no guesswork or marketing noise.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description:
      "Records are organized for audit readiness, supporting compliance reviews and issue resolution.",
  },
];

const commitments = [
  "Documentation-first operations with integrated BOL and RC workflows",
  "Clear communication standards with defined escalation paths",
  "Compliance-minded processes organized for audit readiness",
  "Operations-only messaging—SMS used strictly for service coordination",
  "Performance metrics tracked internally for accountability",
  "Structured load lifecycle from dispatch to closeout",
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Smith & Williams</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Premier dispatch-ready transportation built on structured
              workflows, documented processes, and clear communication
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Mission Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Approach
              </h2>
              <p className="text-gray-400 mb-4">
                Smith & Williams Trucking operates with structured workflows,
                documented processes, and clear communication standards designed
                to reduce friction, prevent errors, and keep work moving forward
                without surprises.
              </p>
              <p className="text-gray-400 mb-4">
                Our approach emphasizes accountability, traceability, and clean
                execution at every stage of a load. We believe that reliable
                transportation starts with proper documentation and clear
                communication.
              </p>
              <p className="text-gray-400">
                Every operational decision is made with documentation accuracy
                and compliance readiness in mind.
              </p>
            </div>

            <Card className="glass border-white/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Our Commitments
                </h3>
                <ul className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-300">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Values Section */}
      <section className="py-20 md:py-28 relative bg-[#0c0c0c]">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Core principles that guide every aspect of our operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass border-white/5 hover:border-red-600/20 transition-colors"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Contact Info */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass border-white/5">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-400 mb-6">
                  Have questions or want to discuss how we can support your
                  transportation needs?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <div className="text-sm">
                    <span className="text-gray-500">Email:</span>{" "}
                    <a
                      href="mailto:dispatch@smithwilliamstrucking.com"
                      className="text-red-500 hover:text-red-400"
                    >
                      dispatch@smithwilliamstrucking.com
                    </a>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-8">
                  7600 N. 15th St. Suite 150, Phoenix, AZ 85020
                </div>
                <Link href="/contact">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
