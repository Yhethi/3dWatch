import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tinyhouse(props) {
  const { nodes, materials } = useGLTF("/tinyhouse.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Pillow}
            position={[114.6, 191.87, 148.05]}
            rotation={[0.21, 0.57, -0.05]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Pillow}
            position={[64.36, 191.87, 149.55]}
            rotation={[0.19, -0.41, 0.15]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.Pillow}
            position={[33.72, 191.87, 149.05]}
            rotation={[0.19, -0.41, 0.15]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.Pillow}
            position={[2.07, 191.87, 154.58]}
            rotation={[0.18, 0.12, 0.05]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.Pillow}
            position={[87.85, 191.15, -65.89]}
            rotation={[-0.83, -0.59, -1.33]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.Pillow}
            position={[112.56, 191.87, -67.83]}
            rotation={[-0.43, -0.55, -0.24]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.Pillow}
            position={[36.73, 191.87, -70.98]}
            rotation={[-0.37, 0.12, 0.05]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.Pillow}
            position={[2.33, 191.87, -66.13]}
            rotation={[-0.47, 0.67, 0.3]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.Glass}
            position={[-253.37, 166.06, -120.93]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.Glass}
            position={[-253.37, 71.36, -123.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.Sofa}
            position={[-157.83, 24.43, -108.85]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.Sofa}
            position={[-157.83, 30.17, -117.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials.Sofa}
            position={[57.49, 172.7, 135.85]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.Sofa}
            position={[57.49, 178.44, 144.48]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials.banyo}
            position={[-2.45, 44.66, 141.36]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials.Opcity}
            position={[-105.03, -14.82, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={426.02}
          />
          <mesh
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials.Tente}
            position={[-315.53, 124.31, -143.83]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_17.geometry}
            material={materials.Tente}
            position={[-263.35, 136.64, -143.83]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_18.geometry}
            material={materials.banyo}
            position={[54.87, 18.83, 152.4]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={14.33}
          />
          <mesh
            geometry={nodes.defaultMaterial_19.geometry}
            material={materials.banyo}
            position={[54.87, 18.83, 152.4]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={14.33}
          />
          <mesh
            geometry={nodes.defaultMaterial_20.geometry}
            material={materials.banyo}
            position={[-2.45, 44.66, 141.36]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[67.31, 60.02, 100]}
          />
          <mesh
            geometry={nodes.defaultMaterial_21.geometry}
            material={materials.Glass}
            position={[109.67, 74.49, 129.72]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_22.geometry}
            material={materials.banyo}
            position={[117.52, 4.49, 141.36]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_23.geometry}
            material={materials.Mutfak}
            position={[28.6, 38.69, -32.83]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_24.geometry}
            material={materials.Mutfak}
            position={[28.6, 38.69, -32.83]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_25.geometry}
            material={materials.Mutfak}
            position={[28.6, 38.69, 4.27]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_26.geometry}
            material={materials.Mutfak}
            position={[28.6, 38.69, 4.27]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_27.geometry}
            material={materials.Mutfak}
            position={[46.97, 54.27, -32.42]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_28.geometry}
            material={materials.Sofa}
            position={[57.49, 172.7, -56.85]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_29.geometry}
            material={materials.Sofa}
            position={[57.49, 178.44, -65.48]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_30.geometry}
            material={materials.Books_Table}
            position={[-108.76, 23.62, -86.14]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_31.geometry}
            material={materials.Books_Table}
            position={[64.02, 166.31, 37.66]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_32.geometry}
            material={materials.Mutfak}
            position={[145.09, 47.01, 1.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_33.geometry}
            material={materials.Mutfak}
            position={[0, 100, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_34.geometry}
            material={materials.Mutfak}
            position={[0, 100, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_35.geometry}
            material={materials.Books_Table}
            position={[-159.9, 77.49, -160.6]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_36.geometry}
            material={materials.Stairs}
            position={[-126.55, 134.73, 41.96]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_37.geometry}
            material={materials.Stairs}
            position={[-189.08, 56.75, 41.96]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_38.geometry}
            material={materials.Stairs}
            position={[-125.24, 101.69, 41.99]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_39.geometry}
            material={materials.Stairs}
            position={[-64.49, 199.18, -27.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_40.geometry}
            material={materials.Stairs}
            position={[-64.49, 189.87, -96.79]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_41.geometry}
            material={materials.Stairs}
            position={[-64.49, 189.87, 41.96]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_42.geometry}
            material={materials.Stairs}
            position={[-64.49, 174.13, -28.02]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_43.geometry}
            material={materials.Black}
            position={[-253.37, 139.71, -125.16]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_44.geometry}
            material={materials.Stairs}
            position={[-130.03, 80.18, 68.69]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_45.geometry}
            material={materials.Stairs}
            position={[-125.46, 74.05, 69.04]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_46.geometry}
            material={materials.Kaplama}
            position={[0, 109.14, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_47.geometry}
            material={materials.Floor}
            position={[45.72, 150.43, 43.88]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_48.geometry}
            material={materials.banyo}
            position={[0, 102.86, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_49.geometry}
            material={materials.banyo}
            position={[0, 102.86, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_50.geometry}
            material={materials.Glass}
            position={[91.73, 71.6, -106.7]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_51.geometry}
            material={materials.Black}
            position={[91.73, 71.6, -106.7]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_52.geometry}
            material={materials.Glass}
            position={[7.52, 71.6, -102.34]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_53.geometry}
            material={materials.Black}
            position={[7.52, 71.6, -102.34]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_54.geometry}
            material={materials.Black}
            position={[50.63, 71.6, -105.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_55.geometry}
            material={materials.Glass}
            position={[165.3, 225.28, 44.49]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_56.geometry}
            material={materials.Black}
            position={[165.3, 225.28, 44.49]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_57.geometry}
            material={materials.Glass}
            position={[-63.94, 200.14, -139.77]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_58.geometry}
            material={materials.Black}
            position={[-63.94, 197.14, -139.77]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_59.geometry}
            material={materials.Wall}
            position={[190.99, 102.86, -194.65]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_60.geometry}
            material={materials.Floor}
            position={[-266.27, 1.43, 70.19]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_61.geometry}
            material={materials.Black}
            position={[-93.8, -5.99, 30.98]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_62.geometry}
            material={materials.Floor}
            position={[-53.91, 1.43, 4.16]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_63.geometry}
            material={materials.Wall}
            position={[-15.54, 174.58, -56.52]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tinyhouse.gltf");
