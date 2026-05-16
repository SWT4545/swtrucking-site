import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  HeartPulse,
  Package,
  Clock,
  MapPin,
  Shield,
  ArrowRight,
  CheckCircle,
  Truck,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SWT Express — Same-Day Courier & Expedited Delivery",
  description:
    "Same-day courier, medical courier, and expedited local delivery in the Dallas-Fort Worth area. Reliable, documented, time-critical logistics.",
};

const services = [
  {
    icon: Zap,
    title: "Same-Day Courier",
    description:
      "Time-critical local and metro deliveries completed the same day. Structured dispatch with real-time driver tracking.",
    features: [
      "Metro Dallas-Fort Worth coverage",
      "Pickup within hours of booking",
      "Status updates throughout transit",
      "Proof of delivery documentation",
    ],
  },
  {
    icon: HeartPulse,
    title: "Medical Courier",
    description:
      "Specialized transport for specimens, lab materials, pharmaceuticals, and medical supplies with chain-of-custody protocols.",
    features: [
      "Lab specimens and diagnostics",
      "Pharmaceutical transport",
      "Chain-of-custody documentation",
      "Temperature-controlled options",
    ],
  },
  {
    icon: Package,
    title: "Final Mile Delivery",
    description:
      "Last-leg delivery execution with documented handoff at the destination. Ideal for businesses needing a reliable final-mile partner.",
    features: [
      "Residential and commercial destinations",
      "Signature and confirmation capture",
      "Exception handling and escalation",
      "Batch delivery routing",
    ],
  },
  {
    icon: Clock,
    title: "Expedited Local",
    description:
      "Rush deliveries for time-sensitive documents, parts, and materials within the DFW metro area.",
    features: [
      "Priority dispatch",
      "Direct point-to-point routing",
      "Rush and critical urgency tiers",
      "Real-time driver communication",
    ],
  },
  {
    icon: Truck,
    title: "Routed Delivery",
    description:
      "Structured multi-stop delivery routes for regular distribution runs. Efficient, consistent, and documented.",
    features: [
      "Multi-stop route optimization",
      "Regular schedule cadence",
      "Per-stop delivery confirmation",
      "Route reporting",
    ],
  },
  {
    icon: MapPin,
    title: "Dedicated Routes",
    description:
      "Consistent, contracted delivery runs with a dedicated driver assigned to your account. Reliability through familiarity.",
    features: [
      "Dedicated driver assignment",
      "Fixed schedule and route",
      "Account-level communication",
      "SLA-aligned service windows",
    ],
  },
];

const whyUs = [
  {
    title: "Documented Every Step",
    description:
      "Proof of delivery, driver timestamps, and status updates are captured at every stage — not just at final delivery.",
  },
  {
    title: "Chain of Custody",
    description:
      "Critical and medical shipments include full chain-of-custody documentation from pickup through delivery.",
  },
  {
    title: "Urgency Tiers",
    description:
      "Standard, Rush, and Critical urgency levels let you match service to your actual deadline — not an arbitrary tier.",
  },
  {
    title: "No Marketing Texts",
    description:
      "All driver and customer communication is strictly operational. We never send marketing messages.",
  },
];

export default function SwtExpressPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-red-600/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-semibold text-red-400 bg-red-600/10 border border-red-600/20 rounded-full uppercase tracking-wide">
                SWT Express
              </span>
              <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full">
                Dallas-Fort Worth
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Same-Day Courier</span>
              <br />
              <span className="text-red-600">& Expedited Delivery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
              Time-critical logistics for businesses in the Dallas-Fort Worth
              area. Medical courier, same-day delivery, final mile, and dedicated
              routes — all with full documentation and chain-of-custody support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 glow-red-subtle"
                >
                  Request Delivery Service
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 hover:bg-white/5 text-gray-300 gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Dispatch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Services */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Delivery Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From one-off rush deliveries to recurring dedicated routes — we
              handle the logistics while you focus on your operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass border-white/5 hover:border-red-600/20 transition-colors"
              >
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-300">{feature}</span>
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

      {/* Why SWT Express */}
      <section className="py-20 md:py-28 relative bg-[#0c0c0c]">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why SWT Express
              </h2>
              <p className="text-gray-400 mb-4">
                Most courier services hand you a tracking number and disappear.
                SWT Express runs documented workflows — the same standards we use
                on long-haul trucking, applied to local delivery.
              </p>
              <p className="text-gray-400 mb-8">
                Every order has a structured status chain, timestamped
                milestones, and proof of delivery. When something requires chain
                of custody or medical handling, we have the protocols in place.
              </p>
              <Link href="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Contact Dispatch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {whyUs.map((item, index) => (
                <Card
                  key={index}
                  className="glass border-white/5 hover:border-white/10 transition-colors"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {item.description}
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

      {/* Service Area */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Area
            </h2>
            <p className="text-gray-400 mb-4">
              Primary coverage across the Dallas-Fort Worth Metroplex — Dallas,
              Fort Worth, Arlington, Plano, Frisco, McKinney, Irving, Garland,
              Mesquite, Grand Prairie, and surrounding communities.
            </p>
            <p className="text-gray-400 mb-8">
              Extended coverage available for time-critical medical and expedite
              shipments. Contact dispatch to confirm availability for your route.
            </p>
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Check Your Route
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Medical / Compliance note */}
      <section className="py-20 md:py-28 relative bg-[#0c0c0c]">
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
                    Documentation & Compliance
                  </h2>
                  <p className="text-gray-400 mb-4">
                    Every SWT Express delivery generates a documented record —
                    driver timestamps, status progression, and proof of delivery.
                    Medical and chain-of-custody shipments include additional
                    handling protocols and verification steps.
                  </p>
                  <p className="text-gray-400">
                    All SMS and digital communications are strictly operational.
                    We do not send marketing messages to drivers or customers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule a Delivery?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact us to book a courier order or discuss a recurring delivery
            arrangement for your business.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-10 glow-red"
            >
              Contact Dispatch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
