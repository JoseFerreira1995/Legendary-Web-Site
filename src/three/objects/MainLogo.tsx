import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { type Mesh } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export default function MainLogo() {
  const meshRef = useRef<Mesh>(null!);

  const texture = useLoader(OBJLoader, "/assets/base.obj");

  useFrame(() => {
    meshRef.current.rotation.y += 0.008;
  });

  return <primitive ref={meshRef} object={texture} scale={1} />;
}
