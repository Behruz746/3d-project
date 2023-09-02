import { Suspense, useState, useEffect, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Car from "./model/Scene";
import "./App.css";

function App() {
  const meshRef = useRef([0, 0, 0]);
  const cameraPosition = useRef([0, 4, 5]);

  let x = 0;
  let z = 0;

  let vxl = 0;
  let vxr = 0;
  let vy = 0;

  let speed = 0.5;

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 68 || event.keyCode === 39) {
        vxr = speed;
        x += vxr;
      } else if (event.keyCode === 65 || event.keyCode === 37) {
        vxl = -speed;
        x += vxl;
      } else if (event.keyCode === 87 || event.keyCode === 38) {
        vy = -speed;
        z += vy;
      } else if (event.keyCode === 83 || event.keyCode === 40) {
        vy = speed;
        z += vy;
      }

      meshRef.current.position.x = x;
      meshRef.current.position.z = z;
      meshRef.current.rotation.y = -x / 10;
      console.log(x, x, z);
      console.log(meshRef.current);
    });
  }, [meshRef]);

  return (
    <div className="App">
      <Canvas camera={{ position: [0, 4, 5], zoom: 2.5 }} ref={cameraPosition}>
        <OrbitControls />
        <ambientLight intensity={1.6} />
        <directionalLight intensity={1.5} />
        <color attach="background" args={["#ccc"]}></color>
        <hemisphereLight intensity={1.5} />
        <spotLight
          position={[20, 20, 20]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />

        <Suspense fallback={null}>
          <Car meshRef={meshRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
