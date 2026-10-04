
import React, {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { LuLeaf } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

// --------------------------------------------------
// LAZY LOAD 3D MODEL
// --------------------------------------------------

const Coke3DCan = lazy(() => import("../ThreeD/Coke3DCan"));

const Hero = () => {
  const container = useRef(null);
  const canRef = useRef(null);
  const canWrapRef = useRef(null);

  const [load3D, setLoad3D] = useState(false);
  const [canReady, setCanReady] = useState(false);

  // ==================================================
  // 3D LOAD
  // Start only after Hero UI has had time to settle
  // ==================================================

  useEffect(() => {
    let timer;

    // Give browser enough time to paint Hero first.
    timer = window.setTimeout(() => {
      setLoad3D(true);
    }, 1500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  // ==================================================
  // HERO UI ANIMATION
  // Everything is intentionally sequenced.
  // ==================================================

  useGSAP(
    () => {
      const scope = container.current;

      if (!scope) return;

      const q = gsap.utils.selector(scope);

      // ------------------------------------------------
      // INITIAL STATES
      // ------------------------------------------------

      gsap.set(q(".hero-eyebrow"), {
        opacity: 0,
        y: 15,
      });

      gsap.set(q(".hero-title-line"), {
        opacity: 0,
        y: 35,
      });

      gsap.set(q(".hero-description"), {
        opacity: 0,
        y: 20,
      });

      gsap.set(q(".hero-button"), {
        opacity: 0,
        y: 20,
      });

      gsap.set(q(".hero-card-item"), {
        opacity: 0,
        y: 18,
      });

      gsap.set(canWrapRef.current, {
        opacity: 0,
        scale: 0.94,
      });

      // ==================================================
      // MASTER TIMELINE
      // ==================================================

      const tl = gsap.timeline({
        defaults: {
          overwrite: "auto",
        },
      });

      // --------------------------------------------------
      // 1. ORIGINAL BACKGROUND
      // --------------------------------------------------

      tl.to(
        q(".original-letter"),
        {
          y: "0%",
          duration: 1.25,
          stagger: 0.07,
          ease: "power4.out",
        },
        0
      );

      // --------------------------------------------------
      // 2. EYEBROW
      // --------------------------------------------------

      tl.to(
        q(".hero-eyebrow"),
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0.75
      );

      // --------------------------------------------------
      // 3. HEADING
      // --------------------------------------------------

      tl.to(
        q(".hero-title-line"),
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.10,
          ease: "power4.out",
        },
        1.0
      );

      // --------------------------------------------------
      // 4. DESCRIPTION
      // --------------------------------------------------

      tl.to(
        q(".hero-description"),
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        1.55
      );

      // --------------------------------------------------
      // 5. BUTTON
      // --------------------------------------------------

      tl.to(
        q(".hero-button"),
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        1.90
      );

      // --------------------------------------------------
      // 6. RIGHT CARD
      // --------------------------------------------------

      tl.to(
        q(".hero-card-item"),
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        },
        2.20
      );

      // --------------------------------------------------
      // 7. CAN WRAPPER
      // Canvas itself will load later.
      // This only prepares the wrapper.
      // --------------------------------------------------

      tl.to(
        canWrapRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "power2.out",
        },
        2.60
      );

      return () => {
        tl.kill();
      };
    },
    {
      scope: container,
    }
  );

  // ==================================================
  // CAN DROP + SPIN
  // Runs ONLY after model is actually ready.
  // ==================================================

  useGSAP(
    () => {
      const can = canRef.current;

      if (!can || !canReady) return;

      // ------------------------------------------------
      // INITIAL POSITION
      // ------------------------------------------------

      gsap.set(can.position, {
        x: 0,
        y: 5.5,
        z: 0,
      });

      // ------------------------------------------------
      // INITIAL ROTATION
      // ------------------------------------------------

      gsap.set(can.rotation, {
        x: 0,
        y: -0.8,
        z: 0,
      });

      // ------------------------------------------------
      // CAN TIMELINE
      // ------------------------------------------------

      const canTimeline = gsap.timeline({
        delay: 0.15,
      });

      // DROP FIRST
      canTimeline.to(
        can.position,
        {
          y: 0,
          duration: 1.65,
          ease: "power3.out",
        },
        0
      );

      // ROTATION STARTS SLIGHTLY AFTER DROP
      canTimeline.to(
        can.rotation,
        {
          y: Math.PI * 2 - 0.8,
          duration: 1.8,
          ease: "power2.inOut",
        },
        0.12
      );

      // FINAL ROTATION SETTLE
      canTimeline.to(
        can.rotation,
        {
          y: Math.PI * 2,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.18"
      );

      return () => {
        canTimeline.kill();

        gsap.killTweensOf(can.position);
        gsap.killTweensOf(can.rotation);
      };
    },
    {
      scope: container,
      dependencies: [canReady],
    }
  );

  const text = "ORIGINAL";

  return (
    <section
      ref={container}
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-[#F7F5F0]
        text-black
      "
    >
      {/* =====================================
          BACKGROUND DETAILS
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* ORIGINAL */}

        <h1
          className="
            absolute
            left-1/2
            top-[5%]
            -translate-x-1/2
            whitespace-nowrap
            font-['Bebas_Neue']
            text-[17vw]
            leading-none
            font-bold
            uppercase
            text-red-700/[0.055]
            select-none
          "
        >
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="
                inline-block
                overflow-hidden
                align-top
              "
            >
              <span className="original-letter inline-block">
                {letter}
              </span>
            </span>
          ))}
        </h1>

        {/* SMALL BACKGROUND CIRCLE */}

        <div
          className="
            absolute
            right-[-8vw]
            top-[18%]
            h-[22vw]
            w-[22vw]
            rounded-full
            border
            border-red-700/[0.07]
          "
        />

        <div
          className="
            absolute
            left-[-10vw]
            bottom-[-10vw]
            h-[28vw]
            w-[28vw]
            rounded-full
            bg-red-700/[0.025]
          "
        />
      </div>

      {/* =====================================
          MAIN HERO
      ===================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1600px]
          items-center
          px-6
          pb-10
          pt-24
          lg:px-10
        "
      >
        {/* =================================
            LEFT CONTENT
        ================================= */}

        <div
          className="
            relative
            z-30
            flex
            w-[38%]
            flex-col
            pl-1
            lg:pl-4
          "
        >
          {/* Eyebrow */}

          <div
            className="
              hero-eyebrow
              mb-4
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[1px]
                w-8
                bg-red-700
              "
            />

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-black/50
              "
            >
              Real Taste
            </p>
          </div>

          {/* Main heading */}

          <div className="overflow-hidden">
            <h2
              className="
                hero-title-line
                font-['Bebas_Neue']
                text-[7vw]
                leading-[0.82]
                tracking-tight
                text-black
              "
            >
              TIMELESS
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2
              className="
                hero-title-line
                font-['Bebas_Neue']
                text-[7vw]
                leading-[0.82]
                tracking-tight
                text-red-700
              "
            >
              FEELING
            </h2>
          </div>

          {/* Description */}

          <p
            className="
              hero-description
              mt-7
              max-w-[330px]
              text-[13px]
              leading-6
              text-black/50
            "
          >
            Coca-Cola Original Taste. The world's favorite
            refreshment. A familiar taste that turns ordinary
            moments into something memorable.
          </p>

          {/* Button */}

          <div className="mt-7">
            <button
              className="
                hero-button
                group
                relative
                flex
                h-12
                w-[170px]
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-red-700
                bg-red-700
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
                transition-all
                duration-300
                hover:shadow-[0_15px_40px_rgba(185,28,28,0.22)]
              "
            >
              <span
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                Explore Now
              </span>

              <span
                className="
                  absolute
                  right-2
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-red-700
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                ↗
              </span>
            </button>
          </div>

          {/* Bottom micro detail */}

          <div
            className="
              mt-10
              flex
              items-center
              gap-4
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-black/30
            "
          >
            <span className="h-[1px] w-10 bg-black/15" />

            <span>Classic Taste</span>
          </div>
        </div>

        {/* =================================
            3D CAN
        ================================= */}

        <div
          ref={canWrapRef}
          className="
            absolute
            left-1/2
            top-[50%]
            z-20
            h-[72vh]
            w-[42vw]
            -translate-x-1/2
            -translate-y-1/2
            will-change-transform
          "
        >
          {load3D && (
            <Canvas
              camera={{
                position: [0, 0, 13],
                fov: 35,
              }}
              dpr={[1, 1.25]}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                stencil: false,
                depth: true,
              }}
              frameloop="always"
            >
              {/* LIGHTING */}

              <ambientLight intensity={0.65} />

              <directionalLight
                position={[4, 7, 6]}
                intensity={2.2}
              />

              <directionalLight
                position={[-4, 3, 2]}
                intensity={1.4}
              />

              <pointLight
                position={[0, 2, 5]}
                intensity={1}
                distance={8}
              />

              {/* ENVIRONMENT */}

              <Environment
                preset="studio"
                resolution={256}
              />

              {/* CAN */}

              <group ref={canRef}>
                <Suspense fallback={null}>
                  <Coke3DCan
                    onReady={() => setCanReady(true)}
                  />
                </Suspense>
              </group>
            </Canvas>
          )}

          {/* GROUND SHADOW */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[8%]
              left-1/2
              h-[8%]
              w-[35%]
              -translate-x-1/2
              rounded-[50%]
              bg-black/[0.12]
              blur-2xl
            "
          />
        </div>

        {/* =================================
            RIGHT INFORMATION CARD
        ================================= */}

        <div
          className="
            absolute
            right-6
            top-1/2
            z-30
            w-[25%]
            min-w-[280px]
            max-w-[360px]
            -translate-y-1/2
            lg:right-10
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-black/[0.07]
              bg-white/65
              p-5
              shadow-[0_25px_80px_rgba(0,0,0,0.07)]
              backdrop-blur-2xl
            "
          >
            {/* CARD TOP */}

            <div
              className="
                mb-6
                flex
                items-center
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-black/35
                  "
                >
                  The Original
                </p>

                <p
                  className="
                    mt-1
                    font-['Bebas_Neue']
                    text-2xl
                    tracking-wide
                    text-black
                  "
                >
                  COKE STORY
                </p>
              </div>

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-red-700
                  text-xs
                  text-white
                "
              >
                +
              </span>
            </div>

            {/* ITEMS */}

            <div className="space-y-2">
              {/* ITEM 1 */}

              <div
                className="
                  hero-card-item
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-black/[0.05]
                  bg-white/55
                  p-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-red-700/20
                    bg-red-700/[0.06]
                  "
                >
                  <LuLeaf
                    className="
                      h-5
                      w-5
                      text-red-700
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      tracking-wide
                      text-black
                    "
                  >
                    PURE INGREDIENTS
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      text-black/40
                    "
                  >
                    A taste you can trust.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}

              <div
                className="
                  hero-card-item
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-black/[0.05]
                  bg-white/55
                  p-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-red-700/20
                    bg-red-700/[0.06]
                  "
                >
                  <FiUsers
                    className="
                      h-5
                      w-5
                      text-red-700
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      tracking-wide
                      text-black
                    "
                  >
                    BRINGS PEOPLE TOGETHER
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      text-black/40
                    "
                  >
                    More than a drink.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}

              <div
                className="
                  hero-card-item
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-black/[0.05]
                  bg-white/55
                  p-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-red-700/20
                    bg-red-700/[0.06]
                  "
                >
                  <FaGlobe
                    className="
                      h-5
                      w-5
                      text-red-700
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      tracking-wide
                      text-black
                    "
                  >
                    ENJOYED WORLDWIDE
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      text-black/40
                    "
                  >
                    Same great taste. Everywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD FOOTER */}

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
                border-t
                border-black/[0.06]
                pt-4
              "
            >
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-black/30
                "
              >
                Coca-Cola Original
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          BOTTOM SCROLL INDICATOR
      ===================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          items-center
          gap-3
          md:flex
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-black/30
          "
        >
          Scroll to explore
        </span>

        <span
          className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            text-xs
            text-black/40
          "
        >
          ↓
        </span>
      </div>
    </section>
  );
};

export default Hero;

