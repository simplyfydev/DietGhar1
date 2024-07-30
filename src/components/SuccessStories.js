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
import "@/components/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Garima from "@/assets/GarimaReview.png";
import Mansi from "@/assets/MansiReview.png";
import Neha from "@/assets/NehaReview.png";
import Richa from "@/assets/RichaReview.png";
import Rina from "@/assets/RinaReview.png";
import Shalani from "@/assets/ShalaniReview.png";
import Annu from "@/assets/AnnuReview.png";
import Amita from "@/assets/AmitaReview.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import insta from "@/assets/insta.png";
import build from "@/assets/building.png";
import fb from "@/assets/Facebook.png";

export default function SuccessStories() {
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
              consultant&#44; but also become a part of a bigger community&#44; where
              each and every client gains a healthy mentor.
            </p>
            <p className="text-center mb-4">
              Our journey started with providing only diet plans&#44; but as our
              community grew bigger&#44; we started providing our clients with
              workout tips&#44; along with bonus of beauty tips and tricks curated
              for you.
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
      <div className="p-12">
        <h2 className="text-3xl text-center text-gray-900 font-semibold mb-8 mt-8">
          Listen from our Clients!
        </h2>
        <article className="flex flex-col gap-4 m-auto ">
          <div className="flex  select-none gap-4 mask-image">
            <div className="flex-shrink-0 flex items-center justify-around gap-4  animate-scroll-x">
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Shalani}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Hello&#x2c;
                          </p>
                          <p className="mt-2">
                            I specially sending this message to say thank you.
                          </p>
                          <p className="text-sm mt-2">
                            I started my journey with DietGhar approximately 45
                            days back when I was 78 Kgs and today I am 70 Kgs
                            with DietGhar team support and diet plan. The way
                            they give diet plans which are very easy to follow.
                            I never feel hungry with loads of variety and the
                            kitchen planner is always handy as I don&#x27;t need
                            to think what needs to be cooked.
                          </p>
                          <p className="mt-2">
                            Actually&#x2c; Thank you is not enough for this...
                          </p>
                          <p className="mt-2">
                            I will definitely refer DietGhar to my Friends &
                            Family.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Shalini Prateek
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Annu}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            I&#39;m very happy with the Diet Plan.
                          </p>
                          <p className="mt-2">
                            Surprisingly I have lost 4.5 Kgs in a month and that
                            too without any compromising on my daily needs.
                          </p>
                          <p className="mt-2">
                            Thanks&#x2c; DietGhar&#x2c; truly a Gem.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Annu Jain
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Amita}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Hello DietGhar&#x2c;
                          </p>
                          <p className="mt-2">
                            A big thank to DietGhar for the tremendous change I
                            can see in myself. Lost good amount of inches and
                            weight too.
                          </p>
                          <p className="mt-2">
                            Feeling healthy&#x2c; light and energetic from
                            inside with their yummy variety of delicacies.
                          </p>
                          <p className="mt-2">
                            All the best DietGhar for your future endeavours.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Amita Narula
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Mansi}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Hi&#x2c;
                          </p>
                          <p className="mt-2">
                            I&#x27;m so happy to be a part of DietGhar.
                          </p>
                          <p className="mt-2">
                            Have reduced 10 kgs so far along with overall inch
                            loss and still willing to lose more in next coming
                            months.
                          </p>
                          <p className="mt-2">
                            Thanks for being there DietGhar.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Mansi Jindal
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Garima}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Thanks a lot DietGhar for making me lose good amount
                            of weight
                          </p>
                          <p> and inches after my pregnancy.</p>
                          <p className="mt-2">
                            Would recommend to everyone as plans are really
                            simple to follow and one can easily reduce weight by
                            following a good Kitchen Planner.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Garima Taneja
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Richa}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Hi&#x2c;
                          </p>
                          <p className="mt-2">
                            Sharing my 7months journey with DietGhar.
                          </p>
                          <p className="mt-2">
                            Due to my busy working schedule&#x2c; I could not
                            get any time to think about my health. But i started
                            feeling lethargic and even pain in legs.
                          </p>
                          <p className="mt-2">
                            Then I contacted with DietGhar as claimed to make us
                            loose weight by eating and no exercise. I followed
                            their diet plan and as result lost 13kgs in 7months.
                            Now I feel good and even can walk faster.
                          </p>
                          <p className="">
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
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Rina}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="text-sm">
                            I am thrilled to share my incredible journey with
                            DIETGHAR! Over the past 7 months&#x2c; with their
                            absolute personalized touch&#x2c; I managed to
                            reduce my weight from 81 kg to 61 kg&#x2c; a total
                            loss of 20 kgs. Their unwavering support&#x2c;
                            tailored diet plans&#x2c; and constant motivation
                            were key to my success. DIETGHAR team understood my
                            needs and lifestyle&#x2c; making the whole process
                            enjoyable and sustainable. I never felt alone in
                            this journey&#x2c; and their expertise made all the
                            difference.
                          </p>
                          <p className="text-sm">
                            Thank You team DietGhar for helping me in my weight
                            loss journey with a friend like approach.
                          </p>
                          <p className="text-sm">
                            All my clothes are loose from XXL to M or S. I want
                            to loose more&#x2c; want to see me in between 55-60
                            Kgs. Your diet plan will surely make my dream come
                            true. I highly recommend DIETGHAR for anyone looking
                            to transform their health and life positively!
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Rina Jha
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Neha}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex text-sm">
                            I am beyond grateful to DietGhar for their
                            marvellous job in personalizing my diet plan and
                            supporting me throughout my weight loss journey.
                            They crafted a plan that perfectly suited my
                            needs&#x2c; and their constant guidance and
                            encouragement made all the difference. Whenever I
                            had a question or needed motivation&#x2c; they were
                            just a message or call away&#x2c; always ready to
                            help like a true friend. Their unwavering support
                            and genuine care helped me shed 30 kgs&#x2c; taking
                            me from 92 kg to 62 kg.
                          </p>
                          <p className="text-sm">
                            I am associated with DietGhar from past 6 yrs & I
                            must tell the journey was full of ups and down but
                            with their constant support I was able to achieve
                            which I never thought I&#x27;ll be able to do
                            otherwise.
                          </p>
                          <p className="text-sm">
                            DietGhar&#x27;s dedication and expertise transformed
                            my life&#x2c; and I wholeheartedly recommend them to
                            anyone looking to embark on a successful and
                            sustainable weight loss journey.
                          </p>
                          <p className="text-sm">
                            Actually&#x2c; Thank you is not enough for this...
                          </p>
                          <p className="text-sm">
                            I will definitely refer DietGhar to my Friends &
                            Family.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Neha VIJ
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Shalani}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Hello&#x2c;
                          </p>
                          <p className="mt-2">
                            I specially sending this message to say thank you.
                          </p>
                          <p className="text-sm mt-2">
                            I started my journey with DietGhar approximately 45
                            days back when I was 78 Kgs and today I am 70 Kgs
                            with DietGhar team support and diet plan. The way
                            they give diet plans which are very easy to follow.
                            I never feel hungry with loads of variety and the
                            kitchen planner is always handy as I don&#x27;t need
                            to think what needs to be cooked.
                          </p>
                          <p className="mt-2">
                            Actually&#x2c; Thank you is not enough for this...
                          </p>
                          <p className="mt-2">
                            I will definitely refer DietGhar to my Friends &
                            Family.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Shalini Prateek
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Annu}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            I&#39;m very happy with the Diet Plan.
                          </p>
                          <p className="mt-2">
                            Surprisingly I have lost 4.5 Kgs in a month and that
                            too without any compromising on my daily needs.
                          </p>
                          <p className="mt-2">
                            Thanks&#x2c; DietGhar&#x2c; truly a Gem.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Annu Jain
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Amita}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Hello DietGhar&#x2c;
                          </p>
                          <p className="mt-2">
                            A big thank to DietGhar for the tremendous change I
                            can see in myself. Lost good amount of inches and
                            weight too.
                          </p>
                          <p className="mt-2">
                            Feeling healthy&#x2c; light and energetic from
                            inside with their yummy variety of delicacies.
                          </p>
                          <p className="mt-2">
                            All the best DietGhar for your future endeavours.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Amita Narula
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Mansi}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Hi&#x2c;
                          </p>
                          <p className="mt-2">
                            I&#x27;m so happy to be a part of DietGhar.
                          </p>
                          <p className="mt-2">
                            Have reduced 10 kgs so far along with overall inch
                            loss and still willing to lose more in next coming
                            months.
                          </p>
                          <p className="mt-2">
                            Thanks for being there DietGhar.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Mansi Jindal
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Garima}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Thanks a lot DietGhar for making me lose good amount
                            of weight
                          </p>
                          <p> and inches after my pregnancy.</p>
                          <p className="mt-2">
                            Would recommend to everyone as plans are really
                            simple to follow and one can easily reduce weight by
                            following a good Kitchen Planner.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Garima Taneja
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Richa}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex leading-6">
                            <FaQuoteLeft className="text-green-200 h-4 mr-2" />
                            Hi&#x2c;
                          </p>
                          <p className="mt-2">
                            Sharing my 7months journey with DietGhar.
                          </p>
                          <p className="mt-2">
                            Due to my busy working schedule&#x2c; I could not
                            get any time to think about my health. But i started
                            feeling lethargic and even pain in legs.
                          </p>
                          <p className="mt-2">
                            Then I contacted with DietGhar as claimed to make us
                            loose weight by eating and no exercise. I followed
                            their diet plan and as result lost 13kgs in 7months.
                            Now I feel good and even can walk faster.
                          </p>
                          <p className="">
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
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Rina}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="text-sm">
                            I am thrilled to share my incredible journey with
                            DIETGHAR! Over the past 7 months&#x2c; with their
                            absolute personalized touch&#x2c; I managed to
                            reduce my weight from 81 kg to 61 kg&#x2c; a total
                            loss of 20 kgs. Their unwavering support&#x2c;
                            tailored diet plans&#x2c; and constant motivation
                            were key to my success. DIETGHAR team understood my
                            needs and lifestyle&#x2c; making the whole process
                            enjoyable and sustainable. I never felt alone in
                            this journey&#x2c; and their expertise made all the
                            difference.
                          </p>
                          <p className="text-sm">
                            Thank You team DietGhar for helping me in my weight
                            loss journey with a friend like approach.
                          </p>
                          <p className="text-sm">
                            All my clothes are loose from XXL to M or S. I want
                            to loose more&#x2c; want to see me in between 55-60
                            Kgs. Your diet plan will surely make my dream come
                            true. I highly recommend DIETGHAR for anyone looking
                            to transform their health and life positively!
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Rina Jha
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <header className="w-full max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4">
                  <div className="flex border border-[#95BB3A] rounded-xl p-2">
                    <div className="h-full w-1/3">
                      <Image
                        src={Neha}
                        alt="Shalani"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="rounded-lg ml-4 w-2/3">
                      <div className="bg-[#F1FFCE] p-4 rounded-lg h-80">
                        <h1 className="text-gray-600 text-left">
                          <p className="flex text-sm">
                            I am beyond grateful to DietGhar for their
                            marvellous job in personalizing my diet plan and
                            supporting me throughout my weight loss journey.
                            They crafted a plan that perfectly suited my
                            needs&#x2c; and their constant guidance and
                            encouragement made all the difference. Whenever I
                            had a question or needed motivation&#x2c; they were
                            just a message or call away&#x2c; always ready to
                            help like a true friend. Their unwavering support
                            and genuine care helped me shed 30 kgs&#x2c; taking
                            me from 92 kg to 62 kg.
                          </p>
                          <p className="text-sm">
                            I am associated with DietGhar from past 6 yrs & I
                            must tell the journey was full of ups and down but
                            with their constant support I was able to achieve
                            which I never thought I&#x27;ll be able to do
                            otherwise.
                          </p>
                          <p className="text-sm">
                            DietGhar&#x27;s dedication and expertise transformed
                            my life&#x2c; and I wholeheartedly recommend them to
                            anyone looking to embark on a successful and
                            sustainable weight loss journey.
                          </p>
                          <p className="text-sm">
                            Actually&#x2c; Thank you is not enough for this...
                          </p>
                          <p className="text-sm">
                            I will definitely refer DietGhar to my Friends &
                            Family.
                          </p>
                        </h1>
                      </div>
                      <p className="text-[#637F22] text-left text-2xl font-semibold mt-4">
                        Neha VIJ
                      </p>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </article>
      </div>
      <div>
        <div className="flex justify-center">
          <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 transition border-2 shadow-lg border-white">
            Review Us on Google
            <FcGoogle className="text-xl ml-2 mt-[2px]" />
          </button>
        </div>
      </div>
      <div className="p-12 relative">
        <h2 className="text-3xl text-center text-gray-900 font-semibold mb-4 mt-8">
          What we have done so far
        </h2>

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
      <h1 className="text-4xl text-bold text-center text-black mb-12">People love DietGhar</h1>
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
