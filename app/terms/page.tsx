import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Terms & Conditions</h1>
        <div className="mt-6 space-y-4 text-text-muted">
          <p>Enquiries submitted through this website are requests for information, not binding contracts or purchases.</p>
          <p>Project scope, deliverables, milestones, fees, payment terms, revisions, ownership of source code and intellectual property, and third-party costs are defined in a written proposal or agreement before work begins.</p>
          <p>Advertising spend, hosting, platform subscriptions, production expenses, influencer fees, and taxes are not included in displayed package fees unless explicitly stated in the written quote.</p>
          <p>Refund, cancellation, and dispute terms are set out in the signed agreement rather than inherited from any third party.</p>
          <p>Content on this site is provided for general information and may change without notice.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
