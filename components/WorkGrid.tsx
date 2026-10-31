"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, projectCategories } from "@/data/projects";

export default function WorkGrid() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" || filter === "All Projects" ? projects : projects.filter((p) => p.category === filter);
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectCategories.map((c) => (
          <button key={c} type="button" onClick={() => setFilter(c)} aria-pressed={filter === c} className={`rounded-full border px-4 py-2 text-sm font-medium focus-ring ${filter === c ? "border-accent bg-accent text-accent-dark" : "border-border text-text"}`}>{c}</button>
        ))}
      </div>
      {filtered.length === 0 ? (<p className="mt-10 text-text-muted">No projects in this category yet.</p>) : (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {filtered.map((p) => (
            <Link key={p.id} href={`/work/${p.slug}`} className="card block overflow-hidden focus-ring">
              <img src={p.cover} alt={`${p.title} cover`} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.label}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{p.brief}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
