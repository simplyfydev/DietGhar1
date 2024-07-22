"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import img from "@/assets/plans.png";
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import img2 from "@/assets/plans2.png";
import { FiUser, FiUsers, FiHelpCircle } from "react-icons/fi";
export default function Page() {
  const [showGreenCardOnly, setShowGreenCardOnly] = useState(false);
  const toggleGreenCard = () => {
    setShowGreenCardOnly(!showGreenCardOnly);
  };
  return (
    <div>
      <Navbar />
      <div className="bg-[#9AC435] min-h-96 lg:py-8 flex justify-center items-center">
        <div className="bg-[#E9E9E9] flex h-auto w-full justify-center items-center">
          <div className="flex-1 p-12 ml-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Create Your Account Today
            </h2>
            <p className="mt-4 text-lg text-gray-600 mb-24">
              Experience DietGhar for yourself&#44; completely risk-free&#44; with our
              30-day.
            </p>
            <div className="mt-6">
              <button className="flex bg-[#9AC435] text-white px-6 py-3 rounded-full shadow-lg border border-white  hover:bg-[#9AC435] transition duration-200">
                Start 7 days free trial
                <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 relative">
            <Image src={img} alt="DietGhar" />
          </div>
        </div>
      </div>
      <section className="p-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16">
        <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
          <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2
              id="pricing"
              className="box-border m-0 text-3xl leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl"
            >
              Our Pricing Plans
            </h2>
            <p className="box-border mt-4 text-xl text-gray-900 border-solid sm:text-2xl">
              &#8220;At DietGhar&#44; we lead in promoting health with
              personalized diet plans&#44; valuing honesty&#44; integrity&#44;
              efficiency&#44; and genuine care for our clients.&#8221;
            </p>

            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-black mr-4">
                Monthly
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onClick={toggleGreenCard}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
              <span className="text-sm font-medium text-black ml-4">
                Yearly
              </span>
              <span className="ml-2 px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded">
                10% OFF
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            {!showGreenCardOnly && (
              <>
                <div className="relative z-10 flex flex-col items-center max-w-md mx-auto my-0 shadow-2xl rounded-lg lg:-mr-3 sm:my-0  md:my-8">
                  <div className="flex justify-between p-6 w-full shadow-xl">
                    <div>
                      <h3 className="m-0 text-md leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        Diet Essentials
                      </h3>
                      <div className="flex items-end mt-2 leading-7 text-gray-900 ">
                        <p className="box-border m-0 border-solid text-md">
                          Trail
                        </p>
                      </div>
                    </div>

                    <button className=" bg-[#729028] text-white h-20 w-58 px-10 py-2">
                      <p className="text-xl font-semibold">Free</p>
                      <p>Trail</p>
                    </button>
                  </div>

                  <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <SiTicktick className="text-3xl text-green-500 mr-8" />
                      Diet Plan
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <SiTicktick className="text-3xl text-green-500 mr-8" />
                      Workout Plans
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <RxCrossCircled className="text-3xl text-red mr-8" />
                      Customised Plans
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <SiTicktick className="text-3xl text-green-500 mr-8" />
                      Diet Recipes
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <RxCrossCircled className="text-3xl text-red mr-8" />
                      Natural Health Care
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <RxCrossCircled className="text-3xl text-red mr-8" />
                      Yoga Tips
                    </li>
                  </ul>
                  <div className="text-center mt-8 mb-6 ">
                    <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 hover:bg-[#9AC435] transition border-2 shadow-lg border-white ">
                      View Meal Plans
                      <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
                    </button>
                  </div>
                </div>
                <div
                  className={`relative z-20 flex flex-col items-center max-w-md mx-auto my-0 bg-[#68802F] text-white shadow-2xl rounded-lg ${
                    showGreenCardOnly ? "col-span-3" : ""
                  }`}
                >
                  <div className="flex justify-between p-6 w-full shadow-xl">
                    <div className="text-white">
                      <h3 className="m-0 text-md leading-tight tracking-tight  border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        Diet Essentials
                      </h3>
                      <div className="flex items-end mt-2 leading-7 ">
                        <p className="box-border m-0 border-solid text-md">
                          Most Popular
                        </p>
                      </div>
                    </div>

                    <button className=" bg-[#729028] text-white h-20 w-48 px-4 py-2">
                      <p className="text-xl font-semibold">Rs 2&#44;999/-</p>
                      <p>3 months</p>
                    </button>
                  </div>
                  <ul className="flex-1 p-0 mt-4 ml-5  border-0 border-gray-200">
                    <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                      <SiTicktick className="text-3xl text-white mr-8" />
                      Diet Plan
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                      <SiTicktick className="text-3xl text-white mr-8" />
                      Workout Plans
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                      <SiTicktick className="text-3xl text-white mr-8" />
                      Customised Plans
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                      <SiTicktick className="text-3xl text-white mr-8" />
                      Diet Recipes
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                      <SiTicktick className="text-3xl text-white mr-8" />
                      Natural Health Care
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                      <SiTicktick className="text-3xl text-white mr-8" />
                      Yoga Tips
                    </li>
                  </ul>
                  <div className="text-center mt-4 mb-6 ">
                    <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 hover:bg-[#9AC435] transition border-2 shadow-lg border-white ">
                      View Meal Plans
                      <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
                    </button>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col items-center max-w-md mx-auto my-0 shadow-2xl rounded-lg lg:-mr-3 sm:my-0  md:my-8">
                  <div className="flex justify-between p-6 w-full shadow-xl">
                    <div>
                      <h3 className="m-0 text-sm leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                        Diet Essentials
                      </h3>
                      <div className="flex items-end mt-2 leading-7 text-gray-900 ">
                        <p className="box-border m-0 border-solid text-md">
                          Popular
                        </p>
                      </div>
                    </div>

                    <button className=" bg-[#729028] text-white h-20 w-58 px-8 py-2">
                      <p className="text-xl font-semibold">1&#44;199/-</p>
                      <p>Per month</p>
                    </button>
                  </div>

                  <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <SiTicktick className="text-3xl text-green-500 mr-8" />
                      Diet Plan
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <SiTicktick className="text-3xl text-green-500 mr-8" />
                      Workout Plans
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <SiTicktick className="text-3xl text-green-500 mr-8" />
                      Customised Plans
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <SiTicktick className="text-3xl text-green-500 mr-8" />
                      Diet Recipes
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <SiTicktick className="text-3xl text-green-500 mr-8" />
                      Natural Health Care
                    </li>
                    <li className="inline-flex items-center  w-full mb-4 ml-5 font-semibold text-left border-solid">
                      <RxCrossCircled className="text-3xl text-red mr-8" />
                      Yoga Tips
                    </li>
                  </ul>
                  <div className="text-center mt-8 mb-6 ">
                    <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 hover:bg-[#9AC435] transition border-2 shadow-lg border-white ">
                      View Meal Plans
                      <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
                    </button>
                  </div>
                </div>
              </>
            )}
            {showGreenCardOnly && (
              <div
                className={`relative z-20 flex flex-col items-center max-w-md mx-auto my-0 bg-[#68802F] text-white shadow-2xl rounded-lg ${
                  showGreenCardOnly ? "col-span-3" : ""
                }`}
              >
                <div className="flex justify-between p-6 w-full shadow-xl">
                  <div className="text-white">
                    <h3 className="m-0 text-md leading-tight tracking-tight  border-0 border-gray-200 sm:text-3xl md:text-4xl">
                      Diet <br /> Essentials
                    </h3>
                    <div className="flex items-end mt-2 leading-7 ">
                      <p className="box-border m-0 border-solid text-md">
                        Most Popular
                      </p>
                    </div>
                  </div>

                  <button className=" bg-[#729028] text-white h-20 w-58 px-4 py-2">
                    <p className="text-xl font-semibold">Rs 12&#44;000/-</p>
                    <p>Per Year</p>
                  </button>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5  border-0 border-gray-200">
                  <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Diet Plan
                  </li>
                  <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Workout Plans
                  </li>
                  <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Customised Plans
                  </li>
                  <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Diet Recipes
                  </li>
                  <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Natural Health Care
                  </li>
                  <li className="inline-flex items-center  w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Yoga Tips
                  </li>
                </ul>
                <div className="text-center mt-12 mb-6 ">
                  <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 hover:bg-[#9AC435] transition border-2 shadow-lg border-white ">
                    View Meal Plans
                    <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="p-16 bg-white text-black">
        <h1 className="text-4xl mb-2 font-semibold">Why Choose DietGhar?</h1>
        <h2 className="text-2xl mb-8 text-[#A5A3A3]">Discover Our Approach</h2>
        <p className="text-lg ">
          We at DietGhar aim overall benefit of our clients. Along with Physical
          health&#44; Mental health also plays a major role in your physical
          well-being. Our motive is to make you feel comfortable in your own
          skin and yet motivate you to do better by amending simple dietary
          habits on regular basis. Our meal plans are completely home-based and
          simple to cook and have no liquid&#44; crash&#44; Fad diets included in the
          plan. Basic funda is to have simple "Ghar ka khana" in right portions&#44;
          on right timings and yet lose weight eating and balancing everything
          possible.
        </p>
        <p className="text-lg">
          Our Team experts provide you with personal attention by resolving your
          queries on daily basis and taking weekly weight checks. We want you to
          look Good and feel Good as well.
        </p>
      </div>
      <div className="relative bg-[#F9FBE7] py-32 flex justify-center items-center ">
        <Image
          src={img2}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 text-center ">
          <div className="flex justify-center space-x-24 mt-8">
            <button className="bg-[#9AC435] border-2 border-white text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#85A32F] transition duration-200 flex items-center space-x-2">
              <FiUser size={24} />
              <span>Contact Us</span>
            </button>
            <button className="bg-[#9AC435] border-2 border-white text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#85A32F] transition duration-200 flex items-center space-x-2">
              <FiUsers size={24} />
              <span>Explore About Us</span>
            </button>
            <button className="bg-[#9AC435] border-2 border-white text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#85A32F] transition duration-200 flex items-center space-x-2">
              <FiHelpCircle size={24} />
              <span>Explore FAQs</span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-24 bg-white">

      </div>
      <Footer />
    </div>
  );
}
