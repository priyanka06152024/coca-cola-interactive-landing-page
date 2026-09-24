// // import React, { useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { useGSAP } from "@gsap/react";

// // gsap.registerPlugin(ScrollTrigger);

// // const Product = () => {
// //   const sectionRef = useRef();

// //   useGSAP(() => {
// //     const section = sectionRef.current;
// //     const slides = gsap.utils.toArray(".product-slide");

// //     if (!section || slides.length < 2) return;

// //     // ---------------------------------------------
// //     // Initial position
// //     // ---------------------------------------------

// //     // First slide screen par already visible
// //     gsap.set(slides[0], {
// //       xPercent: 0,
// //     });

// //     // Baaki saare slides right side ke bahar
// //     gsap.set(slides.slice(1), {
// //       xPercent: 100,
// //     });

// //     // ---------------------------------------------
// //     // Timeline
// //     // ---------------------------------------------

// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: section,

// //         start: "top top",

// //         // 1 slide = 100vh scroll
// //         end: `+=${(slides.length - 1) * 100}vh`,

// //         scrub: 1,

// //         pin: true,

// //         anticipatePin: 1,

// //         invalidateOnRefresh: true,
// //       },
// //     });

// //     // ---------------------------------------------
// //     // Slide animations
// //     // ---------------------------------------------

// //     slides.slice(1).forEach((slide) => {
// //       tl.to(slide, {
// //         xPercent: 0,
// //         ease: "none",

// //         // IMPORTANT:
// //         // Har slide timeline ka pura 1 portion lega
// //         duration: 1,
// //       });
// //     });

// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative w-full bg-black"
// //     >
// //       <div className="relative h-screen w-full overflow-hidden">

// //         {/* ========================================
// //             DRINK
// //         ======================================== */}

// //         <div
// //           className="
// //             product-slide
// //             absolute inset-0
// //             z-10
// //             flex
// //             h-screen
// //             w-full
// //             items-center
// //             justify-center
// //             bg-black
// //           "
// //         >

// //         </div>

// //         {/* ========================================
// //             LINK
// //         ======================================== */}

// //         <div
// //           className="
// //             product-slide
// //             absolute inset-0
// //             z-20
// //             flex
// //             h-screen
// //             w-full
// //             items-center
// //             justify-center
// //             bg-red-700
// //           "
// //         >
// //           <h1
// //             className="
// //               font-['Bebas_Neue']
// //               text-[12vw]
// //               leading-none
// //               text-white
// //             "
// //           >
// //             Link
// //           </h1>
// //         </div>

// //         {/* ========================================
// //             CHERRY
// //         ======================================== */}

// //         <div
// //           className="
// //             product-slide
// //             absolute inset-0
// //             z-30
// //             flex
// //             h-screen
// //             w-full
// //             items-center
// //             justify-center
// //             bg-black
// //           "
// //         >
// //           <h1
// //             className="
// //               font-['Bebas_Neue']
// //               text-[12vw]
// //               leading-none
// //               text-white
// //             "
// //           >
// //             Cherry
// //           </h1>
// //         </div>

// //         {/* ========================================
// //             ORIGINAL
// //         ======================================== */}

// //         <div
// //           className="
// //             product-slide
// //             absolute inset-0
// //             z-40
// //             flex
// //             h-screen
// //             w-full
// //             items-center
// //             justify-center
// //             bg-red-700
// //           "
// //         >
// //           <h1
// //             className="
// //               font-['Bebas_Neue']
// //               text-[12vw]
// //               leading-none
// //               text-white
// //             "
// //           >
// //             Original
// //           </h1>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default Product;

// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight, Sparkles } from "lucide-react";

// import Coke3DCan from "../ThreeD/Coke3DCan";
// import { Canvas } from "@react-three/fiber";

// gsap.registerPlugin(ScrollTrigger);

// const Product = () => {
//   const sectionRef = useRef();

//   useGSAP(() => {
//     const section = sectionRef.current;
//     const slides = gsap.utils.toArray(".product-slide");

//     if (!section || slides.length < 2) return;

//     // First slide visible
//     gsap.set(slides[0], {
//       xPercent: 0,
//     });

//     // Remaining slides start from right
//     gsap.set(slides.slice(1), {
//       xPercent: 100,
//     });

//     // Horizontal slide animation
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: `+=${(slides.length - 1) * 100}vh`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//       },
//     });

