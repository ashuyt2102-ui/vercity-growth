import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: p.title, description: p.brief };
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <>
      <Navbar />
      <main id="main" className="container-x section-pad">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.label}</span>
        <h1 className="mt-2 font-display text-5xl font-bold">{p.title}</h1>
        <img src={p.cover} alt={`${p.title} cover`} className="mt-6 aspect-[16/9] w-full rounded-xl object-cover" />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl font-bold">Brief</h2>
            <p className="mt-3 text-text-muted">{p.brief}</p>
            <h2 className="mt-6 font-display text-2xl font-bold">Audience</h2>
            <p className="mt-3 text-text-muted">{p.audience}</p>
            <h2 className="mt-6 font-display text-2xl font-bold">Approach</h2>
            <p className="mt-3 text-text-muted">{p.approach}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold">Deliverables</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-text-muted">
              {p.deliverables.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <h2 className="mt-6 font-display text-2xl font-bold">Key decisions</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-text-muted">
              {p.decisions.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </section>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {p.gallery.map((g) => (
            <img key={g} src={g} alt={`${p.title} additional mockup`} className="aspect-[4/3] w-full rounded-xl object-cover" />
          ))}
        </div>
        <div className="mt-10">
          <Link href={`/contact?service=performance-marketing`} className="btn btn-primary">Start a similar project</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
