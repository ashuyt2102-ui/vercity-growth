"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? this.props.fallback : this.props.children; }
}

export default function HeroVisual() {
  const [reduced, setReduced] = useState(false);
  const [webgl, setWebgl] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    try {
      const c = document.createElement("canvas");
      const gl = c.getContext("webgl2") || c.getContext("webgl") || c.getContext("experimental-webgl");
      if (!gl) setWebgl(false);
    } catch { setWebgl(false); }
    return () => mq.removeEventListener("change", onChange);
  }, []);
  const use3D = true;
  return (
    <div className="relative">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-panel">
        {use3D ? (
          <ErrorBoundary fallback={<div className="flex h-full w-full items-center justify-center text-text-muted">3D preview unavailable</div>}>
            <Canvas frameloop="always" dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, powerPreference: "low-power" }} aria-hidden="true">
              <Scene3D />
            </Canvas>
          </ErrorBoundary>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-text-muted">3D preview unavailable</div>
        )}
      </div>
    </div>
  );
}
