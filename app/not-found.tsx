import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad text-center">
        <h1 className="font-display text-6xl font-bold">404</h1>
        <p className="mt-4 text-text-muted">Page not found.</p>
        <Link href="/" className="btn btn-primary mt-6">Go home</Link>
      </main>
      <Footer />
    </>
  );
}
