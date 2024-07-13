"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Skin2 from "@/assets/Skin1.png";
import Skin3 from "@/assets/Skin2.png";
import Skin4 from "@/assets/Skin3.png";
import Skin5 from "@/assets/Skin4.png";
import Skin6 from "@/assets/Skin5.png";
import { PiGreaterThan } from "react-icons/pi";

export default function FirstCarousal() {
  return (
    <section className="bg-[#ffffff] py-8"> {/* Reduced overall padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
        >
          <div className="relative flex w-full text-black flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
            <div className="md:w-[60%] p-4 flex flex-col">
              <h2 className="text-2xl font-semibold font-Redressed text-left text-brown-600">
                Hair Care Pack For Healthy and Dashing Hairs
              </h2>
              <div>
                <p className="mb-4 mt-4 text-left">
                  Lorem ipsum dolor sit amet consectetur. Volutpat ac tincidunt
                  risus mollis lectus odio et nunc varius. Arcu gravida
                  imperdiet pharetra viverra tempor. Auctor tristique tellus
                  augue orci.
                </p>
                <div className="flex flex-col">
                  <button className="w-44 bg-[#9AC435] text-white rounded-full px-4 py-2 border-2 shadow-lg border-white flex items-center">
                    Know more
                    <PiGreaterThan className="h-6 ml-4" />
                  </button>
                  <p className="text-gray-500 mt-24 text-left">www.dietghar.com</p>
                </div>
              </div>
            </div>
            <div className="md:ml-auto">
              <Image src={Skin2}
              className="w-72 h-80"
              />
            </div>
          </div>
          <div className="relative flex w-full text-black flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
            <div className="md:w-[60%] p-4 flex flex-col ">
              <h2 className="text-2xl font-semibold font-Redressed text-left text-brown-600 mb-4">
                Hair Care Pack For Healthy and Dashing Hairs
              </h2>
              <div>
                <p className="mb-4 text-left">
                  Lorem ipsum dolor sit amet consectetur. Volutpat ac tincidunt
                  risus mollis lectus odio et nunc varius. Arcu gravida
                  imperdiet pharetra viverra tempor. Auctor tristique tellus
                  augue orci.
                </p>
                <div className="flex flex-col">
                  <button className="w-44 bg-[#9AC435] text-white rounded-full px-4 py-2 border-2 shadow-lg border-white flex items-center">
                    Know more
                    <PiGreaterThan className="h-6 ml-4" />
                  </button>
                  <p className="text-gray-500 text-left mt-24">www.dietghar.com</p>
                </div>
              </div>
            </div>
            <div className="md:w-[40%] h-full md:ml-auto">
              <div className="h-full">
                <Image
                  src={Skin3}
                  alt="Skin care ingredients"
                  className="w-full h-full rounded-lg object-contain"
                  layout="responsive"
                  height={1200}
                />
              </div>
            </div>
          </div>
          <div className="relative flex w-full text-black flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
            <div className="md:w-[60%] p-4 flex flex-col">
              <h2 className="text-2xl font-semibold font-Redressed text-left text-brown-600">
              Monthly Cycle tracker
              </h2>
              <div>
                <p className="mb-4 mt-4 text-left">
                  Lorem ipsum dolor sit amet consectetur. Volutpat ac tincidunt
                  risus mollis lectus odio et nunc varius. Arcu gravida
                  imperdiet pharetra viverra tempor. Auctor tristique tellus
                  augue orci.
                </p>
                <div className="flex flex-col">
                  <button className="w-44 bg-[#9AC435] text-white rounded-full px-4 py-2 border-2 shadow-lg border-white flex items-center">
                    Know more
                    <PiGreaterThan className="h-6 ml-4" />
                  </button>
                  <p className="text-gray-500 mt-24 text-left">www.dietghar.com</p>
                </div>
              </div>
            </div>
            <div className="md:ml-auto">
              <Image src={Skin4}
              className="w-72 h-80"
              />
            </div>
          </div>
          <div className="relative flex w-full text-black flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
            <div className="md:w-[60%] p-4 flex flex-col">
              <h2 className="text-2xl font-semibold font-Redressed text-left text-brown-600">
              Calories Counter
              </h2>
              <div>
                <p className="mb-4 mt-4 text-left">
                  Lorem ipsum dolor sit amet consectetur. Volutpat ac tincidunt
                  risus mollis lectus odio et nunc varius. Arcu gravida
                  imperdiet pharetra viverra tempor. Auctor tristique tellus
                  augue orci.
                </p>
                <div className="flex flex-col">
                  <button className="w-44 bg-[#9AC435] text-white rounded-full px-4 py-2 border-2 shadow-lg border-white flex items-center">
                    Know more
                    <PiGreaterThan className="h-6 ml-4" />
                  </button>
                  <p className="text-gray-500 mt-24 text-left">www.dietghar.com</p>
                </div>
              </div>
            </div>
            <div className="md:ml-auto">
              <Image src={Skin5}
              className="w-72 h-80"
              />
            </div>
          </div>
          <div className="relative flex w-full text-black flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
            <div className="md:w-[60%] p-4 flex flex-col ">
              <h2 className="text-2xl font-semibold font-Redressed text-left text-brown-600 mb-4">
              Water Intake Reminder
              </h2>
              <div>
                <p className="mb-4 text-left">
                  Lorem ipsum dolor sit amet consectetur. Volutpat ac tincidunt
                  risus mollis lectus odio et nunc varius. Arcu gravida
                  imperdiet pharetra viverra tempor. Auctor tristique tellus
                  augue orci.
                </p>
                <div className="flex flex-col">
                  <button className="w-44 bg-[#9AC435] text-white rounded-full px-4 py-2 border-2 shadow-lg border-white flex items-center">
                    Know more
                    <PiGreaterThan className="h-6 ml-4" />
                  </button>
                  <p className="text-gray-500 text-left mt-24">www.dietghar.com</p>
                </div>
              </div>
            </div>
            <div className="md:w-[40%] h-full md:ml-auto">
              <div className="h-full">
                <Image
                  src={Skin6}
                  alt="Skin care ingredients"
                  className="w-full h-full rounded-lg object-contain"
                  layout="responsive"
                  height={1200}
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
