import React, {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Coke3DCan = ({ motionRef }) => {
  const { scene } = useGLTF("/models/Coke_3d_can.glb");

  const moveRef = useRef();
  const spinRef = useRef();

  useLayoutEffect(() => {
    const move = moveRef.current;
    const spin = spinRef.current;

    if (!move || !spin) return;

    // --------------------------------
    // IMPORTANT:
    // Keep can completely hidden
    // during initial setup
    // --------------------------------

    move.visible = false;

    // Initial position
    move.position.set(0, 5.5, 0);

    // Initial rotation
    spin.rotation.set(0, 0, 0);

    // Kill any previous animation
    gsap.killTweensOf(move.position);
    gsap.killTweensOf(spin.rotation);

    // --------------------------------
    // Now show the can
    // --------------------------------

    move.visible = true;

    // --------------------------------
    // CAN ENTRY ANIMATION
    // --------------------------------

    const tl = gsap.timeline();

    tl.to(
      move.position,
      {
        y: 0,
        duration: 2.2,
        ease: "power3.out",
      },
      0
    );

    tl.to(
      spin.rotation,
      {
        y: Math.PI * 4.3,
        duration: 2.2,
        ease: "power2.out",
      },
      0
    );

    return () => {
      tl.kill();

      gsap.killTweensOf(move.position);
      gsap.killTweensOf(spin.rotation);
    };
  }, []);

  // --------------------------------
  // CAN MOVEMENT / LIQUID DATA
  // --------------------------------

  useFrame((state, delta) => {
    const move = moveRef.current;

    if (!move) return;

    // Current can position
    const x = move.position.x;
    const y = move.position.y;

    // Calculate movement velocity
    if (motionRef?.current) {
      const current = motionRef.current;

      const dx = x - (current.lastX ?? x);
      const dy = y - (current.lastY ?? y);

      const velocity = Math.sqrt(
        dx * dx + dy * dy
      );

      current.x = x;
      current.y = y;

      current.lastX = x;
      current.lastY = y;

      current.velocity +=
        (velocity - current.velocity) *
        Math.min(delta * 8, 1);

      current.velocity *= 0.94;
    }
  });

  return (
    <group ref={moveRef} visible={false}>
      
      {/* 
        Separate rotation group
        so position and rotation
        can be controlled independently
      */}
      <group ref={spinRef}>

        <primitive
          object={scene}
          scale={1}
        />

      </group>

    </group>
  );
};

useGLTF.preload("/models/Coke_3d_can.glb");

export default Coke3DCan;