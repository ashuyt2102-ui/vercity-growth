import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="section-pad bg-panel">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Frequently asked questions.</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card p-5">
              <summary className="cursor-pointer font-semibold focus-ring">{f.q}</summary>
              <p className="mt-3 text-text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
