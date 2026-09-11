import React, { useRef } from "react";
import cokeLogo from "../assets/cokeLogo.jpeg";
import { slideFromLeft } from "../animations/Animation";
import { slideFromRight } from "../animations/Animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Navbar = () => {
    const leftRef = useRef(null);
      const rightRef = useRef(null);
      const down = useRef(null);
    useGSAP(()=>{
         gsap.from(down.current, {
        y: -300,
      duration: 0.8,
      ease: "power4.out",
    });
        slideFromLeft(leftRef.current);
            slideFromRight(rightRef.current);
    })
  return (
    <nav className="bg-black ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img ref={leftRef} src={cokeLogo} alt="Coca-Cola" className="w-[12vw] h-auto" />

        {/* Links */}
        <div ref={down} className="flex  gap-8 text-white  ">
          <a href="#home" className="hover:text-red-700 " >Home</a>
          <a href="#products" className="hover:text-red-700 " >Products</a>
          <a href="#about" className="hover:text-red-700 " >About</a>
          <a href="#sustainability" className="hover:text-red-700 " >Sustainability</a>
          <a href="#contact" className="hover:text-red-700 " >Contact</a>
        </div>

        <div ref={rightRef} className="text-white">
            Shop Now
            ghhhhhh
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
