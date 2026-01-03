/**
 * Driver Application API
 * Receives applications from the website and stores in Firestore
 * These applications appear in the TMS HR Portal as prospects
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const applicationSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone: z.string().max(20).optional(),
  dateOfBirth: z.string().optional(),
  hasCdl: z.boolean().optional(),
  cdlClass: z.string().optional(),
  cdlState: z.string().optional(),
  cdlNumber: z.string().optional(),
  endorsements: z.array(z.string()).optional(),
  hasMedCard: z.boolean().optional(),
  yearsExperience: z.number().min(0).max(50).optional(),
  monthsExperience: z.number().min(0).max(11).optional(),
  currentLocation: z.string().optional(),
  availableDate: z.string().optional(),
  referralSource: z.string().optional(),
  applicationSource: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = applicationSchema.safeParse(body);
    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0];
      return NextResponse.json(
        { error: firstError?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Require either phone or email
    if (!data.phone?.trim() && !data.email?.trim()) {
      return NextResponse.json(
        { error: "Phone or email is required" },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const cleanPhone = data.phone ? data.phone.replace(/\D/g, "") : "";

    // Try to save to Firestore
    if (
      process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY
    ) {
      try {
        const { initializeApp, getApps, cert } = await import("firebase-admin/app");
        const { getFirestore } = await import("firebase-admin/firestore");

        // Initialize Firebase Admin if not already initialized
        if (getApps().length === 0) {
          initializeApp({
            credential: cert({
              projectId: process.env.FIREBASE_PROJECT_ID,
              clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
              privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            }),
          });
        }

        const db = getFirestore();

        // Rate limiting - check for duplicate applications
        if (data.email?.trim()) {
          const recentByEmail = await db
            .collection("applicants")
            .where("email", "==", data.email.trim().toLowerCase())
            .where("createdAt", ">", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
            .limit(1)
            .get();

          if (!recentByEmail.empty) {
            return NextResponse.json(
              { error: "An application with this email was recently submitted. Please wait 24 hours." },
              { status: 429 }
            );
          }
        }

        if (cleanPhone) {
          const recentByPhone = await db
            .collection("applicants")
            .where("phoneClean", "==", cleanPhone)
            .where("createdAt", ">", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
            .limit(1)
            .get();

          if (!recentByPhone.empty) {
            return NextResponse.json(
              { error: "An application with this phone was recently submitted. Please wait 24 hours." },
              { status: 429 }
            );
          }
        }

        // Create applicant document - same structure as TMS
        const applicantData = {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          phone: data.phone?.trim() || "",
          phoneClean: cleanPhone,
          email: data.email?.trim()?.toLowerCase() || "",
          dateOfBirth: data.dateOfBirth || null,
          status: "new", // This is the prospect status
          statusUpdatedAt: now,
          applicationSource: data.applicationSource || "website",
          referralSource: data.referralSource || null,
          hasCdl: data.hasCdl || false,
          hasMedCard: data.hasMedCard || false,
          cdlClass: data.cdlClass || null,
          cdlState: data.cdlState || null,
          cdlNumber: data.cdlNumber || null,
          endorsements: data.endorsements || [],
          yearsExperience: data.yearsExperience || 0,
          monthsExperience: data.monthsExperience || 0,
          currentLocation: data.currentLocation || null,
          availableDate: data.availableDate || null,
          notes: "",
          selfApplied: true,
          createdAt: now,
          updatedAt: now,
          createdBy: "website-form",
        };

        const docRef = await db.collection("applicants").add(applicantData);

        console.log("[Apply API] New application:", {
          id: docRef.id,
          name: `${data.firstName} ${data.lastName}`,
          source: data.applicationSource,
        });

        return NextResponse.json({
          success: true,
          message: "Application submitted successfully",
          applicationId: docRef.id,
        });
      } catch (firebaseError) {
        console.error("[Apply API] Firebase error:", firebaseError);
        return NextResponse.json(
          { error: "Failed to save application. Please try again." },
          { status: 500 }
        );
      }
    } else {
      // Firebase not configured - log the application
      console.log("[Apply API] Firebase not configured. Application received:", {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
      });

      return NextResponse.json(
        { error: "Application system is being configured. Please try again later or call us directly." },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error("[Apply API] Error:", error);
    return NextResponse.json(
      { error: "Failed to process application. Please try again." },
      { status: 500 }
    );
  }
}
