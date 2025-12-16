import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  MessageSquare,
  Shield,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  MapPin,
} from "lucide-react";

const operationalStandards = [
  {
    icon: FileText,
    title: "Documentation-First Operations",
    description:
      "BOL and RC workflows are integrated into dispatch and load closeout processes.",
  },
  {
    icon: MessageSquare,
    title: "Dispatch-Ready Communication",
    description:
      "Clear, structured updates with defined escalation paths—no guesswork.",
  },
  {
    icon: Shield,
    title: "Compliance-Minded Process",
    description:
      "Records are organized for audit readiness and issue resolution.",
  },
  {
    icon: MessageCircle,
    title: "Operations-Only Messaging",
    description:
      "Text communication is used strictly for service and coordination—no marketing.",
  },
];

const capabilities = [
  {
    title: "Structured Load Lifecycle",
    description:
      "Every load follows a defined workflow from dispatch to delivery confirmation, with clear checkpoints and documentation requirements at each stage.",
  },
  {
    title: "Documentation-Controlled Closeout",
    description:
      "Loads are not marked complete until all required documentation—BOL, RC, and supporting paperwork—has been properly filed and verified.",
  },
  {
    title: "Exception & Escalation Handling",
    description:
      "Issues are identified early and routed through defined escalation paths to ensure timely resolution without communication gaps.",
  },
  {
    title: "Operational Messaging Discipline",
    description:
      "SMS and digital communications are reserved exclusively for service coordination—never for marketing or promotional purposes.",
  },
  {
    title: "Audit-Ready Recordkeeping",
    description:
      "All operational records are organized and maintained in formats that support compliance reviews and dispute resolution.",
  },
];

const faqs = [
  {
    question: "Do you send marketing texts?",
    answer:
      "No. Smith & Williams Trucking uses SMS exclusively for operational coordination and service-related communications. We never send marketing or promotional text messages.",
  },
  {
    question: "How do I opt out of text messages?",
    answer:
      "Reply STOP to any message to opt out of SMS communications. You can also contact us at dispatch@smithwilliamstrucking.com to update your communication preferences.",
  },
  {
    question: "How can I reach you?",
    answer:
      "The best way to reach us is via email at dispatch@smithwilliamstrucking.com. Our team responds to inquiries promptly during business hours.",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full">
                Transportation
              </span>
              <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full">
                Logistics
              </span>
              <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full">
                Dispatch Support
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Premier Dispatch-Ready</span>
              <br />
              <span className="text-white">Transportation</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
              Reliable logistics support with a focus on documentation accuracy,
              clean communication, and on-time execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 glow-red-subtle"
                >
                  Request Dispatch Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 hover:bg-white/5 text-gray-300"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Operational Standards Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Operational Standards
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built on accountability, traceability, and clean execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalStandards.map((standard, index) => (
              <Card
                key={index}
                className="glass border-white/5 hover:border-red-600/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-4">
                    <standard.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-gray-400">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            Performance metrics are tracked internally to support documentation
            accuracy and accountability.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* How We Operate Section */}
      <section className="py-20 md:py-28 relative bg-[#0c0c0c]">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How We Operate
              </h2>
              <p className="text-gray-400 mb-4">
                Smith & Williams Trucking operates with structured workflows,
                documented processes, and clear communication standards designed
                to reduce friction, prevent errors, and keep work moving forward
                without surprises.
              </p>
              <p className="text-gray-400">
                Our approach emphasizes accountability, traceability, and clean
                execution at every stage of a load.
              </p>
            </div>

            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <Card
                  key={index}
                  className="glass border-white/5 hover:border-white/10 transition-colors"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Coverage Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Coverage
            </h2>
            <p className="text-gray-400 mb-8">
              Multi-state support based on customer needs. Our operational
              capabilities extend across major transportation corridors to serve
              your logistics requirements.
            </p>
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Discuss Your Requirements
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* FAQ Section */}
      <section className="py-20 md:py-28 relative bg-[#0c0c0c]">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border border-white/5 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-gray-300 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact us to discuss your transportation and logistics needs. Our
            team is ready to support your operations.
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
