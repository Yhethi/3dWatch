import { Cloud, Lightformer, OrbitControls, Stars } from "@react-three/drei";
import "./App.css";
import { House } from "./components/House";
import { Watch } from "./components/Watch";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Villa } from "./components/Villa";
import { WatchApple } from "./components/WatchApple";
import { WatchReymond } from "./components/WatchReymond";
import { Tinyhouse } from "./components/Tinyhouse";

function App() {
  return (
    <>
      <div
        style={{
          width: "50%",
          height: "100vh",
          position: "absolute",
          zIndex: "1",
          right: "100px",
        }}
      >
        <Canvas camera={{ zoom: 1, position: [65, 30, 70] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[335, 35, 0]} intensity={0.1} color="yellow" />
          <pointLight position={[-335, 35, 0]} intensity={0.1} color="yellow" />
          <Suspense fallback={null}></Suspense>
          {/* <Tinyhouse /> */}
          <WatchApple />

          <OrbitControls />
          <Cloud
            opacity={1}
            speed={0.4} // Rotation speed
            width={90} // Width of the full cloud
            depth={1} // Z-dir depth
            segments={40} // Number of particles
          />
          <Lightformer
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="yellow" // (optional = white)
            scale={[10, 0]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]} // Target position (optional = undefined)
          />
          <Stars
            radius={150}
            depth={150}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
      <WatchReymond />
    </>
  );
}

export default App;
