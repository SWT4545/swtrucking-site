import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/sms-policy", label: "SMS Policy" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/brand/logo.jpg"
                alt="Smith & Williams Trucking"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="text-lg font-semibold text-white">
                Smith & Williams Trucking
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              Premier dispatch-ready transportation services with a focus on documentation
              accuracy, clean communication, and on-time execution.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 text-red-600" />
                <a
                  href="mailto:dispatch@smithwilliamstrucking.com"
                  className="hover:text-white transition-colors"
                >
                  dispatch@smithwilliamstrucking.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-red-600" />
                <span>7600 N. 15th St. Suite 150<br />Phoenix, AZ 85020</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-red my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Smith & Williams Trucking. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 px-2 py-1 rounded bg-white/5">
              Transportation
            </span>
            <span className="text-xs text-gray-600 px-2 py-1 rounded bg-white/5">
              Logistics
            </span>
            <span className="text-xs text-gray-600 px-2 py-1 rounded bg-white/5">
              Dispatch Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
