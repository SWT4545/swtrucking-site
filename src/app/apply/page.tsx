"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";

const CDL_CLASSES = ["Class A", "Class B", "Class C"];
const ENDORSEMENTS = [
  "H - Hazmat",
  "N - Tank",
  "P - Passenger",
  "S - School Bus",
  "T - Double/Triple",
  "X - Hazmat + Tank",
];
const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];

export default function ApplyPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    hasCdl: false,
    cdlClass: "",
    cdlState: "",
    cdlNumber: "",
    endorsements: [] as string[],
    hasMedCard: false,
    yearsExperience: 0,
    monthsExperience: 0,
    currentLocation: "",
    availableDate: "",
    referralSource: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError("First and last name are required");
      setSubmitting(false);
      return;
    }

    if (!formData.phone.trim() && !formData.email.trim()) {
      setError("Phone or email is required");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          applicationSource: "website",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to submit application");
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEndorsementToggle = (endorsement: string) => {
    setFormData((prev) => ({
      ...prev,
      endorsements: prev.endorsements.includes(endorsement)
        ? prev.endorsements.filter((e) => e !== endorsement)
        : [...prev.endorsements, endorsement],
    }));
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />

        <Card className="relative z-10 glass border-white/10 max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-3">
              Application Submitted!
            </h1>
            <p className="text-gray-400 mb-6">
              Thank you for your interest in Smith & Williams Trucking. Our
              hiring team will review your application and contact you within
              2-3 business days.
            </p>
            <Link href="/careers">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-gray-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Careers
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-20">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 noise" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/careers" className="inline-flex items-center text-gray-400 hover:text-white mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Link>

          <div className="w-20 h-20 mx-auto mb-4 relative">
            <Image
              src="/brand/logo.jpg"
              alt="Smith & Williams Trucking"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Driver Application</h1>
          <p className="text-gray-400">Memphis, TN Area | Olive Branch, MS Yard</p>
        </div>

        {/* Application Form */}
        <Card className="glass border-white/10">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* Personal Information */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-white/10">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Current Location (City, State)</label>
                    <input
                      type="text"
                      placeholder="e.g., Memphis, TN"
                      value={formData.currentLocation}
                      onChange={(e) => setFormData((prev) => ({ ...prev, currentLocation: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                </div>
              </div>

              {/* CDL Information */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-white/10">
                  CDL Information
                </h2>

                <label className="flex items-center gap-3 cursor-pointer mb-4">
                  <input
                    type="checkbox"
                    checked={formData.hasCdl}
                    onChange={(e) => setFormData((prev) => ({ ...prev, hasCdl: e.target.checked }))}
                    className="w-5 h-5 text-red-600 border-gray-600 rounded focus:ring-red-600 bg-white/5"
                  />
                  <span className="text-gray-300">I have a valid Commercial Driver&apos;s License (CDL)</span>
                </label>

                {formData.hasCdl && (
                  <div className="bg-white/5 p-4 rounded-lg space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">CDL Class</label>
                        <select
                          value={formData.cdlClass}
                          onChange={(e) => setFormData((prev) => ({ ...prev, cdlClass: e.target.value }))}
                          className="w-full px-3 py-2 bg-gray-900 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                        >
                          <option value="">Select...</option>
                          {CDL_CLASSES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">State Issued</label>
                        <select
                          value={formData.cdlState}
                          onChange={(e) => setFormData((prev) => ({ ...prev, cdlState: e.target.value }))}
                          className="w-full px-3 py-2 bg-gray-900 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                        >
                          <option value="">Select...</option>
                          {US_STATES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">CDL Number</label>
                        <input
                          type="text"
                          value={formData.cdlNumber}
                          onChange={(e) => setFormData((prev) => ({ ...prev, cdlNumber: e.target.value }))}
                          className="w-full px-3 py-2 bg-gray-900 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Endorsements</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {ENDORSEMENTS.map((e) => (
                          <label key={e} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.endorsements.includes(e)}
                              onChange={() => handleEndorsementToggle(e)}
                              className="w-4 h-4 text-red-600 border-gray-600 rounded focus:ring-red-600 bg-white/5"
                            />
                            <span className="text-sm text-gray-400">{e}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <label className="flex items-center gap-3 cursor-pointer mt-4">
                  <input
                    type="checkbox"
                    checked={formData.hasMedCard}
                    onChange={(e) => setFormData((prev) => ({ ...prev, hasMedCard: e.target.checked }))}
                    className="w-5 h-5 text-red-600 border-gray-600 rounded focus:ring-red-600 bg-white/5"
                  />
                  <span className="text-gray-300">I have a valid DOT Medical Card</span>
                </label>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-white/10">
                  Driving Experience
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Years</label>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={formData.yearsExperience}
                      onChange={(e) => setFormData((prev) => ({ ...prev, yearsExperience: parseInt(e.target.value) || 0 }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Months</label>
                    <input
                      type="number"
                      min="0"
                      max="11"
                      value={formData.monthsExperience}
                      onChange={(e) => setFormData((prev) => ({ ...prev, monthsExperience: parseInt(e.target.value) || 0 }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm text-gray-400 mb-1">Available Start Date</label>
                    <input
                      type="date"
                      value={formData.availableDate}
                      onChange={(e) => setFormData((prev) => ({ ...prev, availableDate: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
              </div>

              {/* Referral */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">How did you hear about us?</label>
                <select
                  value={formData.referralSource}
                  onChange={(e) => setFormData((prev) => ({ ...prev, referralSource: e.target.value }))}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Select...</option>
                  <option value="indeed">Indeed</option>
                  <option value="ziprecruiter">ZipRecruiter</option>
                  <option value="craigslist">Craigslist</option>
                  <option value="facebook">Facebook</option>
                  <option value="referral">Driver Referral</option>
                  <option value="truck_stop">Truck Stop / Flyer</option>
                  <option value="google">Google Search</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                  {!submitting && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this application, you confirm that all information provided is accurate.
                  We will contact you within 2-3 business days.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-gray-600 mt-6">
          Questions? Email{" "}
          <a href="mailto:dispatch@smithwilliamstrucking.com" className="text-red-500 hover:text-red-400">
            dispatch@smithwilliamstrucking.com
          </a>
        </p>
      </div>
    </div>
  );
}
