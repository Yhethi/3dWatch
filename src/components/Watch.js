import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Watch(props) {
  const { nodes, materials } = useGLTF("/watch.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.02, 0.03, 0.02]}
        rotation={[2.62, 0, -Math.PI / 2]}
        scale={0}
      >
        <mesh geometry={nodes.Object_4.geometry} material={materials.Black2} />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[0, 0.02, 0.02]} rotation={[1.05, 0, 0]} scale={0}>
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[0, 0.01, 0.02]} rotation={[1.05, 0.06, 0]} scale={0}>
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.Black_Glossy}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.Black_Glossy2}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.Glass_Clear2}
        />
      </group>
      <group position={[0, 0.02, 0.02]} rotation={[1.05, 0, 0]} scale={0}>
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.Black_Glossy}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.Black_Glossy_TEXT}
        />
      </group>
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials["Material.008"]}
        position={[0, 0.02, 0.02]}
        rotation={[1.05, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials["Material.006"]}
        position={[0, 0.02, 0.02]}
        rotation={[1.05, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={materials.Material_2034}
        position={[0, 0.01, 0.02]}
        rotation={[1.05, 0.06, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials.Material_1898}
        position={[0, 0.02, 0.02]}
        rotation={[1.05, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Object_25.geometry}
        material={materials["Material.004"]}
        position={[0, 0.02, 0.02]}
        rotation={[1.05, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Object_27.geometry}
        material={materials["Material.001"]}
        position={[0, 0.02, 0.02]}
        rotation={[1.05, 0, 0]}
        scale={0}
      />
    </group>
  );
}

useGLTF.preload("/watch.gltf");
