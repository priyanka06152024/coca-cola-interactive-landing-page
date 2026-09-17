// import React, { useRef } from "react";
// import {useEffect} from "react"
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// import { LuLeaf } from "react-icons/lu";
// import { FaGlobe } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";

// import { slideFromLeft, slideFromRight } from "../animations/Animation";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment } from "@react-three/drei";
// import Coke3DCan from "../ThreeD/Coke3DCan";
// import LiquidBackground from "../ThreeD/LiquidBackground";

// const Hero = () => {
//   const container = useRef(null);
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const canRef = useRef();

//   useEffect(() => {
//   if (!canRef.current) return;

//   // Initial position
//   gsap.set(canRef.current.position, {
//     y: 5,
//   });

//   gsap.set(canRef.current.rotation, {
//     y: 0,
//   });

//   const tl = gsap.timeline();

//   // Can upar se niche aaye
//   tl.to(
//     canRef.current.position,
//     {
//       y: 0,
//       duration: 2,
//       ease: "power3.out",
//     },
//     0
//   );

//   // Saath me 360° spin
//   tl.to(
//     canRef.current.rotation,
//     {
//       y: Math.PI * 2,
//       duration: 2,
//       ease: "none",
//     },
//     0
//   );

//   return () => {
//     tl.kill();
//   };
// }, []);

//   useGSAP(
//     () => {
//       // ORIGINAL text animation
//       gsap.fromTo(
//         ".original-letter",
//         {
//           y: "110%",
//         },
//         {
//           y: "0%",
//           duration: 1.2,
//           stagger: 0.08,
//           ease: "power4.out",
//         },
//       );

//       // Left content animation
//       slideFromLeft(leftRef.current, {
//         delay: 0.25,
//       });

//       // Right card animation
//       slideFromRight(rightRef.current, {
//         delay: 0.35,
//       });
//     },
//     {
//       scope: container,
//     },

//   );

//   const text = "ORIGINAL";

//   return (
//     <div ref={container} className="h-auto w-full bg-black overflow-hidden">
//       <div className="w-full h-full">
//         {/* ORIGINAL TEXT */}
//         <div className="w-full h-[20vw] flex justify-center items-center overflow-hidden">
//           <h1
//             className="absolute inset-0 flex items-center justify-center
//                  text-[12vw] font-bold
//                  text-red-700
//                  uppercase
//                  pointer-events-none
//                  font-['Bebas_Neue']
//                  z-0 top-[-25%]"
//           >
//             {text.split("").map((letter, index) => (
//               <span key={index} className="inline-block overflow-hidden">
//                 <span className="original-letter inline-block">{letter}</span>
//               </span>
//             ))}
//           </h1>
//         </div>

//         {/* HERO CONTENT */}
//         <div className="flex flex-row justify-between w-full">
//           {/* LEFT CONTENT */}
//           <div
//             ref={leftRef}
//             className="flex flex-col p-2 m-3 ml-4 gap-2 w-[30%]"
//           >
//             <p className="text-white">REAL TASTE</p>

//             <div className="text-white h-[5vw] text-[5vw] leading-[5vw] font-['Bebas_Neue']">
//               TIMELESS
//             </div>

//             <div className="text-red-700 h-[5vw] text-[5vw] leading-[5vw] font-['Bebas_Neue']">
//               FEELING
//             </div>

//             <p className="text-gray-500 w-[20vw]">
//               Coca-Cola Original Taste. The world's favorite refreshment. Real
//               taste that brings moments to life.
//             </p>

//             <button className="text-red-700 h-[4vw] w-[15vw] border-2 border-red-700 mt-4 rounded-xl hover:bg-red-700 hover:text-white transition-all duration-300">
//               EXPLORE NOW
//             </button>
//           </div>

//           <div className="relative z-10 w-[35vw] h-[80vw] top-[-30vw] left-[-5vw]">
//             {/* <Canvas
//               camera={{ position: [0, 0, 13], fov: 35 }}
//               gl={{ antialias: true, alpha: true }}
//             >

//               <ambientLight intensity={0.45} />

//               <directionalLight position={[4, 6, 5]} intensity={2.5} />

