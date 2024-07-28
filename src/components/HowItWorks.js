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
import img8 from "@/assets/HowWorks7.png";
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
            &#8220;We provide planning for a better lifestyle with the help of
            good
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
              Provide us with your age&#44; weight&#44; height&#44; and any
              health conditions or dietary restrictions.
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
          At DietGhar&#44; we are dedicated to helping you achieve optimal
          health and wellness through personalized diet plans. Here&apos;s how
          we do it:
        </p>
        <div className="flex h-auto w-full justify-center items-center px-24">
          <div className="w-3/4 px-24">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              &#x2022; Initial Assessment:
            </h2>
            <p className="text-lg text-gray-600">
              We start by gathering essential information about you&#44;
              including your age&#44; weight&#44; height&#44; and any existing
              health conditions or dietary preferences.
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
              Based on your details&#44; we create a weekly diet chart that
              outlines every meal with specific nutritional information like
              calories&#44; fats&#44; carbohydrates&#44; and more.
            </p>
          </div>
        </div>
        <div className="flex h-auto w-full justify-center items-center px-24">
          <div className="w-3/4 px-24">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              &#x2022; Ease and Convenience:
            </h2>
            <p className="text-lg text-gray-600">
              With our comprehensive meal plans&#44; you can enjoy your food
              without the hassle of planning and worrying about nutritional
              content. We handle all the details for you.
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
              well-being by incorporating yoga practices&#44; healthy
              recipes&#44; and fitness tips into your plan.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-16">
        <h1 className="text-black text-center text-2xl">
          Join DietGhar today and take the first step towards a healthier&#44;
          happier you!
        </h1>
        <div className="mt-6 flex items-center justify-center">
          <button className="flex bg-[#9AC435] text-white px-6 py-3 rounded-full shadow-lg border border-white  hover:bg-[#9AC435]">
            Start 7 days free trial
            <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
          </button>
        </div>
      </div>
      <div className="bg-[#FBFFF2] py-12 px-16">
        <h1 className="text-black text-2xl">You should know</h1>
        <div className="mt-6 flex items-center justify-center">
          <p>
            &#8220;Writing down a plan doubles the chance of success! In the
            book Atomic Habits&#44; author James Clear talks about a study in
            the British Journal of Health Psychology that showed 91% of people
            who wrote down their intention on a goal (in their case&#44;
            exercise) followed through. This was more than double that of people
            who didn&apos;t write it down. DietGhar helps you set your
            intentions every single week by generating specific meal plans for
            you to follow!&#8221;
          </p>
        </div>
      </div>
      <div className="p-16">
        <h1 className="text-2xl ">How its work:</h1>
        <div className="flex justify-center items-center mt-12">
          <iframe
            width="800"
            height="514"
            src="https://www.youtube.com/embed/SWj-mP07VMk"
            title="Top 6 Weight Loss Frequently Asked Questions Answered!!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="flex bg-[#F1F1F1] mb-6">
        <div className="p-16 w-2/3">
          <h1 className="text-2xl ">Master Your Nutrition with DietGhar</h1>
          <p className="mr-36 text-lg mt-12">
            &#8220;Try DietGhar and experience the magic of personalized&#44;
            stress-free meal planning for a healthier&#44; happier you!&#8221;
          </p>
        </div>
        <div className="w-1/3">
          <Image src={img8} className="w-54 h-54" />
        </div>
      </div>
      
    </>
  );
}
