import React, {
  useLayoutEffect,
  useRef,
} from "react";

import * as THREE from "three";
import gsap from "gsap";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const MODEL_PATH = "/models/Coke_3d_can.glb";

const Coke3DCan = ({ motionRef, onReady }) => {
  const { scene } = useGLTF(MODEL_PATH);

  const moveRef = useRef(null);
  const spinRef = useRef(null);

  const introActiveRef = useRef(true);

  const worldPositionRef = useRef(
    new THREE.Vector3()
  );

  /*
  ================================================
  MODEL READY
  ================================================
  */

  useLayoutEffect(() => {
    if (!scene) return;

    onReady?.();
  }, [scene, onReady]);

  /*
  ================================================
  CAN INTRO
  ================================================
  */

  useLayoutEffect(() => {
    const move = moveRef.current;
    const spin = spinRef.current;

    if (!move || !spin) return;

    introActiveRef.current = true;

    gsap.killTweensOf(move.position);
    gsap.killTweensOf(spin.rotation);

    /*
    INITIAL POSITION
    */

    move.position.set(
      0,
      5,
      0
    );

    /*
    INITIAL ROTATION
    */

    spin.rotation.set(
      0,
      0,
      0
    );

    move.visible = true;

    /*
    MOTION RESET
    */

    if (motionRef?.current) {
      const motion = motionRef.current;

      motion.canX = 0.5;
      motion.canY = 0.5;

      motion.canVelocity = 0;

      motion.canDirectionX = 0;
      motion.canDirectionY = 0;

      motion.lastCanX = 0.5;
      motion.lastCanY = 0.5;
    }

    /*
    INTRO
    */

    const timeline = gsap.timeline({
      onComplete: () => {
        introActiveRef.current = false;
      },
    });

    timeline.to(
      move.position,
      {
        y: -1.8,
        duration: 2.2,
        ease: "power3.out",
      },
      0
    );

    timeline.to(
      spin.rotation,
      {
        y: Math.PI * 4,
        duration: 2.2,
        ease: "power2.out",
      },
      0
    );

    timeline.to(
      spin.rotation,
      {
        z: -0.06,
        x: 0.02,
        duration: 0.5,
        ease: "power3.out",
      },
      2.2
    );

    return () => {
      timeline.kill();

      gsap.killTweensOf(move.position);
      gsap.killTweensOf(spin.rotation);
    };
  }, [motionRef]);

  /*
  ================================================
  FRAME MOTION
  ================================================
  */

  useFrame((state, delta) => {
    if (introActiveRef.current) {
      return;
    }

    const move = moveRef.current;
    const motion = motionRef?.current;

    if (!move || !motion) {
      return;
    }

    const worldPosition =
      worldPositionRef.current;

    move.getWorldPosition(
      worldPosition
    );

    const canX = THREE.MathUtils.clamp(
      0.5 + worldPosition.x / 5,
      0.05,
      0.95
    );

    const canY = THREE.MathUtils.clamp(
      0.5 - worldPosition.y / 7,
      0.05,
      0.95
    );

    const previousX =
      motion.lastCanX ?? canX;

    const previousY =
      motion.lastCanY ?? canY;

    const dx = canX - previousX;
    const dy = canY - previousY;

    const distance = Math.sqrt(
      dx * dx + dy * dy
    );

    const velocity = Math.min(
      distance * 12,
      1
    );

    let directionX = 0;
    let directionY = 0;

    if (distance > 0.00001) {
      directionX =
        dx / distance;

      directionY =
        dy / distance;
    }

    const velocityLerp =
      Math.min(delta * 10, 1);

    const directionLerp =
      Math.min(delta * 8, 1);

    motion.canVelocity +=
      (velocity - motion.canVelocity) *
      velocityLerp;

    motion.canVelocity *= 0.92;

    motion.canX = canX;
    motion.canY = canY;

    motion.canDirectionX +=
      (directionX -
        motion.canDirectionX) *
      directionLerp;

    motion.canDirectionY +=
      (directionY -
        motion.canDirectionY) *
      directionLerp;

    motion.lastCanX = canX;
    motion.lastCanY = canY;
  });

  return (
    <group
      ref={moveRef}
      visible={false}
    >
      <group ref={spinRef}>
        <primitive
          object={scene}
          scale={1.3}
          position={[0, 0, 0]}
        />
      </group>
    </group>
  );
};

export default Coke3DCan;