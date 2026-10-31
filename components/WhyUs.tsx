export default function WhyUs() {
  const items = [
    { title: "Clear scope", body: "Deliverables, revisions, and ownership terms are written into the proposal before work starts." },
    { title: "Connected creative and marketing", body: "Design, content, and performance are planned together so messages stay consistent." },
    { title: "Understandable reporting", body: "You see spend, reach, and enquiries in plain language, with notes on what changed." },
  ];
  return (
    <section className="section-pad bg-panel">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Why work with Vercity Growth.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="card p-6">
              <h3 className="font-display text-xl font-bold">{i.title}</h3>
              <p className="mt-2 text-text-muted">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