//               <pointLight position={[-4, 2, 4]} intensity={2} distance={8} />

//               <pointLight position={[0, 0, 5]} intensity={0.8} distance={6} />

//               <Environment preset="studio" />

//              <group ref={canRef}>
//                <Coke3DCan />
//              </group>

//               <OrbitControls enableZoom={false} enablePan={false} />
//             </Canvas>  */}

//             <div className="relative z-10 w-[35vw] h-[80vw] top-[-30vw] left-[-5vw]">

//   <Canvas
//     camera={{
//       position: [0, 0, 13],
//       fov: 35,
//     }}
//     gl={{
//       antialias: true,
//       alpha: true,
//     }}
//   >

//     {/* LIQUID BACKGROUND */}
//     <LiquidBackground />

//     {/* LIGHTING */}
//     <ambientLight intensity={0.45} />

//     <directionalLight
//       position={[4, 6, 5]}
//       intensity={2.5}
//     />

//     <pointLight
//       position={[-4, 2, 4]}
//       intensity={2}
//       distance={8}
//     />

//     <pointLight
//       position={[0, 0, 5]}
//       intensity={0.8}
//       distance={6}
//     />

//     {/* NORMAL COKE CAN */}
//     <Coke3DCan />

//   </Canvas>

// </div>

//           </div>

//           {/* RIGHT CARD */}
//           <div
//             ref={rightRef}
//             className="flex flex-col m-3 gap-5 w-[21%] h-[22vw] p-4 mr-4 justify-center bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-xl border border-white/[0.18] rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
//           >
//             {/* ITEM 1 */}
//             <div className="flex flex-row gap-8 items-center">
//               <LuLeaf className="text-white text-[2vw] w-[4.5vw] h-[4.5vw] p-3 border-2 border-red-700 rounded-full" />

//               <div className="text-white">
//                 <p>PURE INGREDIENTS</p>
//                 <p className="text-[1vw] text-gray-400">
//                   A taste you can trust
//                 </p>
//               </div>
//             </div>

//             {/* ITEM 2 */}
//             <div className="flex flex-row gap-8 items-center">
//               <FiUsers className="text-white text-[2vw] w-[5.5vw] h-[4.5vw] p-3 border-2 border-red-700 rounded-full" />

//               <div className="text-white">
//                 <p>BRINGS PEOPLE TOGETHER</p>
//                 <p className="text-[1vw] text-gray-400">More than a drink.</p>
//               </div>
//             </div>

//             {/* ITEM 3 */}
//             <div className="flex flex-row gap-8 items-center">
//               <FaGlobe className="text-white text-[2vw] w-[5vw] h-[4.5vw] p-3 border-2 border-red-700 rounded-full" />

//               <div className="text-white">
//                 <p>ENJOYED WORLDWIDE</p>
//                 <p className="text-[1vw] text-gray-400">
//                   Same great taste. Everywhere
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";

import { LuLeaf } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";


import { slideFromLeft, slideFromRight } from "../animations/Animation";

import Coke3DCan from "../ThreeD/Coke3DCan";


