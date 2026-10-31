"use client";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="section-pad">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold md:text-5xl">What clients say.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.id} className="card p-6">
              {t.sample && <span className="text-xs font-semibold uppercase tracking-wider text-accent">Sample testimonial - not a real client</span>}
              <p className="mt-3 text-text-muted">{t.quote}</p>
              <footer className="mt-4 text-sm font-semibold">{t.name} - {t.role}, {t.company}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
