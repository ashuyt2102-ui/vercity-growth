"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Discover", body: "Understand the business, audience and objectives." },
  { title: "Strategise", body: "Build a tailored growth roadmap." },
  { title: "Execute", body: "Launch campaigns, create content and implement solutions." },
  { title: "Optimise", body: "Measure performance and improve continuously." },
];

export default function Process() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: container.current, start: "top 80%" },
      });
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <section id="process" className="section-pad">
      <div ref={container} className="container-x">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Process</p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">From ideas to impact.</h2>
        <div className="relative mt-12">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-border" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="process-step flex flex-col items-center text-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-bg text-sm font-bold text-accent">0{i + 1}</div>
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm text-text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
