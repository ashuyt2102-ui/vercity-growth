"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const Scene = dynamic(() => import("@/components/SolarSystemScene"), { ssr: false });

class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? this.props.fallback : this.props.children; }
}

export default function HeroBackground3D() {
  return (
    <div className="absolute inset-0 -z-0" aria-hidden="true" style={{ pointerEvents: "none" }}>
      <ErrorBoundary fallback={null}>
        <Canvas camera={{ position: [0, 2, 7], fov: 50 }} gl={{ antialias: true, powerPreference: "low-power" }} dpr={[1, 1.25]}>
          <Scene />
        </Canvas>
      </ErrorBoundary>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg/70" />
    </div>
  );
}
