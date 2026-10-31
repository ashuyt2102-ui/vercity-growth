"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function PrismScene() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.15;
      mesh.current.rotation.y += delta * 0.25;
    }
  });
  return (
    <>
      <mesh ref={mesh}>
        <cylinderGeometry args={[1.2, 1.2, 2.2, 3, 1]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.9}
          thickness={1.5}
          roughness={0.05}
          ior={1.5}
          transparent
          opacity={0.85}
        />
      </mesh>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} color="#ff7a3d" />
      <directionalLight position={[-4, -2, -3]} intensity={0.8} color="#7aa2ff" />
      <pointLight position={[0, 0, 3]} intensity={0.6} color="#ffffff" />
    </>
  );
}
