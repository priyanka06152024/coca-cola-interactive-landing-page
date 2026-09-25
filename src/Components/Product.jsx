import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

import { Canvas } from "@react-three/fiber";
import Coke3DCan from "../ThreeD/Coke3DCan";
import Hero from "../Components/Hero.jsx";
import LightCoke from "../ThreeD/lightCoke";
import cherry from "../assets/cherry.png";
import lemon from "../assets/lemon.png";
import vanilla from "../assets/vanilla.png";
import zero from "../assets/zero.png";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    const section = sectionRef.current;
    const slides = gsap.utils.toArray(".product-slide");

    if (!section || slides.length < 2) return;

    // ----------------------------------------------------
    // INITIAL POSITION
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
    <section ref={sectionRef} className="relative w-full bg-[#F7F5F0]">
      <div className="relative h-screen w-full overflow-hidden">
        {/* =====================================================
            01 — ORIGINAL
        ===================================================== */}

        <div
          className="
            product-slide
            absolute
            inset-0
            z-10
            h-screen
            w-full
            overflow-hidden
            bg-[#F7F5F0]
          "
        >
          {/* HERO — FULL SCREEN */}

          <div
            className="
              absolute
              inset-0
              h-screen
              w-full
            "
          >
            <Hero />
          </div>
        </div>

        {/* =====================================================
            02 — ZERO SUGAR
        ===================================================== */}

        <div
          className="
            product-slide
            absolute
            inset-0
            z-20
            bg-[#EEEDE8]
          "
        >
          {/* Header */}

          <header className="absolute left-8 right-8 top-8 z-30 flex justify-between">
            <p className="text-[10px] tracking-[0.35em] text-black/50">
              COCA-COLA
            </p>

            <p className="text-[10px] tracking-[0.25em] text-black/30">
              02 / 06
            </p>
          </header>
          <div className="absolute left-[50%] top-[12%] h-[76%] w-px bg-black/10" />

          {/* Can */}

          {/* Cherry Can Image */}

          <div
            className="
    absolute
    left-[11vw]
    top-1/2
    z-10
    h-[72vh]
    w-[28vw]
    -translate-y-1/2
    flex
    items-center
    justify-center
  "
          >
            <img
              src={zero}
              alt="Coca-Cola Zero"
              className="
      h-full
      w-auto
      object-contain
      drop-shadow-[20px_30px_50px_rgba(80,0,20,0.25)]
    "
            />
          </div>
          {/* Content */}

          <div className="absolute right-[12vw] top-1/2 z-20 -translate-y-1/2">
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-red-600">
              Zero Sugar
            </p>

            <h2
              className="
                font-['Bebas_Neue']
                text-[9vw]
                leading-[0.8]
                tracking-[-0.03em]
                text-[#111111]
              "
            >
              ZERO
            </h2>

            <p className="mt-7 max-w-[260px] text-[12px] leading-5 text-black/45">
              The Coca-Cola taste you know.
              <br />
              Without the sugar.
            </p>
          </div>

          {/* Background Word */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-4vw]
              top-[12vh]
              font-['Bebas_Neue']
              text-[24vw]
              leading-none
              text-black/[0.025]
            "
          >
            ZERO
          </div>
        </div>

        {/* =====================================================
            03 — CHERRY
        ===================================================== */}

        <div
          className="
            product-slide
            absolute
            inset-0
            z-30
            bg-[#F3E5E5]
          "
        >
          {/* Header */}

          <header className="absolute left-8 right-8 top-8 z-30 flex justify-between">
            <p className="text-[10px] tracking-[0.35em] text-black/50">
              COCA-COLA
            </p>

            <p className="text-[10px] tracking-[0.25em] text-black/30">
              03 / 06
            </p>
          </header>
          <div className="absolute left-[50%] top-[12%] h-[76%] w-px bg-black/10" />

          {/* Can */}

          {/* Cherry Can Image */}

          <div
            className="
    absolute
    right-[13vw]
    top-1/2
    z-10
    h-[72vh]
    w-[28vw]
    -translate-y-1/2
    flex
    items-center
    justify-center
  "
          >
            <img
              src={cherry}
              alt="Coca-Cola Cherry"
              className="
      h-full
      w-auto
      object-contain
      drop-shadow-[20px_30px_50px_rgba(80,0,20,0.25)]
    "
            />
          </div>
          {/* Content */}

          <div className="absolute left-[10vw] top-1/2 z-20 -translate-y-1/2">
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-red-700/70">
              Flavoured
            </p>

            <h2
              className="
                font-['Bebas_Neue']
                text-[9vw]
                leading-[0.8]
                tracking-[-0.03em]
                text-[#21090d]
              "
            >
              CHERRY
            </h2>

            <p className="mt-7 max-w-[280px] text-[12px] leading-5 text-black/45">
              A little more fruit.
              <br />A familiar Coca-Cola feeling.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-700" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Cherry edition
              </span>
            </div>
          </div>

          {/* Background Word */}

          <div
            className="
              pointer-events-none
              absolute
              left-[-3vw]
              top-[12vh]
              font-['Bebas_Neue']
              text-[24vw]
              leading-none
              text-red-900/[0.035]
            "
          >
            CHERRY
          </div>
        </div>

        {/* =====================================================
            04 — VANILLA
        ===================================================== */}

        <div
          className="
            product-slide
            absolute
            inset-0
            z-40
            bg-[#EDE7DD]
          "
        >
          {/* Header */}

          <header className="absolute left-8 right-8 top-8 z-30 flex justify-between">
            <p className="text-[10px] tracking-[0.35em] text-black/50">
              COCA-COLA
            </p>

            <p className="text-[10px] tracking-[0.25em] text-black/30">
              04 / 06
            </p>
          </header>
          <div className="absolute left-[50%] top-[12%] h-[76%] w-px bg-black/10" />

          {/* Can */}

          {/* Cherry Can Image */}

          <div
            className="
    absolute
    left-[11vw]
    top-1/2
    z-10
    h-[72vh]
    w-[28vw]
    -translate-y-1/2
    flex
    items-center
    justify-center
  "
          >
            <img
              src={vanilla}
              alt="Coca-Cola Vanilla"
              className="
      h-full
      w-auto
      object-contain
      drop-shadow-[20px_30px_50px_rgba(80,0,20,0.25)]
    "
            />
          </div>
          {/* Content */}

          <div className="absolute right-[11vw] top-1/2 z-20 -translate-y-1/2">
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-black/50">
              Smooth &amp; Rich
            </p>

            <h2
              className="
                font-['Bebas_Neue']
                text-[9vw]
                leading-[0.8]
                tracking-[-0.03em]
                text-[#17120f]
              "
            >
              VANILLA
            </h2>

            <p className="mt-7 max-w-[280px] text-[12px] leading-5 text-black/45">
              A smooth vanilla finish layered into the classic Coca-Cola taste.
            </p>

            <button
              className="
                mt-8
                flex
                items-center
                gap-3
                rounded-full
                bg-[#17120f]
                px-6
                py-3
                text-xs
                tracking-[0.2em]
                text-white
                transition
                hover:bg-red-700
              "
            >
              DISCOVER
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Background Word */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-4vw]
              top-[12vh]
              font-['Bebas_Neue']
              text-[24vw]
              leading-none
              text-[#7c6548]/[0.045]
            "
          >
            VANILLA
          </div>
        </div>

        {/* =====================================================
            05 — LEMON
        ===================================================== */}

        <div
          className="
            product-slide
            absolute
            inset-0
            z-50
            bg-[#F1F0E4]
          "
        >
          {/* Header */}

          <header className="absolute left-8 right-8 top-8 z-30 flex justify-between">
            <p className="text-[10px] tracking-[0.35em] text-black/50">
              COCA-COLA
            </p>

            <p className="text-[10px] tracking-[0.25em] text-black/30">
              05 / 06
            </p>
          </header>

          <div className="absolute left-[50%] top-[12%] h-[76%] w-px bg-black/10" />

          {/* Can */}

          {/* Cherry Can Image */}

          <div
            className="
    absolute
    right-[13vw]
    top-1/2
    z-10
    h-[72vh]
    w-[28vw]
    -translate-y-1/2
    flex
    items-center
    justify-center
  "
          >
            <img
              src={lemon}
              alt="Coca-Cola Cherry"
              className="
      h-full
      w-auto
      object-contain
      drop-shadow-[20px_30px_50px_rgba(80,0,20,0.25)]
    "
            />
          </div>

          {/* Content */}

          <div className="absolute left-[10vw] top-1/2 z-20 -translate-y-1/2">
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-yellow-700/70">
              Fresh &amp; Bright
            </p>

            <h2
              className="
                font-['Bebas_Neue']
                text-[9vw]
                leading-[0.8]
                tracking-[-0.03em]
                text-[#17180e]
              "
            >
              LEMON
            </h2>

            <p className="mt-7 max-w-[280px] text-[12px] leading-5 text-black/45">
              A refreshing citrus twist that brings a bright new energy to the
              classic.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-black/35">
                Refresh differently
              </span>
            </div>
          </div>

          {/* Background Word */}

          <div
            className="
              pointer-events-none
              absolute
              left-[-3vw]
              top-[12vh]
              font-['Bebas_Neue']
              text-[25vw]
              leading-none
              text-yellow-700/[0.035]
            "
          >
            LEMON
          </div>
        </div>

        {/* =====================================================
            06 — LIGHT
        ===================================================== */}

        <div
          className="
    product-slide
    absolute
    inset-0
    z-[60]
    bg-[#EAEAE5]
  "
        >
          {/* Header */}

          <header className="absolute left-8 right-8 top-8 z-30 flex justify-between">
            <p className="text-[10px] tracking-[0.35em] text-black/50">
              COCA-COLA
            </p>

            <p className="text-[10px] tracking-[0.25em] text-black/30">
              06 / 06
            </p>
          </header>

          {/* Fine Line */}

          <div className="absolute left-[50%] top-[12%] h-[76%] w-px bg-black/10" />

          {/* =====================================================
      LEFT — CONTENT
  ===================================================== */}

          <div className="absolute left-[10vw] top-1/2 z-20 -translate-y-1/2">
            <p
              className="
        mb-5
        text-[10px]
        uppercase
        tracking-[0.35em]
        text-red-600/70
      "
            >
              Coca-Cola Light
            </p>

            <h2
              className="
        font-['Bebas_Neue']
        text-[9vw]
        leading-[0.8]
        tracking-[-0.03em]
        text-black
      "
            >
              LIGHT
            </h2>

            <p
              className="
        mt-7
        max-w-[280px]
        text-[12px]
        leading-5
        text-black/45
      "
            >
              A lighter way to enjoy the familiar Coca-Cola experience.
            </p>

            <button
              className="
        group
        mt-8
        flex
        items-center
        gap-3
        border-b
        border-black/25
        pb-2
        text-[9px]
        uppercase
        tracking-[0.3em]
        text-black
      "
            >
              EXPLORE
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="
          transition-transform
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
              />
            </button>
          </div>

          {/* =====================================================
      RIGHT — LIGHT COKE 3D MODEL
  ===================================================== */}

          <div
            className="
      absolute
      right-[7vw]
      top-1/2
      z-10
      h-[78vh]
      w-[38vw]
      -translate-y-1/2
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
              {/* Main Light */}

              <ambientLight intensity={0.7} />

              <directionalLight position={[4, 6, 5]} intensity={2.8} />

              {/* Left Fill */}

              <directionalLight position={[-4, 2, 4]} intensity={1.5} />

              {/* Front Light */}

              <pointLight position={[0, 2, 5]} intensity={1} />

              {/* Light Coke GLB */}

              <LightCoke />
            </Canvas>
          </div>

          {/* =====================================================
      BOTTOM
  ===================================================== */}

          <p
            className="
      absolute
      bottom-8
      left-8
      text-[9px]
      tracking-[0.3em]
      text-black/25
    "
          >
            LIGHT • CRISP • REFRESHING
          </p>

          {/* =====================================================
      BACKGROUND WORD
  ===================================================== */}

          <div
            className="
      pointer-events-none
      absolute
      right-[-3vw]
      top-[12vh]
      font-['Bebas_Neue']
      text-[25vw]
      leading-none
      text-black/[0.025]
    "
          >
            LIGHT
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
