import { redirect } from "next/navigation";

/**
 * Public Apply Page — Redirects to the TMS V2 Driver Application
 *
 * The full V2 application form (8 sections, resume upload, consent, safety history,
 * employment history, scorecard, email/SMS) lives in the TMS app.
 * This redirect ensures the public site always points to the canonical form.
 */
export default function ApplyRedirect() {
  redirect("https://app.smithwilliamstrucking.com/apply");
}
