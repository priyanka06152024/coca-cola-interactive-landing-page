import React, { useMemo } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const LightCoke = () => {
  const { scene } = useGLTF("/models/lightCoke.glb");

  // Model ko automatically center karna
  const centeredScene = useMemo(() => {
    const clone = scene.clone(true);

    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());

    // Model ka center 0,0,0 par le aao
    clone.position.x -= center.x;
    clone.position.y -= center.y;
    clone.position.z -= center.z;

    return clone;
  }, [scene]);

  return (
    <group
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={2}
    >
      {/* CENTERED COKE */}
      <primitive object={centeredScene} />

      {/* Reflection */}
      <mesh
        position={[0, -1.35, -0.1]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[2.8, 1.8]} />

        <shaderMaterial
          transparent
          depthWrite={false}
          vertexShader={`
            varying vec2 vUv;

            void main() {
              vUv = uv;

              gl_Position =
                projectionMatrix *
                modelViewMatrix *
                vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec2 vUv;

            void main() {

              float x =
                abs(vUv.x - 0.5) * 2.0;

              float y =
                1.0 - vUv.y;

              float alpha =
                pow(1.0 - x, 2.5) *
                pow(1.0 - y, 3.0) *
                0.20;

              vec3 color =
                vec3(0.45, 0.0, 0.0);

              gl_FragColor =
                vec4(color, alpha);
            }
          `}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/lightCoke.glb");

export default LightCoke;