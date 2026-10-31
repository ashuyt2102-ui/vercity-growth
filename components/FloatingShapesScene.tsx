"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

export default function FloatingShapesScene() {
  const g1 = useRef<Mesh>(null);
  const g2 = useRef<Mesh>(null);
  const g3 = useRef<Group>(null);
  useFrame((_, delta) => {
    if (g1.current) { g1.current.rotation.x += delta * 0.3; g1.current.rotation.y += delta * 0.2; }
    if (g2.current) { g2.current.rotation.x -= delta * 0.2; g2.current.rotation.z += delta * 0.25; }
    if (g3.current) { g3.current.rotation.y += delta * 0.1; }
  });
  return (
    <>
      <mesh ref={g1} position={[-2, 0.5, 0]}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#ff7a3d" wireframe />
      </mesh>
      <mesh ref={g2} position={[2, -0.5, 0]}>
        <torusGeometry args={[0.8, 0.25, 12, 24]} />
        <meshStandardMaterial color="#f5f3ef" wireframe />
      </mesh>
      <group ref={g3} position={[0, 0, -1]}>
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#b9b6b0" />
        </mesh>
      </group>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={0.8} color="#ff7a3d" />
    </>
  );
}