//     slides.slice(1).forEach((slide) => {
//       tl.to(slide, {
//         xPercent: 0,
//         ease: "none",
//         duration: 1,
//       });
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative w-full bg-black">
//       <div className="relative h-screen w-full overflow-hidden">
//         {/* =====================================================
//             01 — COCA-COLA ORIGINAL
//         ===================================================== */}

//         <div
//           className="
//             product-slide
//             absolute inset-0
//             z-10
//             h-screen w-full
//             overflow-hidden
//             bg-black
//           "
//         >
//           {/* Background Text */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               -left-[4vw]
//               top-[8vh]
//               font-['Bebas_Neue']
//               text-[24vw]
//               leading-none
//               text-red-600/[0.045]
//               select-none
//             "
//           >
//             ORIGINAL
//           </div>

//           {/* Header */}

//           <div className="absolute left-8 right-8 top-8 z-20 flex items-center justify-between">
//             <span
//               className="
//                 font-['Bebas_Neue']
//                 text-sm
//                 tracking-[0.3em]
//                 text-white/60
//               "
//             >
//               COCA-COLA / 01
//             </span>

//             <span
//               className="
//                 rounded-full
//                 border border-white/15
//                 px-4 py-2
//                 text-[9px]
//                 tracking-[0.3em]
//                 text-white/50
//               "
//             >
//               THE CLASSIC
//             </span>
//           </div>

//           {/* Main */}

//           <div className="relative z-10 flex h-full items-center px-[7vw]">
//             {/* LEFT */}

//             <div className="w-[50%]">
//               <p className="mb-4 text-xs uppercase tracking-[0.4em] text-red-500">
//                 The original
//               </p>

//               <h1
//                 className="
//                   font-['Bebas_Neue']
//                   text-[13vw]
//                   leading-[0.72]
//                   tracking-tight
//                   text-white
//                 "
//               >
//                 ORIGINAL
//               </h1>

//               <p className="mt-8 max-w-md text-sm leading-6 text-white/50">
//                 The unmistakable Coca-Cola taste that has been bringing people
//                 together for generations.
//               </p>

//               <button
//                 className="
//                   mt-8
//                   flex items-center gap-3
//                   rounded-full
//                   bg-red-600
//                   px-6 py-3
//                   text-xs font-medium
//                   tracking-[0.2em]
//                   text-white
//                   transition
//                   duration-300
//                   hover:bg-white
//                   hover:text-black
//                 "
//               >
//                 DISCOVER
//                 <ArrowUpRight size={15} />
//               </button>
//             </div>

//             {/* RIGHT PRODUCT */}

//             {/* RIGHT PRODUCT */}

//             <div className="relative flex h-full w-[50%] items-center justify-center">
//               {/* RED GLOW */}

//               <div
//                 className="
//       absolute
//       h-[38vw]
//       w-[38vw]
//       rounded-full
//       bg-red-600/25
//       blur-[120px]
//     "
//               />

//               {/* 3D COKE CAN */}

//               <div
//                 className="
//       relative
//       z-10
//       h-[95vh]
//       w-[40vw]
      
//       -translate-y-[2vh]
//     "
//               >
//                 <Canvas
//                   camera={{
//                     position: [0, 0, 10],
//                     fov: 32,
//                   }}
//                   gl={{
//                     antialias: true,
//                     alpha: true,
//                   }}
//                   dpr={[1, 2]}
//                 >
//                   {/* LIGHTING */}

//                   <ambientLight intensity={1.2} />

//                   <directionalLight position={[5, 8, 6]} intensity={4} />

//                   <directionalLight position={[-5, 3, 4]} intensity={2} />

//                   <pointLight position={[0, 2, 6]} intensity={3} />

//                   <pointLight position={[-4, -2, 3]} intensity={2} />

//                   <Coke3DCan />
//                 </Canvas>
//               </div>
//             </div>
//           </div>

//           {/* Number */}

//           <div
//             className="
//               absolute
//               bottom-7
//               left-8
//               font-['Bebas_Neue']
//               text-6xl
//               text-white/[0.08]
//             "
//           >
//             01
//           </div>
//         </div>

//         {/* =====================================================
//             02 — COCA-COLA ZERO SUGAR
//         ===================================================== */}

//         <div
//           className="
//             product-slide
//             absolute inset-0
//             z-20
//             h-screen w-full
//             overflow-hidden
//             bg-[#070707]
//           "
//         >
//           {/* Background */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               -right-[5vw]
//               top-[5vh]
//               font-['Bebas_Neue']
//               text-[26vw]
//               leading-none
//               text-red-600/[0.035]
//             "
//           >
//             ZERO
//           </div>

