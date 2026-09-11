// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const TextScroll = () => {
//   const infinitRef = useRef();

//   useGSAP(() => {
//    const textAnimation = gsap.to(infinitRef.current, {
//       xPercent: -50,
//       duration: 10,
//       ease: "none",
//       repeat: -1,
//     });
//   });
  

//   return (
//     <section className="w-full overflow-hidden bg-red-700">
//       <div
//         ref={infinitRef}
//         className="flex w-max"
//       >
//         {/* First Text */}
//         <p className="text-white text-[6vw] whitespace-nowrap shrink-0 font-bold">
//           REFRESH YOUR WORLD • TASTE THE FEELING • SHARE THE MOMENT •
//         </p>

//         {/* Same Text Again */}
//         <p className="text-white text-[6vw] whitespace-nowrap shrink-0 font-bold">
//           REFRESH YOUR WORLD • TASTE THE FEELING • SHARE THE MOMENT •
//         </p>
//       </div>
//     </section>
//   );
// };

// export default TextScroll;


import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TextScroll = () => {
  const infinitRef = useRef(null);

  useGSAP(() => {
    const element = infinitRef.current;

    let speed = 0.5;

    const ticker = () => {
      let x = gsap.getProperty(element, "x");

      x -= speed;

      // Half track ke baad seamlessly reset
      if (x <= -element.scrollWidth / 2) {
        x += element.scrollWidth / 2;
      }

      if (x > 0) {
        x -= element.scrollWidth / 2;
      }

      gsap.set(element, {
        x: x,
      });
    };

    gsap.ticker.add(ticker);

    const handleEnter = () => {
      speed = -0.5; // ← hover = opposite direction
    };

    const handleLeave = () => {
      speed = 0.5; // → normal direction
    };

    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      gsap.ticker.remove(ticker);
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mouseleave", handleLeave);
    };
  });

  return (
    <section className="w-full overflow-hidden bg-red-700">
      <div
        ref={infinitRef}
        className="flex w-max"
      >
        <p className="text-white text-[6vw] whitespace-nowrap shrink-0 font-bold">
          REFRESH YOUR WORLD • TASTE THE FEELING • SHARE THE MOMENT •
        </p>

        <p className="text-white text-[6vw] whitespace-nowrap shrink-0 font-bold">
          REFRESH YOUR WORLD • TASTE THE FEELING • SHARE THE MOMENT •
        </p>
      </div>
    </section>
  );
};

export default TextScroll;