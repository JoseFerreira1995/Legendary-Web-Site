import { Environment, OrbitControls } from "@react-three/drei";
import CanvasWrapper from "../three/CanvasWrapper";
import MainLogo from "../three/objects/MainLogo";
import Button from "../components/Button";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Main container */}
      <section className="relative w-full h-screen flex items-center justify-center px-10">
        {/* 3d image ) */}
        <div className="absolute mt-20 inset-0 flex items-center justify-end z-1 ml-50">
          <CanvasWrapper>
            <OrbitControls makeDefault enableZoom={false} />
            <ambientLight intensity={-0.5} />
            <Environment preset="city" />
            <directionalLight
              color={"#E2F35E"}
              position={[-10, -4, 6]}
              intensity={10}
            />
            <MainLogo></MainLogo>
          </CanvasWrapper>
        </div>

        {/* Overlap content */}
        <div className="relative z-0 w-full flex justify-between gap-10 items-center pr-40 ">
          <div className=" flex items-center gap-5">
            <img
              className="w-100 h-100 object-contain "
              src="/assets/Adobe Express_Main - file.png"
              alt="Green Logo"
            />
            <div className="text-left font-nohemi leading-[0.85] tracking-tighter ">
              <h2 className="text-5xl font-bold">beauty</h2>
              <h2 className="text-5xl font-bold">vibe</h2>
              <h2 className="text-5xl">innovation</h2>
              <h2 className="text-5xl">awards</h2>
            </div>
          </div>

          <div >
            <Button title="submit now"></Button>
          </div>
        </div>

        {/* Landing Page Footer */}
        <div className="absolute bottom-10 w-full px-10 flex justify-between items-end text-[10px] font-bold uppercase">
          <p>2026 Edition</p>
          <img src="/assets/ColepLogo.png" className="h-8" alt="Colep Logo" />
        </div>
      </section>
    </main>
  );
}