//           {/* Header */}

//           <div className="absolute left-8 right-8 top-8 z-20 flex justify-between">
//             <span
//               className="
//                 font-['Bebas_Neue']
//                 text-sm
//                 tracking-[0.3em]
//                 text-white/60
//               "
//             >
//               COCA-COLA / 02
//             </span>

//             <span
//               className="
//                 rounded-full
//                 border border-white/15
//                 px-4 py-2
//                 text-[9px]
//                 tracking-[0.3em]
//                 text-white/50
//               "
//             >
//               ZERO SUGAR
//             </span>
//           </div>

//           {/* Main */}

//           <div className="relative z-10 flex h-full items-center px-[7vw]">
//             {/* CAN */}

//             <div className="relative flex h-full w-[48%] items-center justify-center">
//               <div
//                 className="
//                   absolute
//                   h-[32vw]
//                   w-[32vw]
//                   rounded-full
//                   bg-red-700/15
//                   blur-[110px]
//                 "
//               />

//               <div
//                 className="
//                   relative
//                   z-10
//                   h-[65vh]
//                   w-[14vw]
//                   rotate-[-7deg]
//                   rounded-[3vw]
//                   bg-gradient-to-r
//                   from-[#050505]
//                   via-[#171717]
//                   to-[#030303]
//                   shadow-[0_30px_100px_rgba(255,0,0,0.25)]
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     rounded-[3vw]
//                     bg-gradient-to-r
//                     from-white/10
//                     via-transparent
//                     to-black/60
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     text-center
//                     font-['Bebas_Neue']
//                     text-[3vw]
//                     leading-none
//                     text-white
//                   "
//                 >
//                   COKE
//                   <br />
//                   ZERO
//                 </div>
//               </div>
//             </div>

//             {/* CONTENT */}

//             <div className="w-[52%]">
//               <p
//                 className="
//                   mb-4
//                   text-xs
//                   uppercase
//                   tracking-[0.4em]
//                   text-red-500
//                 "
//               >
//                 No sugar
//               </p>

//               <h1
//                 className="
//                   font-['Bebas_Neue']
//                   text-[13vw]
//                   leading-[0.7]
//                   text-white
//                 "
//               >
//                 ZERO
//               </h1>

//               <h2
//                 className="
//                   mt-2
//                   font-['Bebas_Neue']
//                   text-[6vw]
//                   leading-none
//                   text-red-600
//                 "
//               >
//                 SUGAR
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-6 text-white/50">
//                 Great Coca-Cola taste with zero sugar. Bold flavour made for a
//                 different kind of refreshment.
//               </p>

//               <button
//                 className="
//                   mt-8
//                   flex items-center gap-3
//                   rounded-full
//                   border border-white/20
//                   px-6 py-3
//                   text-xs
//                   tracking-[0.2em]
//                   text-white
//                   transition
//                   hover:bg-white
//                   hover:text-black
//                 "
//               >
//                 EXPLORE ZERO
//                 <ArrowUpRight size={15} />
//               </button>
//             </div>
//           </div>

//           <div
//             className="
//               absolute
//               bottom-7
//               right-8
//               font-['Bebas_Neue']
//               text-6xl
//               text-white/[0.07]
//             "
//           >
//             02
//           </div>
//         </div>

//         {/* =====================================================
//             03 — CHERRY
//         ===================================================== */}

//         <div
//           className="
//             product-slide
//             absolute inset-0
//             z-30
//             h-screen w-full
//             overflow-hidden
//             bg-[#090303]
//           "
//         >
//           <div
//             className="
//               pointer-events-none
//               absolute
//               left-[-5vw]
//               top-[4vh]
//               font-['Bebas_Neue']
//               text-[25vw]
//               leading-none
//               text-red-800/[0.08]
//             "
//           >
//             CHERRY
//           </div>

//           <div className="absolute left-8 right-8 top-8 z-20 flex justify-between">
//             <span
//               className="
//                 font-['Bebas_Neue']
//                 text-sm
//                 tracking-[0.3em]
//                 text-white/60
//               "
//             >
//               COCA-COLA / 03
//             </span>

//             <span
//               className="
//                 rounded-full
//                 border border-red-500/20
//                 px-4 py-2
//                 text-[9px]
//                 tracking-[0.3em]
//                 text-red-400
//               "
//             >
//               CHERRY
//             </span>
//           </div>

