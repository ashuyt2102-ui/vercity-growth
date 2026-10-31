import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-x text-center">
        <h2 className="font-display text-4xl font-bold md:text-6xl">Ready to start a project?</h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">Tell us about your goals and we will suggest a clear scope and next step.</p>
        <Link href="/contact" className="btn btn-primary mt-8">Start a Project</Link>
      </div>
    </section>
  );
}
