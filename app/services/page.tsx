import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad">
        <h1 className="font-display text-5xl font-bold">Services</h1>
        <p className="mt-4 max-w-2xl text-text-muted">
          Clear services for businesses that need marketing, creative, and web work that connects.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.id} href={`/services/${s.slug}`} className="card block p-6 focus-ring">
              <h2 className="font-display text-2xl font-bold">{s.title}</h2>
              <p className="mt-2 text-text-muted">{s.short}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
