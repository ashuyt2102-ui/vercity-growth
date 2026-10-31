import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingGrid from "@/components/PricingGrid";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad">
        <h1 className="font-display text-5xl font-bold">Pricing</h1>
        <p className="mt-4 max-w-2xl text-text-muted">
          All plans are billed monthly. Choose a category to compare plans.
        </p>
        <PricingGrid />
      </main>
      <Footer />
    </>
  );
}
