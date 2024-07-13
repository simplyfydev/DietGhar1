"use client";
import Image from "next/image";
import img from "@/assets/Food1.png";
import hoverImg from "@/assets/Food2.png";

import React, { useRef, useState } from "react";
import C1 from "@/assets/Carousal1.png";
import C2 from "@/assets/Carousal2.png";
import C3 from "@/assets/Carousal3.png";
import C4 from "@/assets/Carousal4.png";
import C5 from "@/assets/Carousal5.png";
import C6 from "@/assets/Carousal6.png";
const images = [C1, C2, C3, C4, C5, C6];

const HoverDiv = () => {
  const [hovered, setHovered] = useState(false);

  const carouselRef = useRef(null);
  const [showbtn, setShowbtn] = useState(true);
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    }
    setShowbtn(true);
  };
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    }
    setShowbtn(false);
  };

  return (
    <>
      <div className="p-12 relative bg-white">
        <h2 className="text-3xl text-center text-[#4A6213] font-semibold mb-4 mt-8">
          Our Programs
        </h2>
        <p className="text-black text-center text-[24px] mb-4">
          Programs designed to fit all your nutritional needs. Our plans are
          customized to ensure you get the right nutrition based on your
          personal preferences and health goals.
        </p>
        <button
          className="absolute left-4 z-10 p-2 bg-black text-white top-[60%] transform -translate-y-1/2"
          onClick={handlePrev}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            border: "none",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &lt;
        </button>
        <article className="relative flex flex-col gap-4 m-auto">
          <div
            className="flex select-none gap-4 mask-image overflow-x-auto"
            ref={carouselRef}
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              /* For WebKit browsers (Chrome, Safari, etc) */
              .mask-image::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div
              className="relative w-96 h-[530px] overflow-hidden bg-white shadow-lg"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div
                className={`relative transition-all duration-500 ease-in-out ${
                  hovered ? "scale-x-110 scale-y-100" : "scale-x-90 scale-y-100"
                }`}
              >
                {hovered ? (
                  <Image
                    src={hoverImg}
                    alt="Weight Loss"
                    width={320}
                    height={240}
                    className="object-cover w-full transition-all duration-500 ease-in-out"
                  />
                ) : (
                  <Image
                    src={img}
                    alt="Weight Loss"
                    width={320}
                    height={240}
                    className="object-cover w-full transition-all duration-500 ease-in-out"
                  />
                )}
              </div>
              <div className="p-2">
                <h2 className="text-xl text-black text-center font-semibold">
                  Weight Loss
                </h2>
                <div className="flex items-center justify-center">
                  <button
                    className={`mt-2 w-40 bg-[#9AC435] border-white border-2 rounded-2xl shadow-2xl px-4 py-2 text-white transition-all duration-300 ease-in-out ${
                      hovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Know more &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        {showbtn && (
          <button
            className="absolute right-4 z-10 p-2 bg-black text-white top-[60%] transform -translate-y-1/2"
            onClick={handleNext}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              border: "none",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &gt;
          </button>
        )}
      </div>

      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div
          className="relative w-96 h-[530px] overflow-hidden bg-white shadow-lg"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`relative transition-all duration-500 ease-in-out ${
              hovered ? "scale-x-110 scale-y-100" : "scale-x-90 scale-y-100"
            }`}
          >
            {hovered ? (
              <Image
                src={hoverImg}
                alt="Weight Loss"
                width={320}
                height={240}
                className="object-cover w-full transition-all duration-300 ease-in-out"
              />
            ) : (
              <Image
                src={img}
                alt="Weight Loss"
                width={320}
                height={240}
                className="object-cover w-full transition-all duration-500 ease-in-out"
              />
            )}
          </div>
          <div className="p-2">
            <h2 className="text-xl text-black text-center font-semibold">
              Weight Loss
            </h2>
            <div className="flex items-center justify-center">
              <button
                className={`mt-2 rounded bg-green-500 px-4 py-2 text-white transition-all duration-500 ease-in-out ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
              >
                Know more
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HoverDiv;
