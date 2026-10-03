import React, { useRef } from "react";
import cokeLogo from "../assets/cokelogo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const navRef = useRef(null);

  const leftRef = useRef(null);
  const navLinksRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(
    () => {
      const logo = leftRef.current;
      const navLinks = navLinksRef.current;
      const cta = rightRef.current;

      if (!logo || !navLinks || !cta) return;

      // ---------------------------------------------
      // INITIAL STATES
      // ---------------------------------------------

      gsap.set(logo, {
        x: -25,
        opacity: 0,
      });

      gsap.set(navLinks, {
        y: -18,
        opacity: 0,
      });

      gsap.set(cta, {
        x: 25,
        opacity: 0,
      });

      // ---------------------------------------------
      // SEQUENTIAL NAVBAR ANIMATION
      // ---------------------------------------------

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          overwrite: "auto",
        },
      });

      // 1. LOGO
      tl.to(logo, {
        x: 0,
        opacity: 1,
        duration: 0.55,
      });

      // 2. NAVIGATION
      tl.to(
        navLinks,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
        },
        "+=0.08"
      );

      // 3. CTA
      tl.to(
        cta,
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
        "+=0.08"
      );

      return () => {
        tl.kill();
      };
    },
    {
      scope: navRef,
    }
  );

  return (
    <nav
      ref={navRef}
      className="
        absolute
        top-0
        left-0
        z-50
        w-full
        px-6
        py-5
        md:px-10
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[72px]
          max-w-[1400px]
          items-center
          justify-between
          rounded-full
          border
          border-black/10
          bg-white/90
          px-3
          pl-5
          shadow-[0_8px_35px_rgba(0,0,0,0.06)]
        "
      >
        {/* LOGO */}

        <div
          ref={leftRef}
          className="
            flex
            h-[54px]
            w-[170px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-red-600
            px-5
            shadow-sm
            will-change-transform
          "
        >
          <img
            src={cokeLogo}
            alt="Coca-Cola"
            className="
              h-[48px]
              w-auto
              object-contain
            "
          />
        </div>

        {/* NAVIGATION */}

        <div
          ref={navLinksRef}
          className="
            hidden
            items-center
            gap-1
            rounded-full
            bg-black/[0.04]
            p-1
            will-change-transform
            md:flex
          "
        >
          <a
            href="#home"
            className="
              rounded-full
              bg-black
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition-colors
              duration-300
            "
          >
            Home
          </a>

          <a
            href="#products"
            className="
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              text-black/65
              transition-colors
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            Products
          </a>

          <a
            href="#about"
            className="
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              text-black/65
              transition-colors
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            About
          </a>

          <a
            href="#sustainability"
            className="
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              text-black/65
              transition-colors
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            Sustainability
          </a>

          <a
            href="#contact"
            className="
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              text-black/65
              transition-colors
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            Contact
          </a>
        </div>

        {/* CTA */}

        <div
          ref={rightRef}
          className="
            flex
            items-center
            will-change-transform
          "
        >
          <a
            href="#products"
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-[#e50914]
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-colors
              duration-300
              hover:bg-black
            "
          >
            Explore

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

