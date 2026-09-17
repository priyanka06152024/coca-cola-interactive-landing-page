import React, {
  useLayoutEffect,
  useRef,
} from "react";

import * as THREE from "three";

import gsap from "gsap";

import {
  useGLTF,
} from "@react-three/drei";

import {
  useFrame,
} from "@react-three/fiber";


const Coke3DCan = ({
  motionRef,
}) => {

  const {
    scene,
  } = useGLTF(
    "/models/Coke_3d_can.glb"
  );


  const moveRef =
    useRef();

  const spinRef =
    useRef();


  // -----------------------------------------
  // CAN INTRO ANIMATION
  // -----------------------------------------

  useLayoutEffect(() => {

    if (
      !moveRef.current ||
      !spinRef.current
    ) {
      return;
    }


    const move =
      moveRef.current;

    const spin =
      spinRef.current;


    gsap.killTweensOf(
      move.position
    );

    gsap.killTweensOf(
      spin.rotation
    );


    // Starting position
    move.position.set(
      0,
      5.5,
      0
    );


    // Starting rotation
    spin.rotation.set(
      0,
      0,
      0
    );


    move.visible = true;


    // Reset motion data
    if (motionRef?.current) {

      motionRef.current.canX =
        0.5;

      motionRef.current.canY =
        0.5;

      motionRef.current.canVelocity =
        0;

      motionRef.current.canDirectionX =
        0;

      motionRef.current.canDirectionY =
        0;

      motionRef.current.lastCanX =
        0;

      motionRef.current.lastCanY =
        5.5;
    }


    const timeline =
      gsap.timeline();


    // -----------------------------------------
    // CAN COMES DOWN
    // -----------------------------------------

    timeline.to(
      move.position,
      {
        y: 0,

        duration: 2.2,

        ease: "power3.out",
      },
      0
    );


    // -----------------------------------------
    // CAN SPINS WHILE COMING DOWN
    // -----------------------------------------

    timeline.to(
      spin.rotation,
      {
        y: Math.PI * 4.3,

        duration: 2.2,

        ease: "power2.out",
      },
      0
    );


    return () => {

      timeline.kill();

      gsap.killTweensOf(
        move.position
      );

      gsap.killTweensOf(
        spin.rotation
      );

    };

  }, [motionRef]);


  // -----------------------------------------
  // SEND CAN MOVEMENT TO LIQUID BACKGROUND
  // -----------------------------------------

  useFrame(
    (state, delta) => {

      if (
        !moveRef.current ||
        !motionRef?.current
      ) {
        return;
      }


      const move =
        moveRef.current;


      const motion =
        motionRef.current;


      // ---------------------------------------
      // CAN WORLD POSITION
      // ---------------------------------------

      const worldPosition =
        new THREE.Vector3();


      move.getWorldPosition(
        worldPosition
      );


      // ---------------------------------------
      // NORMALIZE CAN POSITION
      // ---------------------------------------

      const canX =
        THREE.MathUtils.clamp(
          0.5 +
            worldPosition.x / 5,
          0.05,
          0.95
        );


      const canY =
        THREE.MathUtils.clamp(
          0.5 -
            worldPosition.y / 7,
          0.05,
          0.95
        );


      // ---------------------------------------
      // PREVIOUS POSITION
      // ---------------------------------------

      const previousX =
        motion.lastCanX ??
        canX;

      const previousY =
        motion.lastCanY ??
        canY;


      const dx =
        canX -
        previousX;


      const dy =
        canY -
        previousY;


      // ---------------------------------------
      // VELOCITY
      // ---------------------------------------

      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy
        );


      const velocity =
        Math.min(
          distance * 12,
          1
        );


      // ---------------------------------------
      // DIRECTION
      // ---------------------------------------

      let directionX = 0;
      let directionY = 0;


      if (distance > 0.00001) {

        directionX =
          dx / distance;

        directionY =
          dy / distance;

      }


      // ---------------------------------------
      // SMOOTH MOTION
      // ---------------------------------------

      motion.canVelocity +=
        (
          velocity -
          motion.canVelocity
        )
        *
        Math.min(
          delta * 10,
          1
        );


      motion.canVelocity *=
        0.92;


      // ---------------------------------------
      // SAVE DATA
      // ---------------------------------------

      motion.canX =
        canX;

      motion.canY =
        canY;


      motion.canDirectionX +=
        (
          directionX -
          motion.canDirectionX
        )
        *
        Math.min(
          delta * 8,
          1
        );


      motion.canDirectionY +=
        (
          directionY -
          motion.canDirectionY
        )
        *
        Math.min(
          delta * 8,
          1
        );


      motion.lastCanX =
        canX;

      motion.lastCanY =
        canY;

    }
  );


  return (

    <group
      ref={moveRef}
      visible={false}
    >

      <group
        ref={spinRef}
      >

        <primitive
          object={scene}
          scale={1}
        />

      </group>

    </group>

  );
};


useGLTF.preload(
  "/models/Coke_3d_can.glb"
);


export default Coke3DCan;