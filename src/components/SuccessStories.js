"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import insta from "@/assets/insta.png";
import build from "@/assets/building.png";
import fb from "@/assets/Facebook.png";
import green from "@/assets/greenbg.png";
import img1 from "@/assets/instabg.png";
import img2 from "@/assets/fbbg.png";
import img3 from "@/assets/weightbg.png";
import img4 from "@/assets/registerbg.png";
import "@/components/style1.css";

const images = [img1, img2, img3, img4];

import Carousal from "./Carousal";
import Carousal1 from "./Carousal1";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import text from "@/assets/text.png";

export default function SuccessStories() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 50); // Wait for the fade-out to complete
    }, 4000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="relative flex w-full h-screen">
        <div
          className="absolute top-0 left-0"
          style={{ width: "70%", height: "90%" }}
        >
          <Image src={green} alt="Green Background" className="h-full w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 mr-52 mb-24">
            <Image src={text} />
            <p className="text-center mt-4 px-12">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet&#44;
              consectetur&#44; adipisci velit Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet&#44; consectetur&#44; adipisci velit
            </p>
            <div className="flex mt-32 space-x-4">
              <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 hover:bg-[#9AC435] transition border-2 shadow-lg border-white">
                Start 7 days free trial
                <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
              </button>
              <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 transition border-2 shadow-lg border-white">
                Review Us on Google
                <FcGoogle className="text-xl ml-2 mt-[2px]" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 transition-opacity duration-1000"
          style={{ width: "40%", height: "90%" }}
        >
          <Image
            src={images[currentImageIndex]}
            alt="Slideshow Background"
            className={`h-full w-full ${fadeIn ? "fade-in" : "fade-out"}`}
          />
        </div>
      </div>

      <div className="m-12">
        <div className="flex items-center justify-center">
          <div className="bg-[#F1F1F1] p-8 m-4 w-full max-w-6xl">
            <h2 className="text-2xl font-bold text-center mb-4">Our Journey</h2>
            <p className="text-center mb-4">
              We started our venture with a small idea of providing people with
              easy access to trusted and affordable dietary guidance. We have
              been one of the pioneers in providing online consultation to
              thousands of clients globally.
            </p>
            <p className="text-center mb-4">
              When you sign up for our services&#44; you not only gain a diet
              consultant&#44; but also become a part of a bigger community&#44;
              where each and every client gains a healthy mentor.
            </p>
            <p className="text-center mb-4">
              Our journey started with providing only diet plans&#44; but as our
              community grew bigger&#44; we started providing our clients with
              workout tips&#44; along with bonus of beauty tips and tricks
              curated for you.
            </p>
            <p className="text-center mb-4">
              You guys are our assets and we believe in nurturing and
              transforming each and every one of you into your healthiest self.
            </p>
            <p className="text-center font-bold">
              Stay Healthy and Happy with DietGhar.
            </p>
          </div>
        </div>
      </div>
      <main className="grid content-center overflow-hidden gap-4 w-full text-navy bg-white">
        <Carousal />
      </main>
      <div>
        <div className="flex justify-center">
          <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 transition border-2 shadow-lg border-white">
            Review Us on Google
            <FcGoogle className="text-xl ml-2 mt-[2px]" />
          </button>
        </div>
      </div>
      <Carousal1 />
      <h1 className="text-4xl text-bold text-center text-black mb-12">
        People love DietGhar
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-full max-w-xs h-80 bg-white border rounded-lg">
            <div className="flex flex-col items-center p-4">
              <div className="border bg-white rounded-full p-4">
                <Image className="" src={insta} alt="Instagram profile image" />
              </div>
              <h5 className="mt-4 mb-1 text-4xl text-[#0D7A01] font-semibold">
                8K+
              </h5>
              <p className="text-lg">Instagram Followers</p>
              <span className="text-[#212121]">
                https://www.instagram.com/dietghar/
              </span>
            </div>
          </div>
          <div className="w-full max-w-xs h-80 bg-white border rounded-lg">
            <div className="flex flex-col items-center p-4">
              <div className="border bg-white rounded-full p-4">
                <Image className="" src={build} alt="Instagram profile image" />
              </div>
              <h5 className="mt-4 mb-1 text-4xl text-[#0D7A01] font-semibold">
                2016
              </h5>
              <p className=" text-3xl mt-2">We Started</p>
            </div>
          </div>
          <div className="w-full max-w-xs h-80 bg-white border rounded-lg">
            <div className="flex flex-col items-center p-4">
              <div className="border bg-white rounded-full p-4">
                <Image className="" src={fb} alt="Instagram profile image" />
              </div>
              <h5 className="mt-4 mb-1 text-4xl text-[#0D7A01] font-semibold">
                80K+
              </h5>
              <p className="text-lg">Facebook Followers</p>
              <span className="text-[#212121]">
                https://www.facebook.com/DietGhar/
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-12">
        <div className="flex items-center justify-center">
          <div className="bg-[#FBFFF2] p-8 m-4 w-full max-w-6xl">
            <div className="border border-[#D5E5AD] p-12">
              <h2 className="text-lg text-center mb-4">
                We not just count in numbers but also in Smiles!! Your Good
                health is our greatest asset.
              </h2>
              <p className="text-center text-2xl mb-4 font-semibold">
                OUR GROWTH OVER THE YEARS
              </p>
              <div className="flex justify-around text-center mt-12">
                <div>
                  <p className="text-3xl text-[#4A6213]  mb-2">10000+</p>
                  <p>Registered Clients</p>
                </div>
                <div>
                  <p className="text-3xl text-[#4A6213] mb-2">8+</p>
                  <p>Year in Business</p>
                </div>
                <div>
                  <p className="text-3xl text-[#4A6213] mb-2">8500+</p>
                  <p>Kgs Weight Lost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