//           <div className="relative z-10 flex h-full items-center px-[7vw]">
//             <div className="w-[52%]">
//               <p className="mb-4 text-xs uppercase tracking-[0.4em] text-red-400">
//                 A fruity twist
//               </p>

//               <h1
//                 className="
//                   font-['Bebas_Neue']
//                   text-[14vw]
//                   leading-[0.68]
//                   text-white
//                 "
//               >
//                 CHERRY
//               </h1>

//               <p className="mt-8 max-w-md text-sm leading-6 text-white/50">
//                 The classic Coca-Cola taste meets a delicious cherry twist for a
//                 bold fruity refreshment.
//               </p>

//               <div className="mt-8 flex items-center gap-3">
//                 <span
//                   className="
//                     h-3
//                     w-3
//                     rounded-full
//                     bg-red-500
//                     shadow-[0_0_25px_rgba(255,0,0,0.8)]
//                   "
//                 />

//                 <span
//                   className="
//                     text-xs
//                     uppercase
//                     tracking-[0.3em]
//                     text-white/40
//                   "
//                 >
//                   Cherry edition
//                 </span>
//               </div>
//             </div>

//             <div className="relative flex h-full w-[48%] items-center justify-center">
//               <div
//                 className="
//                   absolute
//                   h-[34vw]
//                   w-[34vw]
//                   rounded-full
//                   bg-red-900/30
//                   blur-[110px]
//                 "
//               />

//               <div
//                 className="
//                   relative
//                   z-10
//                   h-[65vh]
//                   w-[14vw]
//                   rotate-[8deg]
//                   rounded-[3vw]
//                   bg-gradient-to-r
//                   from-[#250004]
//                   via-[#a80018]
//                   to-[#300005]
//                   shadow-[0_30px_100px_rgba(180,0,30,0.4)]
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     rounded-[3vw]
//                     bg-gradient-to-r
//                     from-white/10
//                     via-transparent
//                     to-black/40
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     text-center
//                     font-['Bebas_Neue']
//                     text-[3vw]
//                     leading-none
//                     text-white
//                   "
//                 >
//                   CHERRY
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="
//               absolute
//               bottom-7
//               left-8
//               font-['Bebas_Neue']
//               text-6xl
//               text-white/[0.07]
//             "
//           >
//             03
//           </div>
//         </div>

//         {/* =====================================================
//             04 — VANILLA
//         ===================================================== */}

//         <div
//           className="
//             product-slide
//             absolute inset-0
//             z-40
//             h-screen w-full
//             overflow-hidden
//             bg-[#090807]
//           "
//         >
//           <div
//             className="
//               pointer-events-none
//               absolute
//               -right-[5vw]
//               top-[4vh]
//               font-['Bebas_Neue']
//               text-[25vw]
//               leading-none
//               text-white/[0.025]
//             "
//           >
//             VANILLA
//           </div>

//           <div className="absolute left-8 right-8 top-8 z-20 flex justify-between">
//             <span
//               className="
//                 font-['Bebas_Neue']
//                 text-sm
//                 tracking-[0.3em]
//                 text-white/60
//               "
//             >
//               COCA-COLA / 04
//             </span>

//             <span
//               className="
//                 rounded-full
//                 border border-white/15
//                 px-4 py-2
//                 text-[9px]
//                 tracking-[0.3em]
//                 text-white/50
//               "
//             >
//               VANILLA
//             </span>
//           </div>

//           <div className="relative z-10 flex h-full items-center px-[7vw]">
//             <div className="relative flex h-full w-[48%] items-center justify-center">
//               <div
//                 className="
//                   absolute
//                   h-[30vw]
//                   w-[30vw]
//                   rounded-full
//                   bg-[#d8c7a0]/10
//                   blur-[100px]
//                 "
//               />

//               <div
//                 className="
//                   relative
//                   z-10
//                   h-[65vh]
//                   w-[14vw]
//                   rotate-[-7deg]
//                   rounded-[3vw]
//                   bg-gradient-to-r
//                   from-[#260005]
//                   via-[#b50012]
//                   to-[#4d0005]
//                   shadow-[0_30px_100px_rgba(255,255,255,0.08)]
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     rounded-[3vw]
//                     bg-gradient-to-r
//                     from-white/15
//                     via-transparent
//                     to-black/40
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     text-center
//                     font-['Bebas_Neue']
//                     text-[3vw]
//                     leading-none
//                     text-white
//                   "
//                 >
//                   VANILLA
//                 </div>
//               </div>
//             </div>

