import React from "react";

const CanReflection = () => {
  return (
    <mesh
      position={[0, -1.35, -0.1]}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
    >
      <planeGeometry
        args={[2.8, 1.8]}
      />

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
              abs(
                vUv.x - 0.5
              ) * 2.0;

            float y =
              1.0 - vUv.y;

            float alpha =
              pow(
                1.0 - x,
                2.5
              )
              *
              pow(
                1.0 - y,
                3.0
              )
              *
              0.20;

            vec3 color =
              vec3(
                0.45,
                0.0,
                0.0
              );

            gl_FragColor =
              vec4(
                color,
                alpha
              );
          }
        `}
      />
    </mesh>
  );
};

export default CanReflection;