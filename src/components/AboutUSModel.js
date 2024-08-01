'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AboutModel1 from '@/assets/AboutUs/AboutModel1.png'; // replace with the correct path to your image
import AboutModel2 from '@/assets/AboutUs/AboutModel2.png'; // replace with the correct path to your image
import AboutModel3 from '@/assets/AboutUs/AboutModel3.png'; // replace with the correct path to your image
import AboutModel4 from '@/assets/AboutUs/AboutModel4.png'; // replace with the correct path to your image
import BGModel from '@/assets/AboutUs/BGModel.png'; // replace with the correct path to your background image
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { BiUserVoice } from "react-icons/bi";

const images = [AboutModel1, AboutModel2, AboutModel3, AboutModel4];

const AboutUsModel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setIsTransitioning(false);
            }, 1000); // Match the duration with CSS transition
        }, 4000); // Change image every 4 seconds
        return () => clearInterval(interval);
    }, []);

    const nextImage = (currentImage + 1) % images.length;

    return (
        <section className="relative py-24 w-full h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Image src={BGModel} alt="Background" layout="fill" objectFit="cover" quality={100} />
            </div>
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="relative border border-white rounded-lg py-14 md:py-16 px-4 md:px-8">
                    <div className="relative flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 text-left">
                            <h1 className="text-4xl font-bold text-black mb-12">DIETGHAR</h1>
                            <h2 className="text-3xl font-bold text-white mb-4">Let's live healthy together</h2>
                            <p className="text-lg text-black mb-8">
                                Not only your food, but your health should also speak out loud for you!! Eating is just a habit, so develop it towards the better.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-[#9AC435] text-white px-6 py-2 rounded-full mt-4 flex items-center gap-4 shadow-xl hover:bg-[#4A6213] transition duration-300 ease-in-out border-2 border-white" type="submit">
                                    View Plans
                                    <FaRegArrowAltCircleRight className="text-white" />
                                </button>
                                <button className="bg-[#9AC435] text-white px-6 py-2 rounded-full mt-4 flex items-center gap-4 shadow-xl hover:bg-[#4A6213] transition duration-300 ease-in-out border-2 border-white" type="submit">
                                    Contact Us
                                    <BiUserVoice size={24} className="text-white" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative mt-8 md:mt-0 flex justify-center">
                            <div className="relative w-80 h-80 md:w-96 md:h-96">
                                <Image src={images[currentImage]} alt="Healthy Food" layout="fill" objectFit="contain" className={`rounded-full transition-all duration-1000 ease-in-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-1 scale-100'}`} />
                                <Image src={images[nextImage]} alt="Healthy Food" layout="fill" objectFit="contain" className={`absolute inset-0 rounded-full transition-all duration-1000 ease-in-out ${isTransitioning ? 'opacity-1 scale-100' : 'opacity-0 scale-95'}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .opacity-0 {
                    opacity: 0;
                }
                .opacity-1 {
                    opacity: 1;
                }
                .scale-95 {
                    transform: scale(0.95);
                }
                .scale-100 {
                    transform: scale(1);
                }
            `}</style>
        </section>
    );
};

export default AboutUsModel;
