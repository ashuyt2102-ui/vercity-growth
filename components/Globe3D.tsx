"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const Scene = dynamic(() => import("@/components/GlobeScene"), { ssr: false });

export default function Globe3D() {
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
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const use3D = webgl && !reduced;
  return (
    <div ref={ref} className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-border bg-bg">
      {use3D && visible ? (
        <Canvas frameloop="always" dpr={[1, 1.5]} camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true, powerPreference: "low-power", alpha: true }} style={{ background: "transparent" }}>
          <Scene />
        </Canvas>
      ) : (
        <div className="flex h-full items-center justify-center text-text-muted">3D globe unavailable</div>
      )}
    </div>
  );
}