//             <div className="w-[52%]">
//               <p
//                 className="
//                   mb-4
//                   text-xs
//                   uppercase
//                   tracking-[0.4em]
//                   text-[#d8c7a0]/70
//                 "
//               >
//                 Smooth & rich
//               </p>

//               <h1
//                 className="
//                   font-['Bebas_Neue']
//                   text-[13vw]
//                   leading-[0.68]
//                   text-white
//                 "
//               >
//                 VANILLA
//               </h1>

//               <p className="mt-8 max-w-md text-sm leading-6 text-white/50">
//                 Classic Coca-Cola taste blended with a smooth vanilla finish.
//               </p>

//               <button
//                 className="
//                   mt-8
//                   flex items-center gap-3
//                   rounded-full
//                   bg-white
//                   px-6 py-3
//                   text-xs
//                   tracking-[0.2em]
//                   text-black
//                   transition
//                   hover:bg-red-600
//                   hover:text-white
//                 "
//               >
//                 DISCOVER
//                 <ArrowUpRight size={15} />
//               </button>
//             </div>
//           </div>

//           <div
//             className="
//               absolute
//               bottom-7
//               right-8
//               font-['Bebas_Neue']
//               text-6xl
//               text-white/[0.07]
//             "
//           >
//             04
//           </div>
//         </div>

//         {/* =====================================================
//             05 — LEMON
//         ===================================================== */}

//         <div
//           className="
//             product-slide
//             absolute inset-0
//             z-50
//             h-screen w-full
//             overflow-hidden
//             bg-[#070807]
//           "
//         >
//           <div
//             className="
//               pointer-events-none
//               absolute
//               left-[-4vw]
//               top-[3vh]
//               font-['Bebas_Neue']
//               text-[27vw]
//               leading-none
//               text-yellow-400/[0.025]
//             "
//           >
//             LEMON
//           </div>

//           <div className="absolute left-8 right-8 top-8 z-20 flex justify-between">
//             <span
//               className="
//                 font-['Bebas_Neue']
//                 text-sm
//                 tracking-[0.3em]
//                 text-white/60
//               "
//             >
//               COCA-COLA / 05
//             </span>

//             <span
//               className="
//                 rounded-full
//                 border border-yellow-400/20
//                 px-4 py-2
//                 text-[9px]
//                 tracking-[0.3em]
//                 text-yellow-400/60
//               "
//             >
//               CITRUS
//             </span>
//           </div>

//           <div className="relative z-10 flex h-full items-center px-[7vw]">
//             <div className="w-[52%]">
//               <p
//                 className="
//                   mb-4
//                   text-xs
//                   uppercase
//                   tracking-[0.4em]
//                   text-yellow-400/70
//                 "
//               >
//                 Fresh & bright
//               </p>

//               <h1
//                 className="
//                   font-['Bebas_Neue']
//                   text-[14vw]
//                   leading-[0.68]
//                   text-white
//                 "
//               >
//                 LEMON
//               </h1>

//               <p className="mt-8 max-w-md text-sm leading-6 text-white/50">
//                 A refreshing citrus twist that brings a bright new energy to the
//                 classic.
//               </p>

//               <div className="mt-8 flex items-center gap-3">
//                 <Sparkles size={16} className="text-yellow-400" />

//                 <span
//                   className="
//                     text-xs
//                     uppercase
//                     tracking-[0.3em]
//                     text-white/40
//                   "
//                 >
//                   Refresh differently
//                 </span>
//               </div>
//             </div>

//             <div className="relative flex h-full w-[48%] items-center justify-center">
//               <div
//                 className="
//                   absolute
//                   h-[34vw]
//                   w-[34vw]
//                   rounded-full
//                   bg-yellow-400/10
//                   blur-[110px]
//                 "
//               />

//               <div
//                 className="
//                   relative
//                   z-10
//                   h-[65vh]
//                   w-[14vw]
//                   rotate-[7deg]
//                   rounded-[3vw]
//                   bg-gradient-to-r
//                   from-[#470005]
//                   via-[#c90015]
//                   to-[#500006]
//                   shadow-[0_30px_100px_rgba(255,200,0,0.12)]
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     rounded-[3vw]
//                     bg-gradient-to-r
//                     from-white/10
//                     via-transparent
//                     to-black/40
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     text-center
//                     font-['Bebas_Neue']
//                     text-[3.3vw]
//                     leading-none
//                     text-white
//                   "
//                 >
//                   LEMON
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="
//               absolute
//               bottom-7
//               left-8
//               font-['Bebas_Neue']
//               text-6xl
//               text-white/[0.07]
//             "
//           >
//             05
//           </div>
//         </div>

