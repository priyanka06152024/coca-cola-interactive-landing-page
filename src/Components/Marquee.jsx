import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import gsap from "gsap";
import video from "../videos/coke.mp4";

const Marquee = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const targetProgress = useRef(0);
  const currentProgress = useRef(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    const section = sectionRef.current;

    if (!videoElement || !section) return;

    let rafId;

    // ================================
    // CALCULATE SCROLL PROGRESS
    // ================================
    const updateScrollProgress = () => {
      const rect = section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight - window.innerHeight;

      const currentScroll = Math.max(
        0,
        Math.min(-rect.top, scrollDistance)
      );

      targetProgress.current =
        scrollDistance > 0
          ? currentScroll / scrollDistance
          : 0;
    };

    // ================================
    // SMOOTH VIDEO ANIMATION
    // ================================
    const animateVideo = () => {
      // LOWER VALUE = SLOWER + SMOOTHER
      currentProgress.current = gsap.utils.interpolate(
        currentProgress.current,
        targetProgress.current,
        0.02
      );

      if (
        videoElement.readyState >= 2 &&
        Number.isFinite(videoElement.duration)
      ) {
        const targetTime =
          currentProgress.current * videoElement.duration;

        // Ignore extremely tiny changes
        if (
          Math.abs(
            videoElement.currentTime - targetTime
          ) > 0.005
        ) {
          videoElement.currentTime = targetTime;
        }
      }

      rafId = requestAnimationFrame(animateVideo);
    };

    // ================================
    // EVENTS
    // ================================
    window.addEventListener(
      "scroll",
      updateScrollProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScrollProgress
    );

    // Initial calculation
    updateScrollProgress();

    // Start animation loop
    rafId = requestAnimationFrame(animateVideo);

    // ================================
    // CLEANUP
    // ================================
    return () => {
      window.removeEventListener(
        "scroll",
        updateScrollProgress
      );

      window.removeEventListener(
        "resize",
        updateScrollProgress
      );

      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="w-full bg-black">

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div className="w-full overflow-hidden py-8">

        <div className="flex w-max animate-[marquee_15s_linear_infinite] bg-red-700 py-6 font-['Bebas_Neue']">

          {/* ================= FIRST SET ================= */}

          <div className="flex shrink-0 items-center">

            <span className="px-6 text-[5.5vw] font-black uppercase leading-none tracking-tight text-white">
              TASTE THE FEELING
            </span>

            <Sparkles className="mx-4 text-3xl text-white/70" />

            <span className="px-6 text-[5.5vw] font-black uppercase leading-none tracking-tight text-white">
              REFRESH YOUR WORLD
            </span>

            <Sparkles className="mx-4 text-3xl text-white/70" />

            <span className="px-6 text-[5.5vw] font-black uppercase leading-none tracking-tight text-white">
              SHARE THE MOMENT
            </span>

            <Sparkles className="mx-4 text-3xl text-white/70" />

          </div>

          {/* ================= SECOND SET ================= */}

          <div className="flex shrink-0 items-center">

            <span className="px-6 text-[5.5vw] font-black uppercase leading-none tracking-tight text-white">
              TASTE THE FEELING
            </span>

            <Sparkles className="mx-4 text-3xl text-white/70" />

            <span className="px-6 text-[5.5vw] font-black uppercase leading-none tracking-tight text-white">
              REFRESH YOUR WORLD
            </span>

            <Sparkles className="mx-4 text-3xl text-white/70" />

            <span className="px-6 text-[5.5vw] font-black uppercase leading-none tracking-tight text-white">
              SHARE THE MOMENT
            </span>

            <Sparkles className="mx-4 text-3xl text-white/70" />

          </div>

        </div>
      </div>

      {/* =====================================================
          SCROLL CONTROLLED VIDEO
      ===================================================== */}

      <section
        ref={sectionRef}
        className="relative h-[600vh] bg-black"
      >

        {/* ================= STICKY VIDEO ================= */}

        <div className="sticky top-0 h-[48vw] w-full overflow-hidden">

          <video
            ref={videoRef}
            src={video}
            muted
            playsInline
            preload="auto"
            controls={false}
            className="h-full w-full object-cover"
          />

        </div>

      </section>

    </section>
  );
};

export default Marquee;