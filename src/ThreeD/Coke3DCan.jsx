import React, { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Coke3DCan = ({ motionRef }) => {
  const { scene } = useGLTF("/models/Coke_3d_can.glb");

  const moveRef = useRef();
  const spinRef = useRef();

  // =========================================
  // CAN INTRO ANIMATION
  // =========================================

  useLayoutEffect(() => {
    if (!moveRef.current || !spinRef.current) {
      return;
    }

    const move = moveRef.current;
    const spin = spinRef.current;

    // Kill old animations
    gsap.killTweensOf(move.position);
    gsap.killTweensOf(spin.rotation);

    // =======================================
    // STARTING POSITION
    // Can screen ke upar se enter karega
    // =======================================

    move.position.set(0, 5, 0);

    // =======================================
    // STARTING ROTATION
    // =======================================

    spin.rotation.set(0, 0, 0);

    // Visible
    move.visible = true;

    // =======================================
    // RESET MOTION DATA
    // =======================================

    if (motionRef?.current) {
      motionRef.current.canX = 0.5;
      motionRef.current.canY = 0.5;

      motionRef.current.canVelocity = 0;

      motionRef.current.canDirectionX = 0;
      motionRef.current.canDirectionY = 0;

      motionRef.current.lastCanX = 0;
      motionRef.current.lastCanY = 5;
    }

    // =======================================
    // INTRO TIMELINE
    // =======================================

    const timeline = gsap.timeline();

    // ---------------------------------------
    // 1. CAN COMES DOWN
    // ---------------------------------------

    timeline.to(
      move.position,
      {
        y: -1.8,
        duration: 2.2,
        ease: "power3.out",
      },
      0
    );

    // ---------------------------------------
    // 2. CAN SPINS WHILE COMING DOWN
    // ---------------------------------------

    timeline.to(
      spin.rotation,
      {
        y: Math.PI * 4,
        duration: 2.2,
        ease: "power2.out",
      },
      0
    );

    // ---------------------------------------
    // 3. FINAL PRODUCT POSE
    // Very subtle tilt
    // ---------------------------------------

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

    // =======================================
    // CLEANUP
    // =======================================

    return () => {
      timeline.kill();

      gsap.killTweensOf(move.position);
      gsap.killTweensOf(spin.rotation);
    };
  }, [motionRef]);

  // =========================================
  // SEND CAN MOVEMENT TO LIQUID BACKGROUND
  // =========================================

  useFrame((state, delta) => {
    if (!moveRef.current || !motionRef?.current) {
      return;
    }

    const move = moveRef.current;
    const motion = motionRef.current;

    // =======================================
    // WORLD POSITION
    // =======================================

    const worldPosition = new THREE.Vector3();

    move.getWorldPosition(worldPosition);

    // =======================================
    // NORMALIZE POSITION
    // =======================================

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

    // =======================================
    // PREVIOUS POSITION
    // =======================================

    const previousX = motion.lastCanX ?? canX;
    const previousY = motion.lastCanY ?? canY;

    const dx = canX - previousX;
    const dy = canY - previousY;

    // =======================================
    // VELOCITY
    // =======================================

    const distance = Math.sqrt(
      dx * dx + dy * dy
    );

    const velocity = Math.min(
      distance * 12,
      1
    );

    // =======================================
    // DIRECTION
    // =======================================

    let directionX = 0;
    let directionY = 0;

    if (distance > 0.00001) {
      directionX = dx / distance;
      directionY = dy / distance;
    }

    // =======================================
    // SMOOTH VELOCITY
    // =======================================

    motion.canVelocity +=
      (velocity - motion.canVelocity) *
      Math.min(delta * 10, 1);

    motion.canVelocity *= 0.92;

    // =======================================
    // SAVE POSITION
    // =======================================

    motion.canX = canX;
    motion.canY = canY;

    // =======================================
    // SMOOTH DIRECTION
    // =======================================

    motion.canDirectionX +=
      (directionX - motion.canDirectionX) *
      Math.min(delta * 8, 1);

    motion.canDirectionY +=
      (directionY - motion.canDirectionY) *
      Math.min(delta * 8, 1);

    // =======================================
    // SAVE LAST POSITION
    // =======================================

    motion.lastCanX = canX;
    motion.lastCanY = canY;
  });

  // =========================================
  // MODEL
  // =========================================

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

useGLTF.preload(
  "/models/Coke_3d_can.glb"
);

export default Coke3DCan;