//         {/* =====================================================
//             06 — STRAWBERRY
//         ===================================================== */}

//         <div
//           className="
//             product-slide
//             absolute inset-0
//             z-[60]
//             h-screen w-full
//             overflow-hidden
//             bg-[#090406]
//           "
//         >
//           <div
//             className="
//               pointer-events-none
//               absolute
//               -right-[5vw]
//               top-[2vh]
//               font-['Bebas_Neue']
//               text-[24vw]
//               leading-none
//               text-pink-500/[0.035]
//             "
//           >
//             STRAWBERRY
//           </div>

//           <div className="absolute left-8 right-8 top-8 z-20 flex justify-between">
//             <span
//               className="
//                 font-['Bebas_Neue']
//                 text-sm
//                 tracking-[0.3em]
//                 text-white/60
//               "
//             >
//               COCA-COLA / 06
//             </span>

//             <span
//               className="
//                 rounded-full
//                 border border-pink-400/20
//                 px-4 py-2
//                 text-[9px]
//                 tracking-[0.3em]
//                 text-pink-300/60
//               "
//             >
//               FRUITY
//             </span>
//           </div>

//           <div className="relative z-10 flex h-full items-center px-[7vw]">
//             <div className="relative flex h-full w-[48%] items-center justify-center">
//               <div
//                 className="
//                   absolute
//                   h-[35vw]
//                   w-[35vw]
//                   rounded-full
//                   bg-pink-600/15
//                   blur-[110px]
//                 "
//               />

//               <div
//                 className="
//                   relative
//                   z-10
//                   h-[65vh]
//                   w-[14vw]
//                   rotate-[-8deg]
//                   rounded-[3vw]
//                   bg-gradient-to-r
//                   from-[#380006]
//                   via-[#c6002b]
//                   to-[#4a0009]
//                   shadow-[0_30px_100px_rgba(255,0,100,0.3)]
//                 "
//               >
//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     rounded-[3vw]
//                     bg-gradient-to-r
//                     from-white/10
//                     via-transparent
//                     to-black/40
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     text-center
//                     font-['Bebas_Neue']
//                     text-[2.8vw]
//                     leading-none
//                     text-white
//                   "
//                 >
//                   STRAW
//                   <br />
//                   BERRY
//                 </div>
//               </div>
//             </div>

//             <div className="w-[52%]">
//               <p
//                 className="
//                   mb-4
//                   text-xs
//                   uppercase
//                   tracking-[0.4em]
//                   text-pink-400/70
//                 "
//               >
//                 Sweet & fruity
//               </p>

//               <h1
//                 className="
//                   font-['Bebas_Neue']
//                   text-[12vw]
//                   leading-[0.68]
//                   text-white
//                 "
//               >
//                 STRAWBERRY
//               </h1>

//               <p className="mt-8 max-w-md text-sm leading-6 text-white/50">
//                 A playful strawberry twist paired with the refreshing Coca-Cola
//                 experience.
//               </p>

//               <button
//                 className="
//                   mt-8
//                   flex items-center gap-3
//                   rounded-full
//                   bg-pink-600
//                   px-6 py-3
//                   text-xs
//                   tracking-[0.2em]
//                   text-white
//                   transition
//                   hover:bg-white
//                   hover:text-black
//                 "
//               >
//                 TRY THE TWIST
//                 <ArrowUpRight size={15} />
//               </button>
//             </div>
//           </div>

//           <div
//             className="
//               absolute
//               bottom-7
//               right-8
//               font-['Bebas_Neue']
//               text-6xl
//               text-white/[0.07]
//             "
//           >
//             06
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Product;


import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

