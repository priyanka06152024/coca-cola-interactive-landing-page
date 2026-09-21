import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // =====================================================
    // 1. SECTION 2 : BOTTOM → TOP
    // =====================================================

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

          // Jab slider video ke bottom se enter kare
          start: "top bottom",

          // Jab slider completely viewport ko cover kare
          end: "top top",

          scrub: 1.2,

          invalidateOnRefresh: true,
        },
      }
    );

    // =====================================================
    // 2. SECTION 2 → 3 → 4 → 5 → 6
    // =====================================================

    gsap.to(track, {
      xPercent: -60,
      ease: "none",

      scrollTrigger: {
        trigger: section,

        // Section 2 completely video ko cover kar chuka hai
        start: "top top",

        // 5 panels ke liye enough scroll
        end: () => `+=${window.innerWidth * 4}`,

        scrub: 1.5,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    // Refresh ke baad positions properly calculate
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
    >

      {/* =====================================================
          HORIZONTAL TRACK
      ===================================================== */}

      <div
        ref={trackRef}
        className="
          flex
          h-screen
          w-[500vw]
          bg-black
          text-white
        "
      >

        {/* =====================================================
            SECTION 2
        ===================================================== */}

        <div
          className="
            flex
            h-screen
            w-screen
            shrink-0
            items-center
            justify-center
            bg-black
          "
        >
          <h1
            className="
              font-['Bebas_Neue']
              text-[12vw]
              leading-none
              text-white
            "
          >
            Drink
          </h1>
        </div>

        {/* =====================================================
            SECTION 3
        ===================================================== */}

        <div
          className="
            flex
            h-screen
            w-screen
            shrink-0
            items-center
            justify-center
            bg-black
          "
        >
          <h1
            className="
              font-['Bebas_Neue']
              text-[12vw]
              leading-none
              text-white
            "
          >
            Scan
          </h1>
        </div>

        {/* =====================================================
            SECTION 4
        ===================================================== */}

        <div
          className="
            flex
            h-screen
            w-screen
            shrink-0
            items-center
            justify-center
            bg-black
          "
        >
          <h1
            className="
              font-['Bebas_Neue']
              text-[12vw]
              leading-none
              text-white
            "
          >
            Win Exclusive
          </h1>
        </div>

        {/* =====================================================
            SECTION 5
        ===================================================== */}

        <div
          className="
            flex
            h-screen
            w-screen
            shrink-0
            items-center
            justify-center
            bg-black
          "
        >
          <h1
            className="
              font-['Bebas_Neue']
              text-[12vw]
              leading-none
              text-white
            "
          >
            Gift
          </h1>
        </div>


       

      </div>
    </section>
  );
};

export default Slider;