import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  company: z.string().max(100).optional(),
  email: z.string().email("Invalid email address"),
  topic: z.enum(["driver-support", "customer-service", "compliance", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0];
      return NextResponse.json(
        {
          ok: false,
          error: firstError?.message || "Invalid input",
        },
        { status: 400 }
      );
    }

    const { name, company, email, topic, message } = validationResult.data;

    // Generate submission ID
    const submissionId = `CS-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Try to save to Firestore if configured
    let savedToFirestore = false;

    if (
      process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY
    ) {
      try {
        // Dynamic import to avoid issues if Firebase isn't configured
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

        // Save to Firestore
        await db.collection("contact_submissions").doc(submissionId).set({
          submissionId,
          name,
          company: company || null,
          email,
          topic,
          message,
          status: "new",
          createdAt: new Date().toISOString(),
          source: "website",
          // TODO: Send email notification to dispatch@smithwilliamstrucking.com
          // This can be done via Cloud Function trigger or email service integration
        });

        savedToFirestore = true;
      } catch (firebaseError) {
        console.error("[Contact API] Firebase error:", firebaseError);
        // Continue even if Firebase fails - we'll log the submission
      }
    }

    // Log submission for debugging
    console.log("[Contact API] New submission:", {
      submissionId,
      name,
      email,
      topic,
      savedToFirestore,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      submissionId,
      message: "Your message has been received. We will respond shortly.",
    });
  } catch (error) {
    console.error("[Contact API] Error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to process your request. Please try again.",
      },
      { status: 500 }
    );
  }
}
