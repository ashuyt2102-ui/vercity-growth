import Link from "next/link";
import { ChevronDown } from "lucide-react";
import HeroBackground3D from "@/components/HeroBackground3D";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground3D />
      <div className="container-x pt-12 pb-16 md:pt-20 md:pb-24 relative z-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">We engineer digital growth.</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-7xl">WE ENGINEER<br/>DIGITAL GROWTH.</h1>
          <p className="mt-6 max-w-xl text-lg text-text-muted">We help ambitious brands grow through performance marketing, creative strategy and powerful digital experiences.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/work" className="btn btn-ghost">Explore Our Work</Link>
            <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-10 flex justify-center pb-8">
        <ChevronDown className="animate-bounce text-text-muted" />
      </div>
    </section>
  );
}
