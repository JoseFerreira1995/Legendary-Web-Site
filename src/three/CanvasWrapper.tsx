import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

interface canvasProps {
  children: ReactNode;
}

export default function CanvasWrapper({ children }: canvasProps) {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={1} />
      {children}
    </Canvas>
  );
}
