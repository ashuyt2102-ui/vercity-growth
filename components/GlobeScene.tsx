"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, BufferGeometry, Float32BufferAttribute } from "three";
import { useMemo } from "react";

export default function GlobeScene() {
  const group = useRef<Group>(null);
  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    const positions = [];
    const n = 800;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const r = 1.5;
      positions.push(r * Math.cos(theta) * radius, r * y, r * Math.sin(theta) * radius);
    }
    geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geo;
  }, []);
  useFrame((_, delta) => { if (group.current) group.current.rotation.y += delta * 0.2; });
  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.45, 24, 24]} />
        <meshBasicMaterial color="#2a2f3a" wireframe />
      </mesh>
      <points geometry={geometry}>
        <pointsMaterial color="#ff7a3d" size={0.03} sizeAttenuation />
      </points>
      <ambientLight intensity={0.4} />
    </group>
  );
}
