import { Environment, OrbitControls } from "@react-three/drei";
import CanvasWrapper from "../three/CanvasWrapper";
import MainLogo from "../three/objects/MainLogo";
import Button from "../components/Button";

/**
 * The `LandingPage` component represents the main landing page of the application.
 * It is designed to be visually appealing and responsive, with a combination of
 * text, images, and 3D elements. The layout adapts for different screen sizes
 * using Tailwind CSS classes.
 *
 *
 * @dependencies
 * - `CanvasWrapper`: A wrapper for the 3D canvas.
 * - `OrbitControls`: Enables orbit controls for the 3D scene.
 * - `Environment`: Adds environmental lighting to the 3D scene.
 * - `MainLogo`: A 3D model of the main logo.
 * - `Button`: A reusable button component.
 *
 * @styles
 * - Tailwind CSS classes are used extensively for layout, spacing, and responsiveness.
 * - The `pointer-events-none` class is applied to prevent interaction with certain elements.
 *
 *
 * 
 */
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <section className="relative w-full h-screen flex flex-col md:flex-row items-center px-6 md:px-10">
        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start pointer-events-none">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 text-center md:text-left pointer-events-auto">
            <img
              className="w-32 h-32  md:w-64 md:scale-300 lg:w-[35vw]  lg:max-w-137.5 aspect-square object-contain pointer-events-none"
              src="/assets/Adobe Express_Main - file.png"
              alt="Green Logo"
            />
            <div className="text-left font-nohemi leading-[0.8] md:leading-[0.85] tracking-tighter">
              <h2 className="text-[12vw] md:text-5xl lg:text-6xl font-bold ">
                beauty
              </h2>
              <h2 className="text-[12vw] md:text-5xl lg:text-6xl font-bold ">
                vibe
              </h2>
              <h2 className="text-[12vw] md:text-5xl lg:text-6xl ">
                innovation
              </h2>
              <h2 className="text-[12vw] md:text-5xl lg:text-6xl ">awards</h2>
            </div>
          </div>
        </div>

        <div className="hidden md:flex scale-110 absolute right-0  w-1/2 h-full items-center justify-center z-0 pointer-events-none">
          <div className="w-full h-[80vh] mr-100 mt-50">
            <CanvasWrapper>
              <OrbitControls makeDefault enableZoom={false} />
              <ambientLight intensity={-0.7} />
              <Environment preset="city" />
              <directionalLight
                color={"#E2F35E"}
                position={[-10, -6, 3]}
                intensity={10}
              />
              <MainLogo />
            </CanvasWrapper>
          </div>
        </div>

        <div className="absolute bottom-24 md:bottom-auto md:right-20 z-20 pointer-events-auto">
          <Button title="submit now" />
        </div>

        <div className="absolute bottom-6 md:bottom-10 z-20 w-full px-8 md:px-12 flex justify-between items-end text-[9px] md:text-[10px] font-bold uppercase">
          <p>2026 Edition</p>
          <img
            src="/assets/ColepLogo.png"
            className="h-5 md:h-8"
            alt="Colep Logo"
          />
        </div>
      </section>
    </main>
  );
}
