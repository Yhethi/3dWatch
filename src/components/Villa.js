import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Villa(props) {
  const { nodes, materials } = useGLTF("/villa.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.25}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Material.002"]}
            position={[-7.14, 2.83, 1.71]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.32, 1, 0.86]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.zcurtains}
            position={[-3.7, 3.45, 0.31]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.96, 113.98, 1.41]}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.zcurtains}
            position={[-3.7, 3.45, -0.92]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.96, 113.98, 1.41]}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials["zcurtains.001"]}
            position={[-3.7, 3.45, -2.15]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.96, 146.79, 1.41]}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials["zcurtains.002"]}
            position={[-3.7, 3.45, -3.38]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.96, 119.02, 1.41]}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials["zcurtains.003"]}
            position={[-3.7, 3.45, -4.62]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.96, 146.79, 1.41]}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials["zcurtains.004"]}
            position={[-3.72, 3.49, -5.88]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.96, 119.02, 1.41]}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials["zcurtains.005"]}
            position={[-3.72, 3.49, -7.12]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.96, 119.02, 1.41]}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials["zcurtains.006"]}
            position={[-2.03, 1.41, -7.12]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.9, 119.02, 1.41]}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials["zcurtains.007"]}
            position={[-2.03, 1.41, -5.82]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.9, 119.02, 1.41]}
          />
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials["zcurtains.008"]}
            position={[-2.03, 1.41, -4.56]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.9, 119.02, 1.41]}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials["zcurtains.009"]}
            position={[-2.03, 1.41, -3.26]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.9, 119.02, 1.41]}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials["zcurtains.010"]}
            position={[-2.03, 1.41, -2.25]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[-0.9, 119.02, 1.02]}
          />
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials["Material.006"]}
            position={[-3.26, 3.49, 0.76]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[1.17, 1.72, 0.88]}
          />
          <mesh
            geometry={nodes.Object_32.geometry}
            material={materials.Material}
            position={[-4.01, 0.23, -2.38]}
            scale={[1.42, 0.44, 0.74]}
          />
          <mesh
            geometry={nodes.Object_34.geometry}
            material={materials["Material.001"]}
            position={[-4.01, 0.09, -2.38]}
            scale={[1.43, 0.44, 0.74]}
          />
          <mesh
            geometry={nodes.Object_36.geometry}
            material={materials.Material_2}
            position={[-5.28, 0.41, -3.42]}
          />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials["Material.002"]}
            position={[-1.69, 1.24, -4.78]}
          />
          <mesh
            geometry={nodes.Object_40.geometry}
            material={materials["Material.002"]}
            position={[-3.39, 3.44, -3.12]}
            rotation={[0, 0, -0.01]}
          />
          <mesh
            geometry={nodes.Object_42.geometry}
            material={materials.material}
            position={[-0.85, 0.02, -2.39]}
            scale={[4.07, 0.84, 5.6]}
          />
          <mesh
            geometry={nodes.Object_44.geometry}
            material={materials.Material_2}
            position={[-3.33, 3.45, -2.05]}
            rotation={[Math.PI / 2, 0, -0.01]}
            scale={[0.52, 0.74, 1.48]}
          />
          <mesh
            geometry={nodes.Object_46.geometry}
            material={materials.Material_2}
            position={[-3.33, 3.45, -5.04]}
            rotation={[Math.PI / 2, 0, -0.01]}
            scale={[0.59, 0.67, 1.43]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/villa.gltf");
