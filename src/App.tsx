import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
      <div id="canvas-container" className="size-100">
        <Canvas>
          <mesh>
            <boxGeometry args={[2, 3, 4]} />
            <meshBasicMaterial color="yellow" />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default App;
