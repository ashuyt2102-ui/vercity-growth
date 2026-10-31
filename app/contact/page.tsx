import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad">
        <h1 className="font-display text-5xl font-bold">Let&apos;s build something that grows.</h1>
        <p className="mt-4 max-w-2xl text-text-muted">
          Have a project in mind? Tell us what you&apos;re building and let&apos;s discuss how we can help.
        </p>
        <div className="mt-8 max-w-2xl">
          <Suspense fallback={<div className="card p-6">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
        <div className="mt-8 text-sm text-text-muted">
          {process.env.NEXT_PUBLIC_BUSINESS_CONTACT_EMAIL && (
            <p>Email: {process.env.NEXT_PUBLIC_BUSINESS_CONTACT_EMAIL}</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
