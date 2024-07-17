"use client";
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

export default function PricingDiv() {
  const [showGreenCardOnly, setShowGreenCardOnly] = useState(false);

  const toggleGreenCard = () => {
    setShowGreenCardOnly(!showGreenCardOnly);
  };

  return (
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
            "At DietGhar, we lead in promoting health with personalized diet
            plans, valuing honesty, integrity, efficiency, and genuine care for
            our clients."
          </p>

          <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-black mr-4">Monthly</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={toggleGreenCard}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <span className="text-sm font-medium text-black ml-4">Yearly</span>
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
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <SiTicktick className="text-3xl text-green-500 mr-8" />
                    Diet Plan
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <SiTicktick className="text-3xl text-green-500 mr-8" />
                    Workout Plans
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <RxCrossCircled className="text-3xl text-red mr-8" />
                    Customised Plans
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <SiTicktick className="text-3xl text-green-500 mr-8" />
                    Diet Recipes
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <RxCrossCircled className="text-3xl text-red mr-8" />
                    Natural Health Care
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
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
                    <p className="text-xl font-semibold">Rs 2,999/-</p>
                    <p>3 months</p>
                  </button>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5  border-0 border-gray-200">
                  <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Diet Plan
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Workout Plans
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Customised Plans
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Diet Recipes
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                    <SiTicktick className="text-3xl text-white mr-8" />
                    Natural Health Care
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
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
                    <p className="text-xl font-semibold">1,199/-</p>
                    <p>Per month</p>
                  </button>
                </div>

                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <SiTicktick className="text-3xl text-green-500 mr-8" />
                    Diet Plan
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <SiTicktick className="text-3xl text-green-500 mr-8" />
                    Workout Plans
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <SiTicktick className="text-3xl text-green-500 mr-8" />
                    Customised Plans
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <SiTicktick className="text-3xl text-green-500 mr-8" />
                    Diet Recipes
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
                    <SiTicktick className="text-3xl text-green-500 mr-8" />
                    Natural Health Care
                  </li>
                  <li className="inline-flex items-center block w-full mb-4 ml-5 font-semibold text-left border-solid">
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
                  <p className="text-xl font-semibold">Rs 12,000/-</p>
                  <p>Per Year</p>
                </button>
              </div>
              <ul className="flex-1 p-0 mt-4 ml-5  border-0 border-gray-200">
                <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                  <SiTicktick className="text-3xl text-white mr-8" />
                  Diet Plan
                </li>
                <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                  <SiTicktick className="text-3xl text-white mr-8" />
                  Workout Plans
                </li>
                <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                  <SiTicktick className="text-3xl text-white mr-8" />
                  Customised Plans
                </li>
                <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                  <SiTicktick className="text-3xl text-white mr-8" />
                  Diet Recipes
                </li>
                <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
                  <SiTicktick className="text-3xl text-white mr-8" />
                  Natural Health Care
                </li>
                <li className="inline-flex items-center block w-full mb-4 ml-5 text-xl text-left border-solid">
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
  );
}
