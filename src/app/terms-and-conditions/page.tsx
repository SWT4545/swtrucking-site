import LegalPage from "../(legal)/LegalPage";

export const metadata = {
  title: "Terms & Conditions | Smith & Williams Trucking",
  description: "Terms and conditions for Smith & Williams Trucking services and communications.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updatedAt="February 11, 2026">
      <p>
        These Terms &amp; Conditions apply to communications and services provided by Smith &amp; Williams Trucking.
        By contacting us or using our services, you agree to these terms.
      </p>

      <h2>Operational Communications</h2>
      <p>
        We may contact you via phone, email, and text message for operational and service-related purposes including
        dispatch coordination, load updates, scheduling, document requests, and support. We do not send marketing or promotional texts.
      </p>

      <h2>SMS/Text Messaging Terms</h2>
      <ul>
        <li>Opt-in occurs when you provide your mobile number directly to our company representative for operational communication or when you initiate a text to our business number.</li>
        <li>Message frequency varies.</li>
        <li>Msg &amp; data rates may apply.</li>
        <li>Reply <strong>STOP</strong> to opt out at any time; reply <strong>HELP</strong> for assistance.</li>
      </ul>

      <h2>Privacy</h2>
      <p>
        Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.
      </p>

      <h2>Service Limitations</h2>
      <p>
        Text messaging is provided on an &quot;as available&quot; basis and may be subject to carrier delays or outages.
      </p>

      <h2>Contact</h2>
      <p>
        For questions, contact dispatch@smithwilliamstrucking.com or 951-437-5474.
      </p>
    </LegalPage>
  );
}
