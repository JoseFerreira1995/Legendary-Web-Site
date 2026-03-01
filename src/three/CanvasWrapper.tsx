
import { Canvas } from "@react-three/fiber";
import { type ReactNode } from "react";

interface canvasProps {
  children: ReactNode;
}

export default function CanvasWrapper({ children }: canvasProps) {
  return <Canvas camera={{ position: [0, 1, 3] }}>{children}</Canvas>;
}
