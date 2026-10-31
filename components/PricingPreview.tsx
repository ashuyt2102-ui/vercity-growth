import Link from "next/link";
import { pricingPlans, formatINR } from "@/data/pricing";

export default function PricingPreview() {
  return (
    <section className="section-pad bg-panel">
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Invest in your next level.</h2>
            <p className="mt-4 text-text-muted">Transparent packages. Strategic execution. Growth-focused partnerships.</p>
          </div>
          <Link href="/pricing" className="btn btn-ghost">See all plans</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricingPlans.filter(p => !p.custom).map((p) => (
            <div key={p.id} className={`card p-6 ${p.popular ? "border-accent" : ""}`}>
              {p.popular && <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-dark">Most popular</div>}
              <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
              <div className="mt-3 font-display text-3xl font-bold">{formatINR(p.price as number)}<span className="text-base font-normal text-text-muted">/month</span></div>
              <p className="mt-3 text-sm text-text-muted">{p.summary}</p>
              <Link href={`/contact?plan=${p.id}`} className="mt-5 inline-block text-sm font-semibold text-accent">Discuss this plan →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
