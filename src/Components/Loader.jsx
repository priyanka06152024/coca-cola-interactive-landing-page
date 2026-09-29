
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const circleRef = useRef(null);
  const innerRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // -----------------------------------
      // INITIAL STATE
      // -----------------------------------

      gsap.set(circleRef.current, {
        scale: 0,
        rotation: -90,
      });

      gsap.set(innerRef.current, {
        scale: 0.2,
        opacity: 0,
      });

      gsap.set(textRef.current, {
        y: 30,
        opacity: 0,
        letterSpacing: "0.5em",
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // -----------------------------------
      // RED CIRCLE ENTER
      // -----------------------------------

      tl.to(circleRef.current, {
        scale: 1,
        rotation: 0,
        duration: 1.1,
        ease: "power4.out",
      })

        // Inner white circle
        .to(
          innerRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.65"
        )

        // Text reveal
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            letterSpacing: "0.18em",
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35"
        )

        // Red line
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.inOut",
          },
          "-=0.35"
        );

      // -----------------------------------
      // HOLD
      // -----------------------------------

      tl.to({}, {
        duration: 0.35,
      });

      // -----------------------------------
      // BIG RED EXPANSION
      // -----------------------------------

      tl.to(circleRef.current, {
        scale: 7,
        duration: 1.25,
        ease: "power4.in",
      })

        // Text disappears
        .to(
          textRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.35,
            ease: "power2.in",
          },
          "-=0.8"
        )

        // Inner circle expands
        .to(
          innerRef.current,
          {
            scale: 6,
            duration: 1.15,
            ease: "power4.in",
          },
          "-=1.15"
        )

        // -----------------------------------
        // LOADER EXIT
        // -----------------------------------

        .to(
          loaderRef.current,
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="
        fixed
        inset-0
        z-[99999]
        flex
        h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#F7F5F0]
      "
    >
      {/* -----------------------------------
          MAIN RED CIRCLE
      ----------------------------------- */}

      <div
        ref={circleRef}
        className="
          absolute
          left-1/2
          top-1/2
          h-[180px]
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D71920]
        "
      />

      {/* -----------------------------------
          INNER WHITE CIRCLE
      ----------------------------------- */}

      <div
        ref={innerRef}
        className="
          absolute
          left-1/2
          top-1/2
          z-10
          flex
          h-[125px]
          w-[125px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-[#F7F5F0]
        "
      />

      {/* -----------------------------------
          CENTER CONTENT
      ----------------------------------- */}

      <div className="relative z-20 flex flex-col items-center">
        <div className="overflow-hidden">
          <h1
            ref={textRef}
            className="
              text-[clamp(24px,4vw,48px)]
              font-semibold
              uppercase
              leading-none
              text-[#111]
            "
          >
            Coca-Cola
          </h1>
        </div>

        <div className="mt-5 w-[90px] overflow-hidden">
          <div
            ref={lineRef}
            className="
              h-[1px]
              w-full
              bg-[#D71920]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