const Hero = () => {
  const container = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // WebGL loading ke baad start hoga
  const [webglReady, setWebglReady] = useState(false);

  const motionRef = useRef({
    x: 0.5,
    y: 0.5,
    velocity: 0,
    directionX: 0,
    directionY: 0,
  });

  // --------------------------------
  // DELAY WEBGL UNTIL PAGE IS READY
  // --------------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      setWebglReady(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  // --------------------------------
  // TEXT + CONTENT ANIMATION
  // --------------------------------

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
        },
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
    },
  );

  // --------------------------------
  // MOUSE TRACKING
  // --------------------------------

  useEffect(() => {
    if (!webglReady) return;

    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      const current = motionRef.current;

      const dx = x - current.x;
      const dy = y - current.y;

      current.velocity = Math.min(Math.sqrt(dx * dx + dy * dy) * 100, 1);

      current.directionX = dx;
      current.directionY = dy;

      current.x = x;
      current.y = y;
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [webglReady]);

  const text = "ORIGINAL";

  return (
    <section
      ref={container}a
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >

   
      {/* =========================================
          LIQUID BACKGROUND
          ========================================= */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        {webglReady && (
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 45,
            }}
            dpr={[1, 1.5]}
            gl={{
              antialias: false,
              alpha: false,
              powerPreference: "high-performance",
            }}
            frameloop="always"
          >
           
          </Canvas>
        )}
      </div>

      {/* =========================================
          ORIGINAL
          ========================================= */}

      <div
        className="
          relative
          z-10
          w-full
          h-[20vw]
          flex
          justify-center
          items-center
          overflow-hidden
        "
      >
        <h1
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-[12vw]
            font-bold
            text-red-700
            uppercase
            pointer-events-none
            font-['Bebas_Neue']
            top-[-25%]
          "
        >
          {text.split("").map((letter, index) => (
            <span key={index} className="inline-block overflow-hidden">
              <span className="original-letter inline-block">{letter}</span>
            </span>
          ))}
        </h1>
      </div>

      {/* =========================================
          HERO CONTENT
          ========================================= */}

      <div
        className="
          relative
          z-20
          flex
          flex-row
          justify-between
          w-full
        "
      >
        {/* LEFT */}

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
            h-[25vw]
          "
        >
          <p className="text-white">REAL TASTE</p>

          <div
            className="
              text-white
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
            "
          >
            Coca-Cola Original Taste. The world's favorite refreshment. Real
            taste that brings moments to life.
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
              hover:bg-red-700
              hover:text-white
              transition-all
              duration-300
            "
          >
            EXPLORE NOW
          </button>
        </div>

        {/* =========================================
            CAN
            ========================================= */}

        <div
          className="
            relative
            z-30
            w-[20vw]
            h-[80vw]
            top-[-30vw]       
          "
        >
          {webglReady && (
           <Canvas 
  camera={{
    position: [0, 0, 13],
    fov: 35,
  }}
  dpr={[1, 1.5]}
  gl={{
    antialias: false,
    alpha: true,
    powerPreference: "high-performance",
  }}
  frameloop="always"
>
  <ambientLight intensity={0.7} />

  <directionalLight
    position={[4, 6, 6]}
    intensity={3.2}
  />

  <directionalLight
    position={[-5, 2, 5]}
    intensity={2.8}
  />

  <pointLight
    position={[0, 1, 6]}
    intensity={1.5}
    distance={10}
    decay={1.5}
  />

  <pointLight
    position={[3, 2, -2]}
    intensity={2}
    distance={8}
    decay={1.5}
  />

  <Coke3DCan motionRef={motionRef} />
</Canvas>
          )}
        </div>

        {/* =========================================
            RIGHT CARD
            ========================================= */}

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
            bg-gradient-to-br
            from-white/[0.12]
            to-white/[0.03]
            backdrop-blur-xl
            border
            border-white/[0.18]
            rounded-3xl
            shadow-[0_8px_40px_rgba(0,0,0,0.4)]
          "
        >
          <div className="flex flex-row gap-8 items-center">
            <LuLeaf
              className="
                text-white
                text-[2vw]
                w-[4.5vw]
                h-[4.5vw]
                p-3
                border-2
                border-red-700
                rounded-full
              "
            />

            <div className="text-white">
              <p>PURE INGREDIENTS</p>

              <p className="text-[1vw] text-gray-400">A taste you can trust</p>
            </div>
          </div>

          <div className="flex flex-row gap-8 items-center">
            <FiUsers
              className="
                text-white
                text-[2vw]
                w-[5.5vw]
                h-[4.5vw]
                p-3
                border-2
                border-red-700
                rounded-full
              "
            />

            <div className="text-white">
              <p>BRINGS PEOPLE TOGETHER</p>

              <p className="text-[1vw] text-gray-400">More than a drink.</p>
            </div>
          </div>

          <div className="flex flex-row gap-8 items-center">
            <FaGlobe
              className="
                text-white
                text-[2vw]
                w-[5vw]
                h-[4.5vw]
                p-3
                border-2
                border-red-700
                rounded-full
              "
            />

            <div className="text-white">
              <p>ENJOYED WORLDWIDE</p>

              <p className="text-[1vw] text-gray-400">
                Same great taste. Everywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
