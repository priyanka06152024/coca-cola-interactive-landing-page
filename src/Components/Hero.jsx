import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LuLeaf } from "react-icons/lu";

const Hero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    gsap.from(".down", {
      y: 300,
      duration: 0.8,
      ease: "power4.out",
    });

    gsap.from(".up", {
      y: -300,
      duration: 0.8,
      ease: "power4.out",
    });

    gsap.from(leftRef.current, {
      x: -300,
      duration: 0.8,
      ease: "power4.out",
    });

    gsap.from(rightRef.current, {
      x: 300,
      duration: 0.8,
      ease: "power4.out",
    });
  });

  return (
    <div className="h-[50vw] w-full">
      <div className="w-full h-full bg-black ">
        <div className="w-full h-[20vw] text-[13vw] font-bold font-['Bebas_Neue'] flex justify-center items-center m-4 text-red-800">
          <p className="down">O</p>
          <p className="up">R</p>
          <p className="down">I</p>
          <p className="up">G</p>
          <p className="down">I</p>
          <p className="up">N</p>
          <p className="down">A</p>
          <p className="up">L</p>
        </div>

        <div className="flex flex-row justify-between w-[full]">
          <div
            ref={leftRef}
            className="flex flex-col  p-2 m-3 ml-4 gap-2 w-[30%] "
          >
            <p className="text-white">REAL TASTE</p>
            <div className="text-white h-[5vw] text-[5vw] leading-[5vw] font-['Bebas_Neue']">
              TIMELESS
            </div>
            <div className="text-red-800   h-[5vw] text-[5vw] leading-[5vw] font-['Bebas_Neue']">
              FEELING
            </div>
            <p className="text-gray-500 w-[20vw]">
              Coca-Cola Original Taste. The world's favorite refreshment. Real
              taste that brings moments to life.
            </p>

            <button className="text-red-800 h-[4vw] w-[15vw] border-2 mt-4  rounded-xl">
              EXPLORE NOW
            </button>
          </div>

          <div
            ref={rightRef}
            className="flex flex-col   m-3  gap-5 w-[21%] h-[22vw] p-4 mr-4  justify-center bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-xl border border-white/[0.18] rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex flex-row gap-8">
              <LuLeaf className="text-white text-[2vw]  w-[4.5vw] h-[4.5vw] p-3 border-2 border-red-800 rounded-full " />
              <div className="text-white">
                <p>PURE INGREDIENTS</p>
                <p className="text-[1vw]">A taste you can trust</p>
              </div>
            </div>

            <div className="flex flex-row gap-8">
              <LuLeaf className="text-white text-[2vw]  w-[4.5vw] h-[4.5vw] p-3 border-2 border-red-800 rounded-full " />
              <div className="text-white">
                <p>BRINGS PEOPLE TOGETHER</p>
                <p className="text-[1vw]">More than a drink.</p>
              </div>
            </div>

            <div className="flex flex-row gap-8">
              <LuLeaf className="text-white text-[2vw]  w-[4.5vw] h-[4.5vw] p-3 border-2 border-red-800 rounded-full " />
              <div className="text-white">
                <p>ENJOYED WORLDWIDE</p>
                <p className="text-[1vw]">Same great taste. Everywhere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
