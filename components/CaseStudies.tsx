import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section className="section-pad bg-panel">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold md:text-5xl">We focus on what moves businesses forward.</h2>
        <div className="mt-10 space-y-8">
          {caseStudies.map((c) => (
            <article key={c.id} className="card p-6">
              <h3 className="font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{c.client} · {c.industry}</p>
              <div className="mt-4 space-y-3 text-sm text-text-muted">
                <p><strong>Overview:</strong> {c.overview}</p>
                <p><strong>Challenge:</strong> {c.challenge}</p>
                <p><strong>Strategy:</strong> {c.strategy}</p>
                <p><strong>Execution:</strong> {c.execution}</p>
                {c.results.length > 0 && (
                  <div><strong>Results:</strong><ul className="mt-1 list-disc pl-5">{c.results.map((r) => <li key={r}>{r}</li>)}</ul></div>
                )}
                <p><strong>Lessons:</strong> {c.lessons}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
