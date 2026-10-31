import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, getService } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.title, description: s.short };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Service</p>
        <h1 className="mt-3 font-display text-5xl font-bold">{s.title}</h1>
        <p className="mt-4 max-w-2xl text-text-muted">{s.short}</p>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">The problem we solve</h2>
          <p className="mt-3 text-text-muted">{s.problem}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">Deliverables</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-text-muted">
            {s.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">Process</h2>
          <p className="mt-3 text-text-muted">{s.process.join(" → ")}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">FAQs</h2>
          <div className="mt-3 space-y-3">
            {s.faqs.map((f) => (
              <details key={f.q} className="card p-5">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-3 text-text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">Next step</h2>
          <Link href={`/contact?service=${s.id}`} className="btn btn-primary mt-4">Start a Project</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
