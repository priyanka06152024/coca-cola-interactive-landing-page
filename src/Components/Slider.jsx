
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "../assets/slider-bg.avif";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // ==========================================
    // 1. BOTTOM → TOP
    // ==========================================

    gsap.fromTo(
      track,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      }
    );

    // ==========================================
    // 2. HORIZONTAL SCROLL
    // ==========================================

    gsap.to(track, {
      xPercent: -60,
      ease: "none",

      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerWidth * 4}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        z-30
        -mt-[100vh]
        h-screen
        w-full
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* subtle dark overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/15" />

      <div
        ref={trackRef}
        className="
          relative
          z-10
          flex
          h-screen
          w-[500vw]
          text-white
        "
      >

        {/* =====================================================
            SLIDE 1 — ORIGINAL
        ===================================================== */}

        <div
          className="
            relative
            flex
            h-screen
            w-screen
            shrink-0
            items-center
            justify-center
            overflow-hidden
          "
        >
          {/* small top text */}

          <div className="absolute left-[6vw] top-[7vh] flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

            <span className="font-['Bebas_Neue'] text-[11px] tracking-[0.45em] text-white/70">
              COCA-COLA / ORIGINAL
            </span>
          </div>

          {/* main content */}

          <div className="relative z-10 text-center">

            <p className="mb-5 font-['Bebas_Neue'] text-[11px] tracking-[0.55em] text-white/60">
              THE ORIGINAL
            </p>

            <h1
              className="
                font-['Bebas_Neue']
                text-[15vw]
                leading-[0.72]
                tracking-[-0.045em]
                text-white
              "
            >
              DRINK
            </h1>

            <div className="mx-auto mt-7 h-[2px] w-16 bg-red-500" />

            <p className="mx-auto mt-6 max-w-[360px] text-[13px] leading-6 tracking-wide text-white/65">
              The unmistakable taste that brings people together.
            </p>

          </div>

          {/* subtle background typography */}

         

          {/* slide number */}

          <span
            className="
              absolute
              bottom-[6vh]
              right-[6vw]
              font-['Bebas_Neue']
              text-[11px]
              tracking-[0.35em]
              text-white/40
            "
          >
            01
          </span>
        </div>


        {/* =====================================================
            SLIDE 2 — SCAN
        ===================================================== */}

        <div
          className="
            relative
            flex
            h-screen
            w-screen
            shrink-0
            items-center
            justify-center
            overflow-hidden
          "
        >
          <div className="absolute left-[6vw] top-[7vh] flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

            <span className="font-['Bebas_Neue'] text-[11px] tracking-[0.45em] text-white/70">
              DISCOVER SOMETHING MORE
            </span>
          </div>

          <div className="relative z-10 text-center">

            <p className="mb-5 font-['Bebas_Neue'] text-[11px] tracking-[0.55em] text-white/60">
              UNLOCK THE MOMENT
            </p>

            <h1
              className="
                font-['Bebas_Neue']
                text-[15vw]
                leading-[0.72]
                tracking-[-0.045em]
                text-white
              "
            >
              SCAN
            </h1>

            <div className="mx-auto mt-7 h-[2px] w-16 bg-red-500" />

            <p className="mx-auto mt-6 max-w-[320px] text-[13px] leading-6 tracking-wide text-white/65">
              Scan. Discover. Experience something new.
            </p>

            {/* minimal scan icon */}

            <div className="mx-auto mt-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/30">
              <div className="h-4 w-4 rounded-full border border-red-500" />
            </div>

          </div>

        

          <span
            className="
              absolute
              bottom-[6vh]
              right-[6vw]
              font-['Bebas_Neue']
              text-[11px]
              tracking-[0.35em]
              text-white/40
            "
          >
            02
          </span>
        </div>


        {/* =====================================================
            SLIDE 3 — WIN EXCLUSIVE
        ===================================================== */}

        <div
          className="
            relative
            flex
            h-screen
            w-screen
            shrink-0
            items-center
            justify-center
            overflow-hidden
          "
        >
          <div className="absolute left-[6vw] top-[7vh] flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

            <span className="font-['Bebas_Neue'] text-[11px] tracking-[0.45em] text-white/70">
              COCA-COLA REWARDS
            </span>
          </div>

          <div className="relative z-10 text-center">

            <p className="mb-5 font-['Bebas_Neue'] text-[11px] tracking-[0.55em] text-white/60">
              YOUR MOMENT
            </p>

            <h1
              className="
                font-['Bebas_Neue']
                text-[12vw]
                leading-[0.72]
                tracking-[-0.045em]
                text-white
              "
            >
              WIN
            </h1>

            <h2
              className="
                mt-2
                font-['Bebas_Neue']
                text-[7vw]
                leading-none
                tracking-[-0.035em]
                text-white/90
              "
            >
              EXCLUSIVE
            </h2>

            <div className="mx-auto mt-7 h-[2px] w-16 bg-red-500" />

            <p className="mt-6 font-['Bebas_Neue'] text-[11px] tracking-[0.45em] text-white/45">
              KEEP EXPLORING
            </p>

          </div>

        

          <span
            className="
              absolute
              bottom-[6vh]
              right-[6vw]
              font-['Bebas_Neue']
              text-[11px]
              tracking-[0.35em]
              text-white/40
            "
          >
            03
          </span>
        </div>


        {/* =====================================================
            SLIDE 4 — GIFT
        ===================================================== */}

        <div
          className="
            relative
            flex
            h-screen
            w-screen
            shrink-0
            items-center
            justify-center
            overflow-hidden
          "
        >
          <div className="absolute left-[6vw] top-[7vh] flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

            <span className="font-['Bebas_Neue'] text-[11px] tracking-[0.45em] text-white/70">
              SHARE THE FEELING
            </span>
          </div>

          <div className="relative z-10 text-center">

            <p className="mb-5 font-['Bebas_Neue'] text-[11px] tracking-[0.55em] text-white/60">
              MAKE SOMEONE SMILE
            </p>

            <h1
              className="
                font-['Bebas_Neue']
                text-[15vw]
                leading-[0.72]
                tracking-[-0.045em]
                text-white
              "
            >
              GIFT
            </h1>

            <div className="mx-auto mt-7 h-[2px] w-16 bg-red-500" />

            <p className="mx-auto mt-6 max-w-[350px] text-[13px] leading-6 tracking-wide text-white/65">
              Share the feeling. Share the moment. Make someone smile.
            </p>

            <button
              className="
                mt-8
                rounded-full
                border
                border-white/30
                px-7
                py-3
                font-['Bebas_Neue']
                text-xs
                tracking-[0.35em]
                text-white
                transition-all
                duration-300
                hover:border-red-500
                hover:bg-red-600
              "
            >
              EXPLORE
            </button>

          </div>

         

          <span
            className="
              absolute
              bottom-[6vh]
              right-[6vw]
              font-['Bebas_Neue']
              text-[11px]
              tracking-[0.35em]
              text-white/40
            "
          >
            04
          </span>
        </div>

      </div>
    </section>
  );
};

export default Slider;
