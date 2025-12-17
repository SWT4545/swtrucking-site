import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Staff Login",
  description:
    "Smith & Williams Trucking staff portal. Access dispatch management and operations tools.",
};

export default function StaffLoginPage() {
  // TODO: Replace with actual TMS URL when ready
  const TMS_URL = process.env.NEXT_PUBLIC_TMS_URL || null;

  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 noise" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="glass border-white/5">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-red-600/10 flex items-center justify-center mx-auto mb-8">
              <Users className="w-10 h-10 text-red-600" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Staff Login
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Internal operations access
            </p>

            {TMS_URL ? (
              <>
                <p className="text-gray-400 mb-8">
                  Access dispatch management, load tracking, and operations
                  tools.
                </p>
                <a href={TMS_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    Access TMS
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </>
            ) : (
              <>
                <p className="text-gray-400 mb-6">
                  The staff portal is being configured. Contact operations for
                  access credentials.
                </p>

                <div className="bg-white/5 rounded-lg p-4 mb-8">
                  <p className="text-sm text-gray-500 mb-2">
                    For access requests:
                  </p>
                  <a
                    href="mailto:dispatch@smithwilliamstrucking.com"
                    className="flex items-center justify-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    dispatch@smithwilliamstrucking.com
                  </a>
                </div>

                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full border-white/10 hover:bg-white/5 text-gray-300"
                  >
                    Return Home
                  </Button>
                </Link>
              </>
            )}
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-600 mt-6">
          Authorized personnel only
        </p>
      </div>
    </div>
  );
}
