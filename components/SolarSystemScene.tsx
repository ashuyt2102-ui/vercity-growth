"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, BufferGeometry, Float32BufferAttribute } from "three";

export default function SolarSystemScene() {
  const group = useRef<Group>(null);
  const stars = useMemo(() => {
    const geo = new BufferGeometry();
    const positions = [];
    for (let i = 0; i < 1200; i++) {
      const r = 8 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
    }
    geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x += (state.pointer.y * 0.15 - group.current.rotation.x) * 0.05;
    group.current.rotation.z += (-state.pointer.x * 0.1 - group.current.rotation.z) * 0.05;
  });

  return (
    <group ref={group}>
      <points geometry={stars}>
        <pointsMaterial color="#f5f3ef" size={0.05} sizeAttenuation transparent opacity={0.8} />
      </points>
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color="#ff7a3d" emissive="#ff7a3d" emissiveIntensity={1.2} />
      </mesh>
      {[2.0, 3.0, 4.0, 5.0].map((r, i) => (
        <group key={r} rotation={[0, i * 1.1, 0]}>
          <mesh position={[r, 0, 0]}>
            <sphereGeometry args={[0.18 + i * 0.06, 16, 16]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#f5f3ef" : "#b9b6b0"} emissive={i % 2 === 0 ? "#f5f3ef" : "#b9b6b0"} emissiveIntensity={0.2} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[r - 0.03, r + 0.03, 64]} />
            <meshBasicMaterial color="#3a3f4a" side={2} transparent opacity={0.6} />
          </mesh>
        </group>
      ))}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#ff7a3d" />
    </group>
  );
}
