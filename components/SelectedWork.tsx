import Link from "next/link";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section className="section-pad bg-panel">
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Proof through creation.</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Proof through creation.</h2>
            <p className="mt-4 text-text-muted">Concept projects are labelled clearly. Verified client work is added only when approved material exists.</p>
          </div>
          <Link href="/work" className="btn btn-ghost">View all work</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.id} href={`/work/${p.slug}`} className="card block overflow-hidden focus-ring">
              <img src={p.cover} alt={`${p.title} cover`} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.label}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{p.brief}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
