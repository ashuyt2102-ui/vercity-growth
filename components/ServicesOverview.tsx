import Link from "next/link";
import { services } from "@/data/services";
import FloatingShapes from "@/components/FloatingShapes";

export default function ServicesOverview() {
  return (
    <section id="services" className="relative section-pad overflow-hidden">
      <FloatingShapes />
      <div className="container-x relative z-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our growth engine.</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Our growth engine.</h2>
          <p className="mt-4 text-text-muted">Each service is scoped around a real business problem, with clear deliverables and a defined next step.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.id} href={`/services/${s.slug}`} className="card block p-6 transition-transform hover:-translate-y-1 focus-ring">
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{s.short}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

