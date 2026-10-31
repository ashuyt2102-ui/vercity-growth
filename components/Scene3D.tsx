"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, BufferGeometry, Float32BufferAttribute } from "three";

export default function Scene3D() {
  const group = useRef<Group>(null);
  const particles = useMemo(() => {
    const geo = new BufferGeometry();
    const positions = [];
    for (let i = 0; i < 700; i++) {
      const r = 2.4 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
    }
    geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.2;
    group.current.rotation.x = state.pointer.y * 0.3;
    group.current.rotation.z = -state.pointer.x * 0.2;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 5, 4]} intensity={1.1} />
      <pointLight position={[-3, -2, 2]} intensity={1} color="#ff7a3d" />
      <pointLight position={[3, 2, -2]} intensity={0.6} color="#ffffff" />

      <mesh>
        <torusKnotGeometry args={[0.9, 0.28, 128, 32]} />
        <meshStandardMaterial color="#d9d6d0" metalness={0.9} roughness={0.15} emissive="#ff7a3d" emissiveIntensity={0.1} />
      </mesh>

      <mesh position={[1.5, 0.6, -0.5]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#f5f3ef" transparent opacity={0.55} roughness={0.05} metalness={0.1} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.04, 16, 100]} />
        <meshStandardMaterial color="#ff7a3d" emissive="#ff7a3d" emissiveIntensity={1.4} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[2.0, 0.03, 16, 100]} />
        <meshStandardMaterial color="#f5f3ef" emissive="#f5f3ef" emissiveIntensity={0.5} />
      </mesh>

      <points geometry={particles}>
        <pointsMaterial color="#ff7a3d" size={0.025} sizeAttenuation transparent opacity={0.7} />
      </points>
    </group>
  );
}
