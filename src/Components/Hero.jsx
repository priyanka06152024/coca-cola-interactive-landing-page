
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { LuLeaf } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

import {
  slideFromLeft,
  slideFromRight,
} from "../animations/Animation";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import Coke3DCan from "../ThreeD/Coke3DCan";

const Hero = () => {
  const container = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const canRef = useRef(null);

  // ==============================
  // COKE CAN DROP + SPIN
  // ==============================
  useEffect(() => {
    if (!canRef.current) return;

    gsap.set(canRef.current.position, {
      y: 5,
    });

    gsap.set(canRef.current.rotation, {
      y: 0,
    });

    const tl = gsap.timeline();

    // Drop
    tl.to(
      canRef.current.position,
      {
        y: 0,
        duration: 2,
        ease: "power3.out",
      },
      0
    );

    // 360 degree spin
    tl.to(
      canRef.current.rotation,
      {
        y: Math.PI * 2,
        duration: 2,
        ease: "none",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  // ==============================
  // HERO TEXT ANIMATIONS
  // ==============================
  useGSAP(
    () => {
      gsap.fromTo(
        ".original-letter",
        {
          y: "110%",
        },
        {
          y: "0%",
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
        }
      );

      slideFromLeft(leftRef.current, {
        delay: 0.25,
      });

      slideFromRight(rightRef.current, {
        delay: 0.35,
      });
    },
    {
      scope: container,
    }
  );

  const text = "ORIGINAL";

  return (
    <div
      ref={container}
      className="h-auto w-full overflow-hidden bg-[#F7F5F0]"
    >
      <div className="w-full h-full">

        {/* =========================
            ORIGINAL BACKGROUND TEXT
        ========================= */}
        <div className="w-full h-[20vw] flex justify-center items-center overflow-hidden">

          <h1
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-[12vw]
              font-bold
              text-red-700/[0.08]
              uppercase
              pointer-events-none
              font-['Bebas_Neue']
              z-0
              top-[-25%]
            "
          >
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden"
              >
                <span className="original-letter inline-block">
                  {letter}
                </span>
              </span>
            ))}
          </h1>

        </div>

        {/* =========================
            HERO CONTENT
        ========================= */}
        <div className="flex flex-row justify-between w-full">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div
            ref={leftRef}
            className="
              flex
              flex-col
              p-2
              m-3
              ml-4
              gap-2
              w-[30%]
              relative
              z-20
            "
          >

            <p
              className="
                text-black/60
                font-medium
                tracking-[0.2em]
                text-sm
              "
            >
              REAL TASTE
            </p>

            <div
              className="
                text-black
                h-[5vw]
                text-[5vw]
                leading-[5vw]
                font-['Bebas_Neue']
              "
            >
              TIMELESS
            </div>

            <div
              className="
                text-red-700
                h-[5vw]
                text-[5vw]
                leading-[5vw]
                font-['Bebas_Neue']
              "
            >
              FEELING
            </div>

            <p
              className="
                text-gray-500
                w-[20vw]
                text-sm
                leading-6
              "
            >
              Coca-Cola Original Taste. The world's favorite
              refreshment. Real taste that brings moments to life.
            </p>

            <button
              className="
                text-red-700
                h-[4vw]
                w-[15vw]
                border-2
                border-red-700
                mt-4
                rounded-xl
                font-medium
                tracking-wide
                hover:bg-red-700
                hover:text-white
                transition-all
                duration-300
              "
            >
              EXPLORE NOW
            </button>

          </div>

          {/* =========================
              3D COKE CAN
          ========================= */}
          <div
            className="
              relative
              z-10
              w-[35vw]
              h-[40vw]
              top-[-30vw]
              left-[-5vw]
            "
          >
            <Canvas
              camera={{
                position: [0, 0, 13],
                fov: 35,
              }}
              gl={{
                antialias: true,
                alpha: true,
              }}
            >

              {/* LIGHTING */}

              <ambientLight intensity={0.55} />

              <directionalLight
                position={[4, 6, 5]}
                intensity={2.5}
              />

              <pointLight
                position={[-4, 2, 4]}
                intensity={2}
                distance={8}
              />

              <pointLight
                position={[0, 0, 5]}
                intensity={0.8}
                distance={6}
              />

              {/* ENVIRONMENT */}
              <Environment preset="studio" />

              {/* COKE MODEL */}
              <group ref={canRef}>
                <Coke3DCan />
              </group>

            </Canvas>
          </div>

          {/* =========================
              RIGHT GLASS CARD
          ========================= */}
          <div
            ref={rightRef}
            className="
              flex
              flex-col
              m-3
              gap-5
              w-[21%]
              h-[22vw]
              p-4
              mr-4
              justify-center

              bg-[#FDFCF8]/75
              backdrop-blur-xl

              border
              border-black/[0.07]

              rounded-3xl

              shadow-[0_15px_50px_rgba(0,0,0,0.06)]

              relative
              z-20
            "
          >

            {/* ITEM 1 */}
            <div className="flex flex-row gap-5 items-center">

              <LuLeaf
                className="
                  text-red-700
                  text-[2vw]
                  w-[4.5vw]
                  h-[4.5vw]
                  p-3
                  border-2
                  border-red-700
                  rounded-full
                  shrink-0
                "
              />

              <div className="text-black">

                <p className="font-medium text-sm">
                  PURE INGREDIENTS
                </p>

                <p className="text-[1vw] text-gray-500 mt-1">
                  A taste you can trust
                </p>

              </div>

            </div>

            {/* ITEM 2 */}
            <div className="flex flex-row gap-5 items-center">

              <FiUsers
                className="
                  text-red-700
                  text-[2vw]
                  w-[4.5vw]
                  h-[4.5vw]
                  p-3
                  border-2
                  border-red-700
                  rounded-full
                  shrink-0
                "
              />

              <div className="text-black">

                <p className="font-medium text-sm">
                  BRINGS PEOPLE TOGETHER
                </p>

                <p className="text-[1vw] text-gray-500 mt-1">
                  More than a drink.
                </p>

              </div>

            </div>

            {/* ITEM 3 */}
            <div className="flex flex-row gap-5 items-center">

              <FaGlobe
                className="
                  text-red-700
                  text-[2vw]
                  w-[4.5vw]
                  h-[4.5vw]
                  p-3
                  border-2
                  border-red-700
                  rounded-full
                  shrink-0
                "
              />

              <div className="text-black">

                <p className="font-medium text-sm">
                  ENJOYED WORLDWIDE
                </p>

                <p className="text-[1vw] text-gray-500 mt-1">
                  Same great taste. Everywhere
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

