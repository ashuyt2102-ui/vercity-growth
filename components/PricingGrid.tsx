"use client";
import Link from "next/link";
import { pricingPlans, formatINR } from "@/data/pricing";

export default function PricingGrid() {
  return (
    <>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pricingPlans.map((p) => (
          <div key={p.id} className={`card flex flex-col p-6 ${p.popular ? "border-accent" : ""}`}>
            {p.popular && <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-dark">Most popular</div>}
            <h3 className="font-display text-2xl font-bold">{p.name}</h3>
            <div className="mt-3 font-display text-3xl font-bold">
              {p.custom || p.price === null ? "Let's discuss" : `${formatINR(p.price as number)}`}
              {!p.custom && p.price !== null && <span className="text-base font-normal text-text-muted">/month</span>}
            </div>
            <p className="mt-3 text-sm text-text-muted">{p.summary}</p>
            <ul className="mt-4 space-y-1 text-sm text-text-muted">{p.scope.map((s) => (<li key={s}>• {s}</li>))}</ul>
            <Link href={`/contact?plan=${p.id}`} className="mt-6 inline-block text-sm font-semibold text-accent">{p.cta} →</Link>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-xl border border-border bg-panel p-6 text-sm text-text-muted">
        <p>Advertising spend, where applicable, is separate from management fees. All packages, prices and deliverables are editable from the central pricing configuration.</p>
      </div>
    </>
  );
}
