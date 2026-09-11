import React, {
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";

import { useFrame } from "@react-three/fiber";

import { HERO_INTERACTION } from "../config/heroInteraction";

const SplashParticles = ({
  motionRef,
}) => {
  const pointsRef =
    useRef(null);

  const particles = useMemo(() => {
    const count =
      HERO_INTERACTION.SPLASH_PARTICLES;

    const positions =
      new Float32Array(
        count * 3
      );

    const velocities =
      [];

    for (
      let i = 0;
      i < count;
      i++
    ) {
      positions[i * 3] =
        (Math.random() - 0.5) *
        1.4;

      positions[i * 3 + 1] =
        -1.1 +
        Math.random() *
          0.25;

      positions[i * 3 + 2] =
        Math.random() *
          0.4;

      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) *
            0.02,
          Math.random() *
            0.035,
          (Math.random() - 0.5) *
            0.01
        )
      );
    }

    return {
      positions,
      velocities,
    };
  }, []);

  useFrame(
    (_, delta) => {
      if (
        !pointsRef.current ||
        !motionRef?.current
      ) {
        return;
      }

      const speed =
        motionRef.current
          .canVelocity ?? 0;

      const positionAttribute =
        pointsRef.current.geometry
          .attributes.position;

      for (
        let i = 0;
        i <
        particles.velocities.length;
        i++
      ) {
        const index =
          i * 3;

        const velocity =
          particles.velocities[i];

        velocity.y -=
          0.04 * delta;

        positionAttribute.array[
          index
        ] +=
          velocity.x *
          speed *
          delta *
          60;

        positionAttribute.array[
          index + 1
        ] +=
          velocity.y *
          speed *
          delta *
          60;

        positionAttribute.array[
          index + 2
        ] +=
          velocity.z *
          speed *
          delta *
          60;

        if (
          positionAttribute.array[
            index + 1
          ] < -1.25
        ) {
          positionAttribute.array[
            index
          ] =
            (Math.random() -
              0.5) *
            1.4;

          positionAttribute.array[
            index + 1
          ] =
            -1.05;

          positionAttribute.array[
            index + 2
          ] =
            Math.random() *
            0.4;

          velocity.y =
            Math.random() *
            0.035;
        }
      }

      positionAttribute.needsUpdate =
        true;
    }
  );

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={
            particles.positions
              .length / 3
          }
          array={
            particles.positions
          }
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.035}
        color="#ff3030"
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </points>
  );
};

export default SplashParticles;