import LegalPage from "../(legal)/LegalPage";

export const metadata = {
  title: "Privacy Policy | Smith & Williams Trucking",
  description: "Privacy policy for Smith & Williams Trucking. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updatedAt="February 11, 2026">
      <p>
        This Privacy Policy describes how Smith &amp; Williams Trucking collects, uses, and protects information you provide
        when using our services or contacting us.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Contact information (such as name, phone number, email address)</li>
        <li>Operational details needed to provide service (such as pickup/delivery scheduling and load coordination details)</li>
        <li>Communications with us (including SMS messages, email messages, and call notes)</li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>To provide and support operational transportation services</li>
        <li>To coordinate dispatch, scheduling, and service communications</li>
        <li>To respond to requests and support inquiries</li>
        <li>To improve service operations and record-keeping</li>
      </ul>

      <h2>SMS/Text Messaging</h2>
      <p>
        If you opt in to receive text messages from Smith &amp; Williams Trucking, messages are used for operational and
        service-related communications only. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to
        opt out. Reply HELP for help.
      </p>
      <p>
        <strong>Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.</strong>
      </p>

      <h2>Information Sharing</h2>
      <p>
        We do not sell personal information. We may share information only as needed to operate our services
        (for example, with service providers that support communications or record-keeping) and only for operational purposes.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain information as needed for operational, legal, and compliance purposes.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this Privacy Policy, contact us at dispatch@smithwilliamstrucking.com or 951-437-5474.
      </p>
    </LegalPage>
  );
}
