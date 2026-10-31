export default function Capabilities() {
  const items = ["Performance marketing", "Websites", "Content", "Creative", "Reporting"];
  const platforms = ["Meta", "Shopify"];
  return (
    <section className="border-y border-border bg-panel py-8">
      <div className="container-x">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Capabilities</span>
          {items.map((i) => (<span key={i} className="font-display text-lg font-bold">{i}</span>))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Common platforms</span>
          {platforms.map((p) => (<span key={p}>{p}</span>))}
        </div>
      </div>
    </section>
  );
}
