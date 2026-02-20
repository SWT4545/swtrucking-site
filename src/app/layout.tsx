import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Smith & Williams Trucking | Premier Dispatch-Ready Transportation",
    template: "%s | Smith & Williams Trucking",
  },
  description:
    "Smith & Williams Trucking provides transportation services with dispatch coordination, documentation accuracy, and operational reliability. Premier dispatch-ready logistics support.",
  keywords: [
    "trucking",
    "transportation",
    "logistics",
    "dispatch",
    "freight",
    "Phoenix",
    "Arizona",
  ],
  authors: [{ name: "Smith & Williams Trucking" }],
  creator: "Smith & Williams Trucking",
  metadataBase: new URL("https://smithwilliamstrucking.com"),
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smithwilliamstrucking.com",
    siteName: "Smith & Williams Trucking",
    title: "Smith & Williams Trucking | Premier Dispatch-Ready Transportation",
    description:
      "Smith & Williams Trucking provides transportation services with dispatch coordination, documentation accuracy, and operational reliability.",
    images: [
      {
        url: "/brand/logo.jpg",
        width: 800,
        height: 600,
        alt: "Smith & Williams Trucking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smith & Williams Trucking | Premier Dispatch-Ready Transportation",
    description:
      "Smith & Williams Trucking provides transportation services with dispatch coordination, documentation accuracy, and operational reliability.",
    images: ["/brand/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Smith & Williams Trucking",
              description:
                "Premier dispatch-ready transportation services with a focus on documentation accuracy, clean communication, and on-time execution.",
              url: "https://smithwilliamstrucking.com",
              email: "dispatch@smithwilliamstrucking.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7600 N. 15th St. Suite 150",
                addressLocality: "Phoenix",
                addressRegion: "AZ",
                postalCode: "85020",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType: [
                "Transportation",
                "Logistics",
                "Dispatch Support",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
