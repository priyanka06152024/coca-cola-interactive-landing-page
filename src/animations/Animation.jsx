import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export const slideFromLeft = (element) =>{
    gsap.from(element, {
      x: -300,
      duration: 1.2,
      ease: "power4.out",
    });
}


export const slideFromRight =(element) =>{
    gsap.from(element, {
      x: 300,
      duration: 1.2,
      ease: "power4.out",
    });
}