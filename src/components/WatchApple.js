/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 appleW.gltf
Author: bharathsrk13 (https://sketchfab.com/bharathsrk13)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-watch-d3b35c5d18a1438cad708b6a97deea5b
Title: Apple Watch
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export function WatchApple(props) {
  const mesh = useRef();
  useEffect(() => {
    console.log(mesh);
  }, []);

  useFrame(() => {
    // mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.0075;
  });
  const { nodes, materials } = useGLTF("/appleW.gltf");
  return (
    <mesh ref={mesh} scale={[1, 1, 1]} position={[0, 0, 0]}>
      <group {...props} dispose={null}>
        <group
          position={[16.25, 8.34, 10.53]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.99, 0.99, 0.89]}
        >
          <mesh
            geometry={nodes.Button_Iron_Clean_0.geometry}
            material={materials.Iron_Clean}
          />
          <mesh
            geometry={nodes.Button_Iron_Clean2_0.geometry}
            material={materials.Iron_Clean2}
          />
          <mesh
            geometry={nodes.Button_Black2_0.geometry}
            material={materials.Black2}
          />
        </group>
        <group position={[-1.71, -0.15, 10.09]}>
          <group position={[0, 0, -5.35]}>
            <mesh
              geometry={nodes.Case_Iron_Clean_0.geometry}
              material={materials.Iron_Clean}
            />
            <mesh
              geometry={nodes.Case_Iron_Clean2_0.geometry}
              material={materials.Iron_Clean2}
            />
          </group>
        </group>
        <group
          position={[-1.71, -0.74, 4.58]}
          rotation={[0, 0, 0.06]}
          scale={0.91}
        >
          <mesh
            geometry={nodes.Back_cover_Black_Glossy2_0.geometry}
            material={materials.Black_Glossy2}
          />
          <mesh
            geometry={nodes.Back_cover_Black_Glossy_0.geometry}
            material={materials.Black_Glossy}
          />
          <mesh
            geometry={nodes.Back_cover_Glass_Clear2_0.geometry}
            material={materials.Glass_Clear2}
          />
        </group>
        <group position={[-1.96, -6.06, -44.51]} scale={0.99}>
          <group position={[0, 5.98, 49.03]}>
            <mesh
              geometry={nodes.Rivet_Iron_Clean3_0.geometry}
              material={materials.Iron_Clean3}
            />
            <mesh
              geometry={nodes.Rivet_Iron_Clean2_0.geometry}
              material={materials.Iron_Clean2}
            />
          </group>
        </group>
        <group position={[-1.71, -0.15, 14.31]}>
          <group position={[0, 0, -9.57]}>
            <mesh
              geometry={nodes.Case_2_Black_Glossy_0.geometry}
              material={materials.Black_Glossy}
            />
            <mesh
              geometry={nodes.Case_2_Black_Glossy_TEXT_0.geometry}
              material={materials.Black_Glossy_TEXT}
            />
          </group>
        </group>
        <group position={[-1.71, 1.56, 10.09]}>
          <mesh
            geometry={nodes["Cap_Material_#1898_0"].geometry}
            material={materials.Material_1898}
            position={[0, 0, -5.35]}
          />
        </group>
        <group position={[-1.71, -0.15, 14.24]}>
          <mesh
            geometry={nodes.Screen_Screen_1_0.geometry}
            material={materials.Screen_1}
            position={[0, 0, -9.57]}
          />
        </group>
        <mesh
          geometry={nodes.Strap_Rubber_0.geometry}
          material={materials.Rubber}
          position={[-1.81, -0.12, 4.6]}
          scale={0.99}
        />
        <mesh
          geometry={nodes["Sensor_Material_#2034_0"].geometry}
          material={materials.Material_2034}
          position={[-1.71, -0.74, 3.93]}
          rotation={[0, 0, 0.06]}
          scale={0.91}
        />
        <mesh
          geometry={nodes.Glass_Glass_Clear_0.geometry}
          material={materials.Glass_Clear}
          position={[-1.71, -0.15, 4.74]}
        />
      </group>
    </mesh>
  );
}

useGLTF.preload("/appleW.gltf");
