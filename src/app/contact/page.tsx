"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";

const topics = [
  { value: "driver-support", label: "Driver Support" },
  { value: "customer-service", label: "Customer Service" },
  { value: "compliance", label: "Compliance" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    topic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
    submissionId?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message. We will respond shortly.",
          submissionId: data.submissionId,
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          topic: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Have questions or want to discuss your transportation needs? Send
              us a message and our team will respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-red" />

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 noise" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-400 mb-8">
                We respond to inquiries promptly during business hours. For
                operational matters, email is the most reliable way to reach us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:dispatch@smithwilliamstrucking.com"
                      className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                    >
                      dispatch@smithwilliamstrucking.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      Address
                    </h3>
                    <p className="text-sm text-gray-400">
                      7600 N. 15th St. Suite 150
                      <br />
                      Phoenix, AZ 85020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="glass border-white/5">
                <CardContent className="p-8">
                  {submitStatus?.type === "success" ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-green-600/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Message Sent
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {submitStatus.message}
                      </p>
                      {submitStatus.submissionId && (
                        <p className="text-xs text-gray-500">
                          Reference: {submitStatus.submissionId}
                        </p>
                      )}
                      <Button
                        className="mt-6 bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => setSubmitStatus(null)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300">
                            Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-600"
                            placeholder="Your name"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-gray-300">
                            Company
                          </Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-600"
                            placeholder="Company name (optional)"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-600"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="topic" className="text-gray-300">
                            Topic <span className="text-red-500">*</span>
                          </Label>
                          <Select
                            value={formData.topic}
                            onValueChange={(value) =>
                              setFormData({ ...formData, topic: value })
                            }
                            required
                          >
                            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-red-600">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#141414] border-white/10">
                              {topics.map((topic) => (
                                <SelectItem
                                  key={topic.value}
                                  value={topic.value}
                                  className="text-gray-300 focus:bg-white/10 focus:text-white"
                                >
                                  {topic.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-600 min-h-[150px]"
                          placeholder="How can we help you?"
                        />
                      </div>

                      {submitStatus?.type === "error" && (
                        <div className="p-4 bg-red-600/10 border border-red-600/20 rounded-lg">
                          <p className="text-sm text-red-400">
                            {submitStatus.message}
                          </p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting || !formData.topic}
                        className="w-full bg-red-600 hover:bg-red-700 text-white disabled:bg-gray-700"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