import { Canvas } from "@react-three/fiber";
import Coke3DCan from "../ThreeD/Coke3DCan";
import Hero from "../Components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    const section = sectionRef.current;
    const slides = gsap.utils.toArray(".product-slide");

    if (!section || slides.length < 2) return;

    // ----------------------------------------------------
    // INITIAL POSITION
    // Slide 1 stays in the viewport
    // Remaining slides alternate:
    // Slide 2 -> LEFT
    // Slide 3 -> RIGHT
    // Slide 4 -> LEFT
    // Slide 5 -> RIGHT
    // Slide 6 -> LEFT
    // ----------------------------------------------------

    gsap.set(slides[0], {
      xPercent: 0,
    });

    slides.slice(1).forEach((slide, index) => {
      const fromLeft = index % 2 === 0;

      gsap.set(slide, {
        xPercent: fromLeft ? -100 : 100,
      });
    });

    // ----------------------------------------------------
    // SCROLL TIMELINE
    // ----------------------------------------------------

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${(slides.length - 1) * 100}vh`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ----------------------------------------------------
    // EACH SLIDE ENTERS FROM ALTERNATING SIDES
    // ----------------------------------------------------

    slides.slice(1).forEach((slide) => {
      tl.to(slide, {
        xPercent: 0,
        duration: 1,
        ease: "none",
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080808]"
    >
      <div className="relative h-screen w-full overflow-hidden">

        {/* =====================================================
            ORIGINAL
        ===================================================== */}

        <div className="product-slide absolute inset-0 z-10 bg-[#080808]">

          {/* Header */}
        


          {/* Main Content */}
          <div className="absolute left-[9vw] top-1/2 z-20 -translate-y-1/2">

            <Hero />

          </div>


          {/* Can */}
         


          {/* Bottom */}
         

        </div>


        {/* =====================================================
            ZERO SUGAR
        ===================================================== */}

        <div className="product-slide absolute inset-0 z-20 bg-[#111111]">

          <header className="absolute left-8 right-8 top-8 z-30 flex justify-between">

            <p className="text-[10px] tracking-[0.35em] text-white/45">
              COCA-COLA
            </p>

            <p className="text-[10px] tracking-[0.25em] text-white/30">
              02 / 06
            </p>

          </header>


          {/* Can */}
          <div className="absolute left-[18vw] top-1/2 z-10 h-[64vh] w-[15vw] -translate-y-1/2 rotate-[-4deg] rounded-[2.5vw] bg-gradient-to-r from-[#050505] via-[#202020] to-[#050505] shadow-2xl">

            <div className="absolute inset-0 rounded-[2.5vw] bg-gradient-to-r from-white/[0.08] via-transparent to-black/50" />

            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">

              <p className="font-['Bebas_Neue'] text-[2.8vw] text-white">
                COCA
              </p>

              <p className="font-['Bebas_Neue'] text-[2.8vw] text-red-600">
                COLA
              </p>

              <div className="mx-auto mt-5 h-px w-10 bg-white/20" />

              <p className="mt-3 text-[7px] tracking-[0.25em] text-white/40">
                ZERO SUGAR
              </p>

            </div>

          </div>


          {/* Content */}
          <div className="absolute right-[12vw] top-1/2 z-20 -translate-y-1/2">

            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-red-500">
              Zero Sugar
            </p>

            <h2 className="font-['Bebas_Neue'] text-[9vw] leading-[0.8] tracking-[-0.03em] text-white">
              ZERO
            </h2>

            <p className="mt-7 max-w-[260px] text-[12px] leading-5 text-white/40">
              The Coca-Cola taste you know.
              <br />
              Without the sugar.
            </p>

          </div>

        </div>


        {/* =====================================================
            CHERRY
        ===================================================== */}

        <div className="product-slide absolute inset-0 z-30 bg-[#26070c]">

          <header className="absolute left-8 right-8 top-8 z-30 flex justify-between">

            <p className="text-[10px] tracking-[0.35em] text-white/45">
              COCA-COLA
            </p>

            <p className="text-[10px] tracking-[0.25em] text-white/30">
              03 / 06
            </p>

          </header>


          {/* Can */}
          <div className="absolute right-[18vw] top-1/2 z-10 h-[64vh] w-[15vw] -translate-y-1/2 rotate-[5deg] rounded-[2.5vw] bg-gradient-to-r from-[#45000c] via-[#c90031] to-[#57000d] shadow-2xl">

            <div className="absolute inset-0 rounded-[2.5vw] bg-gradient-to-r from-white/[0.08] via-transparent to-black/40" />

            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">

              <p className="font-['Bebas_Neue'] text-[2.7vw] text-white">
                COCA
              </p>

              <p className="font-['Bebas_Neue'] text-[2.7vw] text-white">
                COLA
              </p>

              <div className="mx-auto mt-5 h-px w-10 bg-white/25" />

              <p className="mt-3 font-['Bebas_Neue'] text-[1.5vw] tracking-wide text-white">
                CHERRY
              </p>

            </div>

          </div>


          {/* Content */}
          <div className="absolute left-[10vw] top-1/2 z-20 -translate-y-1/2">

            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-red-300/70">
              Flavoured
            </p>

            <h2 className="font-['Bebas_Neue'] text-[9vw] leading-[0.8] tracking-[-0.03em] text-white">
              CHERRY
            </h2>

            <p className="mt-7 max-w-[280px] text-[12px] leading-5 text-white/40">
              A little more fruit.
              <br />
              A familiar Coca-Cola feeling.
            </p>

          </div>

        </div>


        {/* =====================================================
            VANILLA
        ===================================================== */}

        <div className="product-slide absolute inset-0 z-40 bg-[#bca98e]">

          <header className="absolute left-8 right-8 top-8 z-30 flex justify-between">

            <p className="text-[10px] tracking-[0.35em] text-black/50">
              COCA-COLA
            </p>

            <p className="text-[10px] tracking-[0.25em] text-black/30">
              04 / 06
            </p>

          </header>


          {/* Can */}
          <div className="absolute left-[18vw] top-1/2 z-10 h-[64vh] w-[15vw] -translate-y-1/2 rotate-[-5deg] rounded-[2.5vw] bg-gradient-to-r from-[#500006] via-[#c20a1c] to-[#570007] shadow-[20px_30px_60px_rgba(0,0,0,0.25)]">

            <div className="absolute inset-0 rounded-[2.5vw] bg-gradient-to-r from-white/10 via-transparent to-black/40" />

            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">

              <p className="font-['Bebas_Neue'] text-[2.7vw] text-white">
                COCA
              </p>

              <p className="font-['Bebas_Neue'] text-[2.5vw] text-[#ead6ad]">
                VANILLA
              </p>

            </div>

          </div>


          {/* Content */}
          <div className="absolute right-[11vw] top-1/2 z-20 -translate-y-1/2">

            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-black/50">
              Smooth &amp; Rich
            </p>

            <h2 className="font-['Bebas_Neue'] text-[9vw] leading-[0.8] tracking-[-0.03em] text-[#17120f]">
              VANILLA
            </h2>

            <p className="mt-7 max-w-[280px] text-[12px] leading-5 text-black/45">
              A smooth vanilla finish layered
              into the classic Coca-Cola taste.
            </p>

          </div>

        </div>


        {/* =====================================================
            COCA-COLA LIGHT
        ===================================================== */}

        <div className="product-slide absolute inset-0 z-[60] bg-[#eeeeea]">

          <header className="absolute left-8 right-8 top-8 z-30 flex justify-between">

            <p className="text-[10px] tracking-[0.35em] text-black/50">
              COCA-COLA
            </p>

            <p className="text-[10px] tracking-[0.25em] text-black/30">
              06 / 06
            </p>

          </header>


          {/* Fine line */}
          <div className="absolute left-[50%] top-[12%] h-[76%] w-px bg-black/10" />


          {/* Silver Can */}
          <div className="absolute left-[26vw] top-1/2 z-10 h-[64vh] w-[15vw] -translate-y-1/2 rotate-[-3deg] overflow-hidden rounded-[2.5vw] border border-black/10 bg-gradient-to-r from-[#999996] via-[#f8f8f5] to-[#a4a4a1] shadow-[20px_30px_70px_rgba(0,0,0,0.18)]">

            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-white/50 to-black/10" />

            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">

              <p className="font-['Bebas_Neue'] text-[2.7vw] text-red-700">
                COCA
              </p>

              <p className="font-['Bebas_Neue'] text-[2.7vw] text-black">
                COLA
              </p>

              <div className="mx-auto my-5 h-px w-10 bg-black/20" />

              <p className="font-['Bebas_Neue'] text-[1.7vw] tracking-[0.08em] text-black/55">
                LIGHT
              </p>

            </div>

          </div>


          {/* Content */}
          <div className="absolute right-[11vw] top-1/2 z-20 -translate-y-1/2">

            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-red-600/70">
              Coca-Cola Light
            </p>

            <h2 className="font-['Bebas_Neue'] text-[9vw] leading-[0.8] tracking-[-0.03em] text-black">
              LIGHT
            </h2>

            <p className="mt-7 max-w-[280px] text-[12px] leading-5 text-black/45">
              A lighter way to enjoy the familiar
              Coca-Cola experience.
            </p>

            <button className="group mt-8 flex items-center gap-3 border-b border-black/25 pb-2 text-[9px] uppercase tracking-[0.3em] text-black">

              EXPLORE

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </button>

          </div>


          {/* Bottom */}
          <p className="absolute bottom-8 left-8 text-[9px] tracking-[0.3em] text-black/25">
            LIGHT • CRISP • REFRESHING
          </p>

        </div>

      </div>
    </section>
  );
};

export default Product;

