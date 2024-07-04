"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Garima from "@/assets/GarimaReview.png";
import Mansi from "@/assets/MansiReview.png";
import Neha from "@/assets/NehaReview.png";
import Richa from "@/assets/RichaReview.png";
import Rina from "@/assets/RinaReview.png";
import Shalani from "@/assets/ShalaniReview.png";
import { FaQuoteLeft } from "react-icons/fa";

export default function Div10() {
  return (
    <section className="bg-[#ffffff] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-gray-900 sm:text-4xl mb-8">
          Listen from our Clients!
        </h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          showStatus={false}
        >
          <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg p-4">
            <div className="flex border border-[#95BB3A] rounded-xl p-4">
              <div className="w-1/4">
                <Image src={Shalani} alt="Garima" />
              </div>
              <div className="w-3/4 ml-4 rounded-lg">
                <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                  <h1 className="text-gray-600 text-left">
                    <p className=" flex leading-6 text-xl">
                      <FaQuoteLeft className="text-green-200 h-4 w-4 mr-2" />
                      Hello,
                    </p>
                    <p className="mt-4">
                      {" "}
                      I am specially sending this message to say thank you.
                    </p>
                    <p className="mt-4">
                      I started my journey with DietGhar approximately 45 days
                      back when I was 78 Kgs and today I am 70 Kgs with DietGhar
                      team support and diet plan. The way they give diet plans
                      which are very easy to follow. I never feel hungry with
                      loads of variety and the kitchen planner is always handy
                      as I don't need to think what needs to be cooked.
                    </p>
                    <p className="mt-4">
                      Actually, Thank you is not enough for this...
                    </p>
                    <p className="mt-4">
                      I will definitely refer DietGhar to my Friends & Family.
                    </p>
                  </h1>
                </div>

                <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                  Shalini Prateek
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg p-4">
            <div className="flex border border-[#95BB3A] rounded-xl p-4">
              <div className="w-1/4">
                <Image src={Mansi} alt="Garima" />
              </div>
              <div className="w-3/4 ml-4 rounded-lg">
                <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                  <h1 className="text-gray-600 text-left">
                    <p className=" flex leading-6 text-xl">
                      <FaQuoteLeft className="text-green-200 h-4 w-4 mr-2" />
                      Hi,
                    </p>
                    <p className="mt-4">
                      {" "}
                      I'm so happy to be a part of DietGhar.
                    </p>
                    <p className="mt-4">
                      Have reduced 10 kgs so far along with overall inch loss
                      and still willing to lose more in next coming months.
                    </p>

                    <p className="mt-4">Thanks for being there DietGhar.</p>
                  </h1>
                </div>

                <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                  Mansi Jindal
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg p-4">
            <div className="flex border border-[#95BB3A] rounded-xl p-4">
              <div className="w-1/4">
                <Image src={Neha} alt="Garima" />
              </div>
              <div className="w-3/4 ml-4 rounded-lg">
                <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                  <h1 className="text-gray-600 text-left">
                    <p className=" flex leading-6 ">
                      I am beyond grateful to DietGhar for their marvellous job
                      in personalizing my diet plan and supporting me throughout
                      my weight loss journey. They crafted a plan that perfectly
                      suited my needs, and their constant guidance and
                      encouragement made all the difference. Whenever I had a
                      question or needed motivation, they were just a message or
                      call away, always ready to help like a true friend. Their
                      unwavering support and genuine care helped me shed 300
                      kgs, taking me from 92 kg to 62 kg.
                    </p>
                    <p className="mt-4">
                      {" "}
                      I am associated with DietGhar from past 6 yrs & I must
                      tell the journey was full of ups and down but with their
                      constant support I was able to achieve which I never
                      thought I'll be able to do otherwise.
                    </p>
                    <p className="mt-4 mb-4">
                      DietGhar’s dedication and expertise transformed my life,
                      and I wholeheartedly recommend them to anyone looking to
                      embark on a successful and sustainable weight loss
                      journey.
                    </p>
                  </h1>
                </div>

                <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                  Neha VIJ
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg p-4">
            <div className="flex border border-[#95BB3A] rounded-xl p-4">
              <div className="w-1/4">
                <Image src={Garima} alt="Garima" />
              </div>
              <div className="w-3/4 ml-4 rounded-lg">
                <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                  <h1 className="text-gray-600 text-left">
                    <p className=" flex leading-6 ">
                      <FaQuoteLeft className="text-green-200 h-4 w-4 mr-2" />
                      Thanks a lot DietGhar for making me lose good amount of
                      weight and inches after my pregnancy.
                    </p>
                    <p className="mt-4">
                      {" "}
                      Would recommend to everyone as plans are really simple to
                      follow and one can easily reduce weight by following a
                      good Kitchen Planner.
                    </p>
                  </h1>
                </div>

                <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                  Shalini Prateek
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg p-4">
            <div className="flex border border-[#95BB3A] rounded-xl p-4">
              <div className="w-1/4">
                <Image src={Richa} alt="Garima" />
              </div>
              <div className="w-3/4 ml-4 rounded-lg">
                <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                  <h1 className="text-gray-600 text-left">
                    <p className=" flex leading-6 text-xl">
                      <FaQuoteLeft className="text-green-200 h-4 w-4 mr-2" />
                      Hi,
                    </p>
                    <p className="mt-4">
                      {" "}
                      Sharing my 7months journey with DietGhar.
                    </p>
                    <p className="mt-4">
                      Due to my busy working schedule, I could not get any time
                      to think about my health. But i started feeling lethargic
                      and even pain in legs.
                    </p>
                    <p className="mt-4">
                      Then I contacted with DietGhar as claimed to make us loose
                      weight by eating and no exercise. I followed their diet
                      plan and as result lost 13kgs in 7months. Now I feel good
                      and even can walk faster.
                    </p>
                    <p className="mt-4">
                      Thank you DietGhar for your amazing work.
                    </p>
                  </h1>
                </div>

                <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                Richa Jain
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg p-4">
            <div className="flex border border-[#95BB3A] rounded-xl p-4">
              <div className="w-1/4">
                <Image src={Rina} alt="Garima" />
              </div>
              <div className="w-3/4 ml-4 rounded-lg">
                <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                  <h1 className="text-gray-600 text-left">
                    <p className=" flex leading-6">
                      I am thrilled to share my incredible journey with
                      DIETGHAR! Over the past 7 months, with their absolute
                      personalized touch, I managed to reduce my weight from 81
                      kg to 61 kg, a total loss of 20 kgs. Their unwavering
                      support, tailored diet plans, and constant motivation were
                      key to my success. DIETGHAR team understood my needs and
                      lifestyle, making the whole process enjoyable and
                      sustainable. I never felt alone in this journey, and their
                      expertise made all the difference.
                    </p>
                    <p className="mt-4">
                      Thank You team DietGhar for helping me in my weight loss
                      journey with a friend like approach.
                    </p>
                    <p className="mt-4">
                      All my clothes are loose from XXL to M or S. I want to
                      loose more, want to see me in between 55-60 Kgs. Your diet
                      plan will surely make my dream come true. I highly
                      recommend DIETGHAR for anyone looking to transform their
                      health and life positively!
                    </p>
                  </h1>
                </div>

                <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                RINA JHA
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
