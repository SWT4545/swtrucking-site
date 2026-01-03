import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  DollarSign,
  Shield,
  Heart,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description:
    "Join Smith & Williams Trucking. We're hiring experienced CDL drivers. Competitive pay, modern equipment, and a supportive team environment.",
  keywords: [
    "CDL driver jobs",
    "trucking careers",
    "driver jobs Phoenix",
    "OTR driver",
    "trucking jobs Arizona",
  ],
};

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description:
      "Industry-leading pay rates with percentage or per-mile options. Weekly settlements with direct deposit.",
  },
  {
    icon: Truck,
    title: "Modern Equipment",
    description:
      "Well-maintained, late-model trucks with the latest safety features and comfortable cabs.",
  },
  {
    icon: Shield,
    title: "Full Compliance Support",
    description:
      "Our compliance team handles all DOT requirements, so you can focus on driving.",
  },
  {
    icon: Heart,
    title: "Driver-First Culture",
    description:
      "We treat our drivers as partners, not numbers. Your input matters here.",
  },
  {
    icon: Clock,
    title: "Consistent Miles",
    description:
      "Steady freight and efficient dispatching means reliable income every week.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    description:
      "24/7 dispatch support and a team that's always in your corner.",
  },
];

const requirements = [
  "Valid Class A CDL",
  "Minimum 1 year of verifiable OTR experience",
  "Clean MVR (no major violations in past 3 years)",
  "Valid DOT Medical Card",
  "Must pass DOT drug screen and background check",
  "Professional attitude and strong work ethic",
];

const openPositions = [
  {
    title: "OTR Company Driver",
    type: "Full-Time",
    location: "Phoenix, AZ (Home Base)",
    description:
      "Join our team as an OTR driver running nationwide lanes. Competitive percentage pay, consistent miles, and home time.",
    highlights: [
      "Percentage pay (25-30%)",
      "All miles paid",
      "Fuel card provided",
      "Weekly settlements",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-medium">Join Our Team</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Drive With
              <br />
              <span className="text-red-600">Smith & Williams</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              We&apos;re looking for professional drivers who take pride in their
              work. If you want competitive pay, respect, and a company that
              values your experience, you&apos;ve found the right place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.smithwilliamstrucking.com/apply"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 glow-red-subtle"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 hover:bg-white/5 text-gray-300"
                >
                  Contact Recruiting
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Why Drive With Us */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Drive With Us
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer more than just a job—we offer a career with a company
              that respects drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="glass border-white/5 hover:border-red-600/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Open Positions */}
      <section className="py-20 md:py-28 relative bg-[#0c0c0c]">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to start? Check out our current openings.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="glass border-white/5 hover:border-red-600/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <a
                      href="https://app.smithwilliamstrucking.com/apply"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>

                  <p className="text-gray-400 mb-4">{position.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {position.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Requirements */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Basic Requirements
              </h2>
              <p className="text-gray-400 mb-8">
                We hire experienced, professional drivers who meet our safety
                and compliance standards. Here&apos;s what we&apos;re looking for:
              </p>

              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    {req}
                  </div>
                ))}
              </div>
            </div>

            <Card className="glass border-white/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Ready to Apply?
                </h3>
                <p className="text-gray-400 mb-6">
                  The application takes about 5 minutes. Have your CDL, work
                  history, and contact info ready.
                </p>
                <a
                  href="https://app.smithwilliamstrucking.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white glow-red-subtle"
                  >
                    Start Your Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <p className="text-xs text-gray-500 text-center mt-4">
                  We review all applications within 2-3 business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Contact CTA */}
      <section className="py-20 md:py-28 relative bg-[#0c0c0c]">
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our recruiting team is happy to answer any questions about
            positions, pay, equipment, or anything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 hover:bg-white/5 text-gray-300"
              >
                Contact Recruiting
              </Button>
            </Link>
            <a href="mailto:dispatch@smithwilliamstrucking.com">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Email Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
