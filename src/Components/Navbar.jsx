import React, { useRef } from "react";
import cokeLogo from "../assets/cokelogo.png";
import { slideFromLeft, slideFromRight } from "../animations/Animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const down = useRef(null);

  useGSAP(() => {
    gsap.from(down.current, {
      y: -300,
      duration: 0.8,
      ease: "power4.out",
    });

    slideFromLeft(leftRef.current);
    slideFromRight(rightRef.current);
  });

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 py-5 md:px-10">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between rounded-full border border-black/10 bg-white/85 px-3 pl-5 shadow-[0_8px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        {/* Logo */}
        <div
          ref={leftRef}
          className="flex h-[54px] w-[170px] items-center justify-center overflow-hidden rounded-full bg-white px-5 shadow-sm"
        >
          <img
            src={cokeLogo}
            alt="Coca-Cola"
            className="h-[48px] w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <div
          ref={down}
          className="hidden items-center gap-1 rounded-full bg-black/[0.04] p-1 md:flex"
        >
          <a
            href="#home"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#products"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-black/65 transition-all duration-300 hover:bg-black hover:text-white"
          >
            Products
          </a>

          <a
            href="#about"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-black/65 transition-all duration-300 hover:bg-black hover:text-white"
          >
            About
          </a>

          <a
            href="#sustainability"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-black/65 transition-all duration-300 hover:bg-black hover:text-white"
          >
            Sustainability
          </a>

          <a
            href="#contact"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-black/65 transition-all duration-300 hover:bg-black hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <div ref={rightRef} className="flex items-center">
          <a
            href="#products"
            className="group flex items-center gap-2 rounded-full bg-[#e50914] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-black"
          >
            Explore
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
