"use client";
import { useState } from "react";
import { reportingExample, formatMetric } from "@/data/reporting";

export default function ReportingExample() {
  const [mode, setMode] = useState<"overview" | "definitions">("overview");
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Reporting</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Reporting example.</h2>
          <p className="mt-4 text-text-muted">A sample dashboard showing how campaign numbers can be presented. Sample data — not verified client results.</p>
        </div>
        <div className="mt-6 flex gap-2" role="tablist" aria-label="Reporting view">
          <button role="tab" aria-selected={mode === "overview"} onClick={() => setMode("overview")} className={`rounded-full border px-4 py-2 text-sm font-medium focus-ring ${mode === "overview" ? "border-accent bg-accent text-accent-dark" : "border-border text-text"}`}>Overview</button>
          <button role="tab" aria-selected={mode === "definitions"} onClick={() => setMode("definitions")} className={`rounded-full border px-4 py-2 text-sm font-medium focus-ring ${mode === "definitions" ? "border-accent bg-accent text-accent-dark" : "border-border text-text"}`}>Metric definitions</button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reportingExample.metrics.map((m) => (
            <div key={m.key} className="card p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">{m.label}</div>
              <div className="mt-2 font-display text-3xl font-bold">{formatMetric(m)}</div>
              {mode === "definitions" && <p className="mt-2 text-xs text-text-muted">{m.description}</p>}
              {mode === "overview" && m.key === "roas" && (<p className="mt-2 text-xs text-text-muted">Illustrative supplied value; no verified revenue figure is inferred.</p>)}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-text-muted">Sample data — not verified client results. Reach 2.5 lakh, impressions 4.8 lakh, ROAS 4.2×, cost per lead ₹58.82.</p>
      </div>
    </section>
  );
}
