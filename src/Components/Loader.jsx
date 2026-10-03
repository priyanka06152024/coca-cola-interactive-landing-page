import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const circleRef = useRef(null);
  const innerRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  const onCompleteRef = useRef(onComplete);

  // Keep latest callback without rebuilding the animation
  useLayoutEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useLayoutEffect(() => {
    const loader = loaderRef.current;
    const circle = circleRef.current;
    const inner = innerRef.current;
    const text = textRef.current;
    const line = lineRef.current;

    if (!loader || !circle || !inner || !text || !line) return;

    const ctx = gsap.context(() => {
      // -----------------------------------
      // INITIAL STATE
      // -----------------------------------

      gsap.set(circle, {
        scale: 0,
        rotation: -90,
        force3D: true,
      });

      gsap.set(inner, {
        scale: 0.2,
        opacity: 0,
        force3D: true,
      });

      gsap.set(text, {
        y: 30,
        opacity: 0,
        letterSpacing: "0.5em",
        force3D: true,
      });

      gsap.set(line, {
        scaleX: 0,
        transformOrigin: "left center",
        force3D: true,
      });

      // -----------------------------------
      // LOADER TIMELINE
      // -----------------------------------

      const tl = gsap.timeline({
        onComplete: () => {
          onCompleteRef.current?.();
        },
      });

      // RED CIRCLE ENTER
      tl.to(circle, {
        scale: 1,
        rotation: 0,
        duration: 1.1,
        ease: "power4.out",
      })

        // INNER WHITE CIRCLE
        .to(
          inner,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.65"
        )

        // TEXT REVEAL
        .to(
          text,
          {
            y: 0,
            opacity: 1,
            letterSpacing: "0.18em",
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35"
        )

        // RED LINE
        .to(
          line,
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.inOut",
          },
          "-=0.35"
        )

        // -----------------------------------
        // HOLD
        // -----------------------------------

        .to({}, {
          duration: 0.35,
        })

        // -----------------------------------
        // BIG RED EXPANSION
        // -----------------------------------

        .to(circle, {
          scale: 7,
          duration: 1.25,
          ease: "power4.in",
        })

        // TEXT DISAPPEARS
        .to(
          text,
          {
            opacity: 0,
            y: -20,
            duration: 0.35,
            ease: "power2.in",
          },
          "-=0.8"
        )

        // INNER CIRCLE EXPANDS
        .to(
          inner,
          {
            scale: 6,
            duration: 1.15,
            ease: "power4.in",
          },
          "-=1.15"
        )

        // LOADER EXIT
        .to(
          loader,
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.2"
        );

      return () => {
        tl.kill();
      };
    }, loaderRef);

    return () => {
      ctx.revert();
    };
  }, []);

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
      {/* MAIN RED CIRCLE */}

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
          will-change-transform
        "
      />

      {/* INNER WHITE CIRCLE */}

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
          will-change-transform
        "
      />

      {/* CENTER CONTENT */}

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
              will-change-transform
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
              will-change-transform
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;