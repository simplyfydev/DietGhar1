"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import img1 from "@/assets/Food1.png";
import hoverImg1 from "@/assets/Food2.png";
import img2 from "@/assets/Food3.png";
import hoverImg2 from "@/assets/Food4.png";
import img3 from "@/assets/Food5.png";
import hoverImg3 from "@/assets/Food6.png";
import img4 from "@/assets/Food7.png";
import hoverImg4 from "@/assets/Food8.png";
import img5 from "@/assets/Food9.png";
import hoverImg5 from "@/assets/Food10.png";
import img6 from "@/assets/Food11.png";
import hoverImg6 from "@/assets/Food12.png";
import img7 from "@/assets/Food13.png";
import hoverImg7 from "@/assets/Food14.png";
import img8 from "@/assets/Food15.png";
import hoverImg8 from "@/assets/Food16.png";

const HoverDiv = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliderRef = useRef(null);
  const scrollAmount = 300; 
  const titles = [
    "Weight Loss",
    "Weight Gain",
    "Maintenance",
    "Kids Flourish",
    "Skin Care",
    "Pregna Care",
    "Pre-Wedding",
    "Body Building"
  ];
  const images = [
    { imgSrc: img1, hoverImgSrc: hoverImg1 },
    { imgSrc: img2, hoverImgSrc: hoverImg2 },
    { imgSrc: img3, hoverImgSrc: hoverImg3 },
    { imgSrc: img4, hoverImgSrc: hoverImg4 },
    { imgSrc: img5, hoverImgSrc: hoverImg5 },
    { imgSrc: img6, hoverImgSrc: hoverImg6 },
    { imgSrc: img7, hoverImgSrc: hoverImg7 },
    { imgSrc: img8, hoverImgSrc: hoverImg8 },
  ];

  // Duplicate the array to create the infinite scroll effect
  const doubledTitles = [...titles, ...titles];
  const doubledImages = [...images, ...images];

  useEffect(() => {
    let intervalId;
    if (hoveredIndex === null) {
      intervalId = setInterval(() => {
        if (sliderRef.current) {
          const maxScrollLeft = sliderRef.current.scrollWidth / 2; // Adjust to half of the scroll width

          if (sliderRef.current.scrollLeft >= maxScrollLeft) {
            sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }, 3000); // Auto-scroll every 3 seconds
    }

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [hoveredIndex]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index % titles.length); // Adjust for duplicated array
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="p-24 relative bg-white">
        <h2 className="text-3xl text-center text-[#4A6213] font-semibold mb-4 mt-8">
          Our Programs
        </h2>
        <p className="text-black text-center text-[24px] mb-4">
          Programs designed to fit all your nutritional needs. Our plans are
          customized to ensure you get the right nutrition based on your
          personal preferences and health goals.
        </p>
        <div className="relative">
          <div
            className="flex overflow-x-auto gap-4 mask-image scrollbar-hide"
            ref={sliderRef}
            style={{ scrollBehavior: "smooth" }}
          >
            <style jsx>{`
              /* Hide scrollbar for Chrome, Safari, and Opera */
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              /* Hide scrollbar for IE, Edge, and Firefox */
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            {doubledTitles.map((title, index) => (
              <article
                key={index}
                className="relative flex flex-col gap-4 m-auto"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative w-96 h-[530px] overflow-hidden bg-white shadow-lg">
                  <div
                    className={`relative transition-all duration-500 ease-in-out ${
                      hoveredIndex === (index % titles.length)
                        ? "scale-x-110 scale-y-100"
                        : "scale-x-90 scale-y-100"
                    }`}
                  >
                    {hoveredIndex === (index % titles.length) ? (
                      <Image
                        src={doubledImages[index].hoverImgSrc}
                        alt={title}
                        width={320}
                        height={240}
                        className="object-cover w-full transition-all duration-500 ease-in-out"
                      />
                    ) : (
                      <Image
                        src={doubledImages[index].imgSrc}
                        alt={title}
                        width={320}
                        height={240}
                        className="object-cover w-full transition-all duration-500 ease-in-out"
                      />
                    )}
                  </div>
                  <div className="p-2">
                    <h2 className="text-xl text-black text-center font-semibold">
                      {title}
                    </h2>
                    <div className="flex items-center justify-center">
                      <button
                        className={`mt-2 w-40 bg-[#9AC435] border-white border-2 rounded-2xl shadow-2xl px-4 py-2 text-white transition-all duration-300 ease-in-out ${
                          hoveredIndex === (index % titles.length) ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        Know more &gt;
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverDiv;
