import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
        <div className="mt-6 space-y-4 text-text-muted">
          <p>Vercity Growth collects the information you submit through the enquiry form: name, email, phone, business name, selected service and plan, budget, advertising budget, and project brief.</p>
          <p>This information is used to respond to your enquiry and manage the resulting project discussion. It is not used for marketing subscriptions unless you separately opt in.</p>
          <p>Enquiry data is transmitted to the configured owner inbox via a transactional email provider and may be stored by that provider according to its own policies. Server logs avoid recording full enquiry bodies.</p>
          <p>We do not sell personal information. You may request correction or deletion of your enquiry data by contacting the owner through the published contact email, when configured.</p>
          <p>Third-party services such as hosting, email delivery, and analytics (if enabled) have their own privacy terms.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
