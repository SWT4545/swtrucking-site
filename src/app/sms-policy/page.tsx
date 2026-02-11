import LegalPage from "../(legal)/LegalPage";

export const metadata = {
  title: "SMS Policy | Smith & Williams Trucking",
  description: "SMS messaging policy for Smith & Williams Trucking. Operational messaging only, opt-in/opt-out procedures, and contact information.",
};

export default function SmsPolicyPage() {
  return (
    <LegalPage title="SMS Policy" updatedAt="February 11, 2026">
      <p>
        Smith &amp; Williams Trucking uses SMS/text messaging for operational and service-related communications only,
        such as dispatch coordination, load status updates, pickup/delivery scheduling, document requests, and support.
        We do not send marketing or promotional text messages.
      </p>

      <h2>Opt-In</h2>
      <p>
        You may opt in by (1) providing your mobile number directly to a Smith &amp; Williams Trucking representative for
        operational communication, or (2) initiating a text message to our business number to begin communication.
      </p>

      <h2>Message Frequency</h2>
      <p>Message frequency varies.</p>

      <h2>Opt-Out</h2>
      <p>
        Reply <strong>STOP</strong> at any time to unsubscribe. You will receive a confirmation message that you have
        been unsubscribed. You may reply <strong>START</strong> to re-subscribe.
      </p>

      <h2>Help</h2>
      <p>
        Reply <strong>HELP</strong> for assistance, call <strong>951-437-5474</strong>, or email{" "}
        <strong>dispatch@smithwilliamstrucking.com</strong>.
      </p>

      <h2>Fees</h2>
      <p>Msg &amp; data rates may apply.</p>

      <h2>Privacy</h2>
      <p>
        Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.
        For more details, see our Privacy Policy.
      </p>
    </LegalPage>
  );
}
