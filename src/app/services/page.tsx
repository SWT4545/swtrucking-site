import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  FileText,
  MessageSquare,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Transportation and logistics services from Smith & Williams Trucking. Dispatch support, documentation management, and operational coordination.",
};

const services = [
  {
    icon: Truck,
    title: "Transportation Services",
    description:
      "Reliable freight transportation with structured workflows and documentation at every stage.",
    features: [
      "Full truckload (FTL) transportation",
      "Multi-state coverage based on customer needs",
      "Load tracking and status updates",
      "On-time delivery focus",
    ],
  },
  {
    icon: FileText,
    title: "Documentation Management",
    description:
      "Comprehensive documentation workflows integrated into every load lifecycle.",
    features: [
      "BOL processing and verification",
      "Rate confirmation handling",
      "Proof of delivery management",
      "Audit-ready recordkeeping",
    ],
  },
  {
    icon: MessageSquare,
    title: "Dispatch Coordination",
    description:
      "Clear communication and coordination throughout the transportation process.",
    features: [
      "Structured dispatch workflows",
      "Status update protocols",
      "Exception and escalation handling",
      "Operational messaging only",
    ],
  },
  {
    icon: Clock,
    title: "Load Lifecycle Management",
    description:
      "End-to-end oversight from dispatch to delivery confirmation.",
    features: [
      "Defined checkpoints and milestones",
      "Documentation-controlled closeout",
      "Issue identification and resolution",
      "Complete load history tracking",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Coordination",
    description:
      "Requirements are gathered, documentation is prepared, and dispatch details are confirmed.",
  },
  {
    step: "02",
    title: "Active Transport",
    description:
      "Load is in transit with structured status updates and monitoring throughout.",
  },
  {
    step: "03",
    title: "Delivery Confirmation",
    description:
      "Delivery is confirmed, documentation is collected, and any exceptions are addressed.",
  },
  {
    step: "04",
    title: "Documentation Closeout",
    description:
      "All paperwork is verified, filed, and organized for audit readiness.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Truck Image Banner */}
      <section
        className="relative h-48 md:h-64 lg:h-72 overflow-hidden"
        style={{
          backgroundImage: 'url(/trk_logo.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Desaturation filter via grayscale mix */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/trk_logo.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(40%)',
            opacity: 0.4,
          }}
        />
        {/* Minimal heading */}
        <div className="relative h-full flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 tracking-wide">
            Freight Services
          </h2>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Transportation and logistics services built on documentation
              accuracy, clean communication, and operational discipline.
            </p>
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Discuss Your Needs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Services Grid */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass border-white/5 hover:border-red-600/20 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-red-600/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Process Section */}
      <section className="py-20 md:py-28 relative bg-[#0c0c0c]">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every load follows a structured workflow with clear checkpoints
              and documentation requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-red-600/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Compliance Note */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass border-white/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                  <Shield className="w-7 h-7 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Compliance & Communication
                  </h2>
                  <p className="text-gray-400 mb-4">
                    All SMS and digital communications are used exclusively for
                    operational coordination and service-related purposes. We
                    never send marketing or promotional messages.
                  </p>
                  <p className="text-gray-400">
                    Records are organized and maintained in formats that support
                    compliance reviews, dispute resolution, and audit readiness.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative bg-[#0c0c0c]">
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact us to discuss your transportation requirements and how our
            services can support your operations.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-10 glow-red"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
