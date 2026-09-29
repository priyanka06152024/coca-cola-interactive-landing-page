
import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import gsap from "gsap";
import video from "../videos/coke.mp4";

const Marquee = () => {




  return (
    <section className="w-full bg-[#F7F5F0]">

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="relative w-full bg-[#F7F5F0]">

        <div className="relative overflow-hidden py-[5vw] pt-[8.5vw]">

          <div className="flex w-max animate-[marquee_22s_linear_infinite]">

            {/* SET 1 */}

            <div className="flex shrink-0 items-center">

              <span
                className="
                  px-[3vw]
                  font-['Bebas_Neue']
                  text-[11vw]
                  font-black
                  uppercase
                  leading-[0.75]
                  tracking-[-0.02em]
                  text-[#171717]
                "
              >
                TASTE
              </span>

              <Sparkles
                className="
                  mx-[2vw]
                  h-[5vw]
                  w-[5vw]
                  text-red-700
                "
              />

              <span
                className="
                  px-[3vw]
                  font-['Bebas_Neue']
                  text-[11vw]
                  font-black
                  uppercase
                  leading-[0.75]
                  tracking-[-0.02em]
                  text-[#171717]
                "
              >
                THE FEELING
              </span>

              <Sparkles
                className="
                  mx-[2vw]
                  h-[5vw]
                  w-[5vw]
                  text-red-700
                "
              />

              <span
                className="
                  px-[3vw]
                  font-['Bebas_Neue']
                  text-[11vw]
                  font-black
                  uppercase
                  leading-[0.75]
                  tracking-[-0.02em]
                  text-transparent
                  [-webkit-text-stroke:1.5px_#171717]
                "
              >
                REFRESH
              </span>

              <Sparkles
                className="
                  mx-[2vw]
                  h-[5vw]
                  w-[5vw]
                  text-red-700
                "
              />

            </div>


            {/* SET 2 */}

            <div className="flex shrink-0 items-center">

              <span
                className="
                  px-[3vw]
                  font-['Bebas_Neue']
                  text-[11vw]
                  font-black
                  uppercase
                  leading-[0.75]
                  tracking-[-0.02em]
                  text-[#171717]
                "
              >
                TASTE
              </span>

              <Sparkles
                className="
                  mx-[2vw]
                  h-[5vw]
                  w-[5vw]
                  text-red-700
                "
              />

              <span
                className="
                  px-[3vw]
                  font-['Bebas_Neue']
                  text-[11vw]
                  font-black
                  uppercase
                  leading-[0.75]
                  tracking-[-0.02em]
                  text-[#171717]
                "
              >
                THE FEELING
              </span>

              <Sparkles
                className="
                  mx-[2vw]
                  h-[5vw]
                  w-[5vw]
                  text-red-700
                "
              />

              <span
                className="
                  px-[3vw]
                  font-['Bebas_Neue']
                  text-[11vw]
                  font-black
                  uppercase
                  leading-[0.75]
                  tracking-[-0.02em]
                  text-transparent
                  [-webkit-text-stroke:1.5px_#171717]
                "
              >
                REFRESH
              </span>

              <Sparkles
                className="
                  mx-[2vw]
                  h-[5vw]
                  w-[5vw]
                  text-red-700
                "
              />

            </div>

          </div>

        </div>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <div className="mx-[4vw] border-b border-black/15">

          <div
            className="
              flex
              flex-col
              justify-between
              gap-8
              py-8
              md:flex-row
              md:items-end
            "
          >

            <div className="max-w-[430px]">

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-red-700
                "
              >
                The experience
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-relaxed
                  tracking-wide
                  text-black/55
                  md:text-base
                "
              >
                More than a drink. A feeling that has travelled
                through generations, bringing people together
                one moment at a time.
              </p>

            </div>


            <div className="flex items-center gap-3">

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-black/40
                "
              >
                Scroll to explore
              </span>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/15
                "
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SCROLL CONTROLLED VIDEO
      ===================================================== */}

      <section
        u
        className="
          relative
          h-[100vh]
          bg-[#EAEAE5]
        "
      >

        {/* STICKY VIDEO */}

        <div
          className="
          sticky
            top-0
            flex
            h-screen
            w-full
            items-center
            justify-center
            overflow-hidden
            px-[4vw]
          "
        >

          {/* VIDEO FRAME */}

          <div
            className="
              relative
              h-[82vh]
              w-full
              overflow-hidden
              rounded-[2rem]
              border
              border-black/10
              bg-[#dcdcd7]
              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
            "
          >

            {/* VIDEO */}

            <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
         className="w-full h-full object-cover"
      />


            {/* SOFT OVERLAY */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/[0.03]
              "
            />


            {/* TOP LABEL */}

            <div
              className="
                absolute
                left-7
                top-7
                z-10
              "
            >

              <p
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.35em]
                  text-white/80
                "
              >
                COCA-COLA
              </p>

              <p
                className="
                  mt-1
                  text-[9px]
                  tracking-[0.25em]
                  text-white/50
                "
              >
                ORIGINAL TASTE
              </p>

            </div>


            {/* TOP RIGHT */}

            <div
              className="
                absolute
                right-7
                top-7
                z-10
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  backdrop-blur-md
                "
              >

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-white
                  "
                />

                <span
                  className="
                    text-[9px]
                    tracking-[0.25em]
                    text-white/80
                  "
                >
                  EXPERIENCE
                </span>

              </div>

            </div>


            {/* BOTTOM */}

            <div
              className="
                absolute
                bottom-7
                left-7
                right-7
                z-10
                flex
                items-end
                justify-between
              "
            >

              <div>

                

                <h2
                  className="
                    mt-2
                    text-[clamp(2rem,4vw,4.5rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  FEEL
                  <br />
                  THE MOMENT
                </h2>

              </div>


              <div
                className="
                  hidden
                  max-w-[220px]
                  text-right
                  md:block
                "
              >

                <p
                  className="
                    text-[11px]
                    leading-relaxed
                    tracking-wide
                    text-white/60
                  "
                >
                  A timeless taste,
                  <br />
                  made to be shared.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
};

export default Marquee;

