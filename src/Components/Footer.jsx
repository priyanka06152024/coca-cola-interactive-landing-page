
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          y: 120,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 75%",
          },
        });

        gsap.from(lineRef.current, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        });
      }, footerRef);

      return () => ctx.revert();
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-black text-white"
    >
      {/* Top */}
      <div className="px-[5vw] pt-[8vw]">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Left */}
          <div>
            

            <h2
              ref={titleRef}
              className="
                font-['Bebas_Neue']
                text-[16vw]
                uppercase
                leading-[0.72]
                tracking-[-0.03em]
              "
            >
              Stay
              <br />
              <span className="text-[#C8102E]">Refreshing.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-[220px] pt-2 md:pt-8">
            <p className="text-[10px] uppercase leading-[1.7] tracking-[0.12em] text-white/40">
              Discover more from Coca-Cola.
              <br />
              Explore our world, our brands
              <br />
              and the moments we share.
            </p>

            <button className="group mt-8 flex items-center gap-4 border-b border-white/20 pb-3 text-[9px] uppercase tracking-[0.3em] transition-colors duration-300 hover:border-[#C8102E]">
              Explore Coca-Cola

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#C8102E] group-hover:bg-[#C8102E]">
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div
          ref={lineRef}
          className="mt-[8vw] h-px w-full bg-white/15"
        />

        {/* Links */}
        <div className="grid grid-cols-2 gap-10 py-10 md:grid-cols-4">
          <div>
            <p className="mb-5 text-[8px] uppercase tracking-[0.35em] text-white/30">
              Navigate
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="w-fit text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#C8102E]"
              >
                Home
              </a>

              <a
                href="#"
                className="w-fit text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#C8102E]"
              >
                Products
              </a>

              <a
                href="#"
                className="w-fit text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#C8102E]"
              >
                Brands
              </a>

              <a
                href="#"
                className="w-fit text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#C8102E]"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[8px] uppercase tracking-[0.35em] text-white/30">
              Follow
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="w-fit text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#C8102E]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="w-fit text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#C8102E]"
              >
                YouTube
              </a>

              <a
                href="#"
                className="w-fit text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-[#C8102E]"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <p className="mb-5 text-[8px] uppercase tracking-[0.35em] text-white/30">
              Visit
            </p>

            <p className="text-[10px] uppercase leading-[1.7] tracking-[0.15em] text-white/60">
              The Coca-Cola
              <br />
              Company
              <br />
              Atlanta, Georgia
            </p>
          </div>

          <div className="hidden md:block">
            <p className="mb-5 text-[8px] uppercase tracking-[0.35em] text-white/30">
              Since
            </p>

            <p className="font-['Bebas_Neue'] text-5xl leading-none text-white">
              1886
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
            © 2026 Coca-Cola Inspired Experience
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-[8px] uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[8px] uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Giant background word */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-2vw]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          font-['Bebas_Neue']
          text-[27vw]
          leading-none
          tracking-[-0.06em]
          text-white/[0.025]
        "
      >
        COKE
      </div>
    </footer>
  );
};

export default Footer;
