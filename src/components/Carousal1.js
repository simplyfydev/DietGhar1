"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import C1 from "@/assets/Carousal1.png";
import C2 from "@/assets/Carousal2.png";
import C3 from "@/assets/Carousal3.png";
import C4 from "@/assets/Carousal4.png";
import C5 from "@/assets/Carousal5.png";
import C6 from "@/assets/Carousal6.png";
const images = [C1, C2, C3, C4, C5, C6];
export default function Carousal1() {
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
      <div className="p-12 relative">
        <h2 className="text-3xl text-center text-gray-900 font-semibold mb-4 mt-8">
          If they can be <span className="text-[#4A6213]">fit and healthy</span>{" "}
          , so can you
        </h2>
        <p className="text-black text-center mb-4">
          Creating meal plans that inspire lasting lifestyle changes
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
            <div className="flex-shrink-0 flex items-center justify-around gap-4">
              {images.map((image, index) => (
                <header className="mx-auto" key={index}>
                  <Image src={image} alt="image" />
                </header>
              ))}
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
    </>
  );
}
