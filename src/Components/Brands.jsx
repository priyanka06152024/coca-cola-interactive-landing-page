
import React, { useRef } from "react";
import brandsImg from "../assets/brandsImg.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Brands = () => {
  const imageBoxRef = useRef(null);
  const imageRef = useRef(null);
  const frameRef = useRef(null);
  const dotRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const box = imageBoxRef.current;

    if (!box) return;

    const move = (e) => {
      const rect = box.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = (x - centerX) / centerX;
      const rotateX = (centerY - y) / centerY;

      // Image movement
      gsap.to(imageRef.current, {
        x: rotateY * 10,
        y: rotateX * 7,
        scale: 1.045,
        rotateX: rotateX * 1.2,
        rotateY: rotateY * 1.2,
        duration: 0.7,
        ease: "power3.out",
      });

      // Small red dot follows cursor
      gsap.to(dotRef.current, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power3.out",
      });

      // Text follows slightly
      gsap.to(textRef.current, {
        x: rotateY * 12,
        y: rotateX * 8,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(imageRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(dotRef.current, {
        x: box.offsetWidth / 2,
        y: box.offsetHeight / 2,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(textRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    };

    box.addEventListener("mousemove", move);
    box.addEventListener("mouseleave", leave);

    return () => {
      box.removeEventListener("mousemove", move);
      box.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F3F2EE]">

      <div className="px-[5vw] py-[7vw]">

        {/* HEADING */}
        <div className="flex items-start justify-between">

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-black/40">
              Coca-Cola Company
            </p>

            <h1 className="font-['Bebas_Neue'] text-[13vw] uppercase leading-[0.78] tracking-[-0.025em]">
              <span className="text-[#C8102E]">
                Associated
              </span>

              <br />

              <span className="text-black">
                Brands
              </span>
            </h1>
          </div>

          <p className="hidden max-w-[170px] pt-2 text-[10px] uppercase leading-[1.6] tracking-[0.08em] text-black/40 md:block">
            A collection of
            <br />
            brands made for
            <br />
            every moment.
          </p>

        </div>


        {/* IMAGE */}
        <div
          ref={imageBoxRef}
          className="
            relative
            mt-[6vw]
            h-[34vw]
            min-h-[300px]
            w-full
            overflow-hidden
            rounded-[2rem]
            bg-black
            [perspective:1000px]
          "
        >

          {/* IMAGE */}
          <img
            ref={imageRef}
            src={brandsImg}
            alt="Associated Coca-Cola brands"
            className="
              absolute
              inset-[-2%]
              h-[104%]
              w-[104%]
              max-w-none
              object-cover
              will-change-transform
            "
          />


          {/* DARK OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-black/10" />


          {/* THIN RED FRAME */}
          <div
            ref={frameRef}
            className="
              pointer-events-none
              absolute
              inset-5
              z-20
              rounded-[1.5rem]
              border
              border-[#C8102E]/70
            "
          />


          {/* CURSOR DOT */}
          <div
            ref={dotRef}
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-30
              h-3
              w-3
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#C8102E]
            "
          />


          {/* TOP LEFT */}
          <div className="absolute left-7 top-7 z-30">

            <p className="text-[9px] uppercase tracking-[0.35em] text-white/70">
              Portfolio
            </p>

          </div>


          {/* CENTER TEXT */}
          <div
            ref={textRef}
            className="
              pointer-events-none
              absolute
              bottom-7
              left-7
              z-30
              will-change-transform
            "
          >
            <p className="font-['Bebas_Neue'] text-3xl uppercase tracking-wide text-white">
              Taste the world
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/60">
              One portfolio
            </p>
          </div>


          {/* YEAR */}
          <div className="absolute bottom-7 right-7 z-30 text-right">

            <p className="text-[8px] uppercase tracking-[0.3em] text-white/50">
              Since
            </p>

            <p className="font-['Bebas_Neue'] text-2xl text-white">
              1886
            </p>

          </div>

        </div>


        {/* FOOTER */}
        <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">

          <p className="text-[9px] uppercase tracking-[0.35em] text-black/40">
            Explore the portfolio
          </p>

          <div className="flex items-center gap-3">

            

            

          </div>

        </div>

      </div>

    </section>
  );
};

export default Brands;

