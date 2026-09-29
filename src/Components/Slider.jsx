
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const sectionRef = useRef(null);
  const verticalRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const vertical = verticalRef.current;
      const track = trackRef.current;

      if (!section || !vertical || !track) return;

      // ==========================================
      // INITIAL STATE
      // ==========================================

      gsap.set(vertical, {
        yPercent: 100,
        force3D: true,
      });

      gsap.set(track, {
        x: 0,
        force3D: true,
      });

      // ==========================================
      // 1. BOTTOM → TOP ENTRY
      // ==========================================

      gsap.to(vertical, {
        yPercent: 0,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });

      // ==========================================
      // 2. HORIZONTAL SLIDER
      // ==========================================

      gsap.to(track, {
        x: () => {
          const distance =
            track.scrollWidth - window.innerWidth;

          return -Math.max(0, distance);
        },

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () => {
            const distance =
              track.scrollWidth - window.innerWidth;

            return `+=${Math.max(0, distance)}`;
          },

          /*
            0.5 gives smooth interpolation
            without making the scroll feel delayed.
          */
          scrub: 0.5,

          pin: true,

          /*
            Small value avoids the pin feeling
            like it is jumping into position.
          */
          anticipatePin: 0.5,

          pinSpacing: true,

          invalidateOnRefresh: true,
        },
      });

      // ==========================================
      // INITIAL REFRESH
      // ==========================================

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    },

    {
      scope: sectionRef,

      /*
        Prevents GSAP from creating
        duplicate animations in React.
      */
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        z-30
        h-screen
        w-full
        overflow-hidden
        bg-[#EAEAE5]
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            whitespace-nowrap
            font-['Bebas_Neue']
            text-[25vw]
            leading-none
            tracking-[-0.06em]
            text-black/[0.035]
          "
        >
          COCA
        </div>

        <div
          className="
            absolute
            left-[6vw]
            right-[6vw]
            top-8
            h-px
            bg-black/10
          "
        />

        <div
          className="
            absolute
            bottom-8
            left-[6vw]
            right-[6vw]
            h-px
            bg-black/10
          "
        />
      </div>

      {/* ==================================================
          VERTICAL ENTRY
      ================================================== */}

      <div
        ref={verticalRef}
        className="
          relative
          h-full
          w-full
          will-change-transform
        "
      >
        {/* ==================================================
            HORIZONTAL TRACK
        ================================================== */}

        <div
          ref={trackRef}
          className="
            relative
            z-10
            flex
            h-screen
            w-max
            text-black
            will-change-transform
          "
        >
          {/* ==================================================
              SLIDE 1
          ================================================== */}

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
           

            <div
              className="
                absolute
                bottom-[9vh]
                left-[6vw]
                hidden
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-black/40
                md:block
              "
            >
              CLASSIC / ORIGINAL
            </div>

            <div className="relative z-10 text-center">
              <p
                className="
                  mb-5
                  font-['Bebas_Neue']
                  text-[11px]
                  tracking-[0.55em]
                  text-black/45
                "
              >
                THE ORIGINAL
              </p>

              <h1
                className="
                  font-['Bebas_Neue']
                  text-[17vw]
                  leading-[0.68]
                  tracking-[-0.055em]
                  text-black
                "
              >
                DRINK
              </h1>

              <div
                className="
                  mx-auto
                  mt-8
                  h-[3px]
                  w-16
                  bg-[#D90000]
                "
              />

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[360px]
                  text-[13px]
                  leading-6
                  tracking-wide
                  text-black/50
                "
              >
                The unmistakable taste that brings people together.
              </p>
            </div>

            <div
              className="
                absolute
                right-[6vw]
                top-[7vh]
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-black/15
              "
            >
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* ==================================================
              SLIDE 2
          ================================================== */}

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
            <div className="relative z-10 text-center">
              <p
                className="
                  mb-5
                  font-['Bebas_Neue']
                  text-[11px]
                  tracking-[0.55em]
                  text-black/45
                "
              >
                UNLOCK THE MOMENT
              </p>

              <h1
                className="
                  font-['Bebas_Neue']
                  text-[17vw]
                  leading-[0.68]
                  tracking-[-0.055em]
                  text-black
                "
              >
                SCAN
              </h1>

              <div
                className="
                  mx-auto
                  mt-8
                  h-[3px]
                  w-16
                  bg-[#D90000]
                "
              />

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[320px]
                  text-[13px]
                  leading-6
                  tracking-wide
                  text-black/50
                "
              >
                Scan. Discover. Experience something new.
              </p>

              <div
                className="
                  mx-auto
                  mt-8
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/20
                "
              >
                <div
                  className="
                    h-4
                    w-4
                    rounded-full
                    border
                    border-[#D90000]
                  "
                />
              </div>
            </div>
          </div>

          {/* ==================================================
              SLIDE 3
          ================================================== */}

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
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[38vw]
                w-[38vw]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-black/[0.06]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[27vw]
                w-[27vw]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-black/[0.05]
              "
            />

            <div className="relative z-10 text-center">
              <p
                className="
                  mb-5
                  font-['Bebas_Neue']
                  text-[11px]
                  tracking-[0.55em]
                  text-black/45
                "
              >
                YOUR MOMENT
              </p>

              <h1
                className="
                  font-['Bebas_Neue']
                  text-[15vw]
                  leading-[0.68]
                  tracking-[-0.055em]
                  text-black
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
                  text-black/75
                "
              >
                EXCLUSIVE
              </h2>

              <div
                className="
                  mx-auto
                  mt-8
                  h-[3px]
                  w-16
                  bg-[#D90000]
                "
              />

              <p
                className="
                  mt-6
                  font-['Bebas_Neue']
                  text-[11px]
                  tracking-[0.45em]
                  text-black/35
                "
              >
                KEEP EXPLORING
              </p>
            </div>
          </div>

          {/* ==================================================
              SLIDE 4
          ================================================== */}

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
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[42vw]
                w-[42vw]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-black/[0.05]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[28vw]
                w-[28vw]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-black/[0.04]
              "
            />

            <div className="relative z-10 text-center">
              <p
                className="
                  mb-5
                  font-['Bebas_Neue']
                  text-[11px]
                  tracking-[0.55em]
                  text-black/45
                "
              >
                MAKE SOMEONE SMILE
              </p>

              <h1
                className="
                  font-['Bebas_Neue']
                  text-[17vw]
                  leading-[0.68]
                  tracking-[-0.055em]
                  text-black
                "
              >
                GIFT
              </h1>

              <div
                className="
                  mx-auto
                  mt-8
                  h-[3px]
                  w-16
                  bg-[#D90000]
                "
              />

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[350px]
                  text-[13px]
                  leading-6
                  tracking-wide
                  text-black/50
                "
              >
                Share the feeling. Share the moment. Make someone smile.
              </p>

              <button
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-black/20
                  bg-black
                  px-7
                  py-3
                  font-['Bebas_Neue']
                  text-xs
                  tracking-[0.35em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#D90000]
                "
              >
                EXPLORE

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
