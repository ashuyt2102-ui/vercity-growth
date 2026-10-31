export default function Trust() {
  const items = [
    { title: "Strategy First", body: "We plan before we execute." },
    { title: "Creativity That Converts", body: "Design and content built to drive action." },
    { title: "Growth Backed By Data", body: "Decisions guided by performance signals." },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Your next level starts here.</h2>
        <p className="mt-4 max-w-2xl text-text-muted">We combine creative thinking, data-driven decisions and modern technology to help businesses build a stronger digital presence and achieve measurable growth.</p>
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
