import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import img from "@/assets/HowWorks1.png";
import img1 from "@/assets/HowWorks2.png";
import img2 from "@/assets/Arrow3.png";
import img3 from "@/assets/Arrow2.png";
import img4 from "@/assets/HowWorks3.png";
import img5 from "@/assets/HowWorks4.png";
import img6 from "@/assets/HowWorks5.png";
import img7 from "@/assets/HowWorks6.png";
export default function HowItWorks() {
  return (
    <>
      <div className="bg-[#9AC435] min-h-96 lg:py-8 flex justify-center items-center">
        <div className="bg-[#E9E9E9] flex h-auto w-full justify-center items-center">
          <div className="flex-1 p-12 ml-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-[#637F22]">So..</span> How does <br />{" "}
              DietGhar works?
            </h2>
            <p className="mt-4 text-lg text-gray-600 mb-24">
              Lorem ipsum dolor sit amet consectetur. Amet eu iaculis viverra
              egestas ullamcorper eleifend neque bibendum arcu. Aliquam lacinia
              id sagittis dignissim.
            </p>
            <div className="mt-6">
              <button className="flex bg-[#9AC435] text-white px-6 py-3 rounded-full shadow-lg border border-white  hover:bg-[#9AC435] transition duration-200">
                Start 7 days free trial
                <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 relative py-4 items-center justify-center">
            <Image src={img} className="h-3/4 w-3/4" alt="DietGhar" />
          </div>
        </div>
      </div>
      <div className="bg-[#F1F1F1] flex h-auto w-full justify-center items-center mt-4">
        <div className="hidden w-1/4 md:flex md:w-1/2 relative py-4 items-center justify-center">
          <Image src={img1} className="h-1/2 w-1/2" alt="DietGhar" />
        </div>
        <div className="flex-1 p-12  place-items-end">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 place-items-end text-right">
          &#8220;We provide planning for a better lifestyle with the help of good
            <span className="text-[#4A6213]"> diet plans</span>&#8221;
          </h2>
          <div className="mt-6 flex justify-end">
            <button className="flex bg-[#9AC435] text-white px-6 py-3 rounded-full shadow-lg border border-white hover:bg-[#9AC435] transition duration-200">
              View Plans
              <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-white px-12">
        <h1 className="text-black text-center text-3xl mb-24 font-semibold">
          Get Started in 4 Easy Steps
        </h1>
        <div className=" flex h-auto justify-center items-center">
          <div className="flex-1 p-12 w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">
              &#x2022; Share Your Details
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Provide us with your age&#44; weight&#44; height&#44; and any health
              conditions or dietary restrictions.
            </p>
          </div>
          <div className="hidden w-1/4 md:flex md:w-1/2 justify-center"></div>
        </div>
        <div className=" flex h-auto w-full justify-center items-center">
          <div className="hidden w-1/4 md:flex md:w-1/2 justify-center">
            <Image src={img2} className="h-60 w-60" alt="DietGhar" />
          </div>
          <div className="flex-1 p-12 ">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 ">
              &#x2022; Receive Your Personalized Plan
            </h2>
            <p className="text-lg text-gray-600">
              Get a customized weekly diet plan that includes detailed meal
              plans with calorie&#44; fat&#44; and carbohydrate counts.
            </p>
          </div>
        </div>
        <div className=" flex h-auto w-full justify-center items-center">
          <div className="flex-1 px-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 ">
              &#x2022; Follow Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Enjoy stress-free eating with our easy-to-follow diet charts&#44;
              ensuring you get the right nutrition every day.
            </p>
          </div>
          <div className="hidden w-1/4 md:flex md:w-1/2 justify-start">
            <Image src={img3} className="h-60 w-60" alt="DietGhar" />
          </div>
        </div>
        <div className=" flex h-auto w-full justify-center items-center">
          <div className="hidden w-1/4 md:flex md:w-1/2 justify-center">
            <Image src={img2} className="h-60 w-60" alt="DietGhar" />
          </div>
          <div className="flex-1 p-12 ">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 ">
              &#x2022; Stay Fit and Healthy
            </h2>
            <p className="text-lg text-gray-600">
              Focus on your overall wellness with our expert advice on diet&#44;
              yoga&#44; recipes&#44; and fitness routines.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-[#FBFFF2] p-12">
        <h1 className="text-black text-center text-3xl mb-4 font-semibold">
          How DietGhar Works
        </h1>
        <p className="text-black text-center text-lg mb-24 w-2/5 items-center justify-center mx-auto">
          At DietGhar&#44; we are dedicated to helping you achieve optimal health
          and wellness through personalized diet plans. Here&apos;s how we do it:
        </p>
        <div className="flex h-auto w-full justify-center items-center px-24">
          <div className="w-3/4 px-24">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              &#x2022; Initial Assessment:
            </h2>
            <p className="text-lg text-gray-600">
              We start by gathering essential information about you&#44; including
              your age&#44; weight&#44; height&#44; and any existing health conditions or
              dietary preferences.
            </p>
          </div>
          <div className="hidden w-1/4 md:flex justify-center">
            <Image src={img4} className="" alt="DietGhar" />
          </div>
        </div>
        <div className="flex h-auto w-full justify-center items-center px-24">
          <div className="hidden w-1/4 md:flex justify-center">
            <Image src={img5} className="" alt="DietGhar" />
          </div>
          <div className="w-3/4 px-24">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              &#x2022; Customized Diet Plan:
            </h2>
            <p className="text-lg text-gray-600">
              Based on your details&#44; we create a weekly diet chart that outlines
              every meal with specific nutritional information like calories&#44;
              fats&#44; carbohydrates&#44; and more.
            </p>
          </div>
        </div>
        <div className="flex h-auto w-full justify-center items-center px-24">
          <div className="w-3/4 px-24">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              &#x2022; Ease and Convenience:
            </h2>
            <p className="text-lg text-gray-600">
              With our comprehensive meal plans&#44; you can enjoy your food without
              the hassle of planning and worrying about nutritional content. We
              handle all the details for you.
            </p>
          </div>
          <div className="hidden w-1/4 md:flex justify-center">
            <Image src={img6} className="" alt="DietGhar" />
          </div>
        </div>
        <div className="flex h-auto w-full justify-center items-center px-24">
          <div className="hidden w-1/4 md:flex justify-center">
            <Image src={img7} className="" alt="DietGhar" />
          </div>
          <div className="w-3/4 px-24">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              &#x2022; Holistic Health Focus:
            </h2>
            <p className="text-lg text-gray-600">
              Our services go beyond diet planning. We emphasize overall
              well-being by incorporating yoga practices&#44; healthy recipes&#44; and
              fitness tips into your plan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
