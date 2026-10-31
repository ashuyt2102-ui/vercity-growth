"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const Scene = dynamic(() => import("@/components/SolarSystemScene"), { ssr: false });

export default function SolarSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [webgl, setWebgl] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    try {
      const c = document.createElement("canvas");
      const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
      setWebgl(!!gl);
    } catch { setWebgl(false); }
    return () => mq.removeEventListener("change", onChange);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const use3D = webgl && !reduced;
  return (
    <section className="section-pad bg-panel">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold md:text-5xl">A system, not a one-off.</h2>
        <p className="mt-4 max-w-2xl text-text-muted">Strategy, creative, and performance orbit the same goal: turning attention into opportunity.</p>
        <div ref={ref} className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-bg">
          {use3D && visible ? (
            <Canvas frameloop="always" dpr={[1, 1.5]} camera={{ position: [0, 2, 7], fov: 50 }} gl={{ antialias: true, powerPreference: "low-power" }} aria-hidden="true">
              <Scene />
            </Canvas>
          ) : (<FallbackSVG />)}
        </div>
      </div>
    </section>
  );
}
function FallbackSVG() {
  return (
    <svg viewBox="0 0 800 450" className="h-full w-full" role="img" aria-label="Orbiting system illustration">
      <rect width="800" height="450" fill="#0b0d10" />
      <circle cx="400" cy="225" r="24" fill="#ff7a3d" />
      {[120, 180, 240, 300].map((r) => (<circle key={r} cx="400" cy="225" r={r} fill="none" stroke="#2a2f3a" strokeWidth="2" />))}
      <circle cx="520" cy="225" r="8" fill="#f5f3ef" />
      <circle cx="580" cy="225" r="10" fill="#b9b6b0" />
      <circle cx="640" cy="225" r="12" fill="#f5f3ef" />
      <circle cx="700" cy="225" r="14" fill="#b9b6b0" />
    </svg>
  );
}
