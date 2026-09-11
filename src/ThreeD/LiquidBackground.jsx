import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { LIQUID_CONFIG } from "../config/liquidConfig";

const LiquidBackground = ({ motionRef }) => {
  const materialRef = useRef(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },

      uCanPosition: {
        value: new THREE.Vector2(0.5, 0.5),
      },

      uVelocity: {
        value: 0,
      },

      uDirection: {
        value: new THREE.Vector2(0, 0),
      },

      uStrength: {
        value: LIQUID_CONFIG.LIQUID_STRENGTH,
      },

      uRadius: {
        value: LIQUID_CONFIG.LIQUID_RADIUS,
      },
    }),
    []
  );

  useFrame((state, delta) => {
    if (!materialRef.current || !motionRef?.current) return;

    const material = materialRef.current;
    const motion = motionRef.current;

    // Limit delta so tab switching doesn't create a huge jump
    const safeDelta = Math.min(delta, 0.033);

    material.uniforms.uTime.value += safeDelta;

    const position = material.uniforms.uCanPosition.value;

    // Smooth can position
    position.x = THREE.MathUtils.lerp(
      position.x,
      motion.x ?? 0.5,
      0.1
    );

    position.y = THREE.MathUtils.lerp(
      position.y,
      motion.y ?? 0.5,
      0.1
    );

    // Velocity
    const targetVelocity = Math.min(
      Math.abs(motion.velocity ?? 0) *
        LIQUID_CONFIG.LIQUID_VELOCITY_RESPONSE,
      1
    );

    material.uniforms.uVelocity.value = THREE.MathUtils.lerp(
      material.uniforms.uVelocity.value,
      targetVelocity,
      0.12
    );

    // Direction
    const direction = material.uniforms.uDirection.value;

    direction.x = THREE.MathUtils.lerp(
      direction.x,
      motion.directionX ?? 0,
      0.1
    );

    direction.y = THREE.MathUtils.lerp(
      direction.y,
      motion.directionY ?? 0,
      0.1
    );
  });

  return (
    <mesh
      position={[0, 0, -2]}
      renderOrder={-10}
    >
      <planeGeometry args={[2, 2, 1, 1]} />

      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

const vertexShader = `
  varying vec2 vUv;

  void main() {

    vUv = uv;

    gl_Position =
      projectionMatrix *
      modelViewMatrix *
      vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uCanPosition;
  uniform vec2 uDirection;
  uniform float uVelocity;
  uniform float uStrength;
  uniform float uRadius;

  varying vec2 vUv;


  // ----------------------------------------
  // FAST VALUE NOISE
  // ----------------------------------------

  float random(vec2 p) {

    return fract(
      sin(
        dot(
          p,
          vec2(127.1, 311.7)
        )
      ) * 43758.5453
    );
  }


  float noise(vec2 p) {

    vec2 i = floor(p);
    vec2 f = fract(p);

    f = f * f * (3.0 - 2.0 * f);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    return mix(
      mix(a, b, f.x),
      mix(c, d, f.x),
      f.y
    );
  }


  void main() {

    vec2 uv = vUv;

    // ----------------------------------------
    // CAN POSITION
    // ----------------------------------------

    vec2 can = uCanPosition;


    // ----------------------------------------
    // DISTANCE FROM CAN
    // ----------------------------------------

    vec2 offset = uv - can;

    float distanceToCan = length(offset);


    // ----------------------------------------
    // LOCAL EFFECT ONLY
    // ----------------------------------------

    float localArea = 1.0 -
      smoothstep(
        uRadius * 0.25,
        uRadius,
        distanceToCan
      );


    // ----------------------------------------
    // MOVEMENT DIRECTION
    // ----------------------------------------

    vec2 direction = uDirection;

    float dirLength = length(direction);

    if (dirLength < 0.001) {
      direction = vec2(1.0, 0.0);
    } else {
      direction /= dirLength;
    }


    vec2 perpendicular =
      vec2(
        -direction.y,
        direction.x
      );


    // ----------------------------------------
    // WATER WAVES
    // ----------------------------------------

    float wave1 =
      sin(
        dot(offset, direction) * 55.0
        - uTime * 5.0
      );


    float wave2 =
      sin(
        dot(offset, perpendicular) * 40.0
        - uTime * 3.0
      );


    float organicNoise =
      noise(
        uv * 14.0
        + direction * uTime * 0.4
      );


    float water =
      wave1 * 0.35 +
      wave2 * 0.25 +
      organicNoise * 0.4;


    // ----------------------------------------
    // VELOCITY RESPONSE
    // ----------------------------------------

    float movement =
      0.15 +
      uVelocity * 1.2;


    float distortion =
      water *
      localArea *
      movement *
      uStrength;


    // ----------------------------------------
    // TRAIL BEHIND CAN
    // ----------------------------------------

    float trail =
      dot(
        offset,
        -direction
      );


    float trailMask =
      smoothstep(
        -0.02,
        0.18,
        trail
      );


    float trailWidth =
      exp(
        -abs(
          dot(offset, perpendicular)
        ) * 25.0
      );


    float trailEffect =
      trailMask *
      trailWidth *
      uVelocity *
      localArea;


    // ----------------------------------------
    // WATER HIGHLIGHT
    // ----------------------------------------

    float highlight =
      smoothstep(
        uRadius,
        0.0,
        distanceToCan
      );


    float movingLight =
      sin(
        dot(offset, perpendicular) * 35.0
        - uTime * 4.0
      );


    float shine =
      highlight *
      movingLight *
      0.18 *
      movement;


    // ----------------------------------------
    // FINAL LIQUID INTENSITY
    // ----------------------------------------

    float liquid =
      abs(distortion)
      + trailEffect * 0.7
      + max(shine, 0.0);


    // Soft falloff
    liquid *= smoothstep(
      uRadius * 1.1,
      0.0,
      distanceToCan
    );


    // ----------------------------------------
    // COCA COLA RED LIQUID
    // ----------------------------------------

    vec3 red =
      vec3(
        0.55,
        0.005,
        0.005
      );


    vec3 darkRed =
      vec3(
        0.16,
        0.0,
        0.0
      );


    vec3 color =
      mix(
        darkRed,
        red,
        liquid
      );


    // Stronger opacity when moving
    float alpha =
      liquid *
      (
        0.35 +
        uVelocity * 0.65
      );


    // ----------------------------------------
    // DON'T MAKE WHOLE BG RED
    // ----------------------------------------

    alpha = clamp(
      alpha,
      0.0,
      0.75
    );


    gl_FragColor =
      vec4(
        color,
        alpha
      );
  }
`;

export default LiquidBackground;