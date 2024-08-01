'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import FAQImage2 from '@/assets/FAQImage2.png'; // Replace with your actual image path

export default function FAQComponent2() {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        "Lorem ipsum dolor sit amet consectetur?",
        "Lorem ipsum dolor sit amet consectetur?",
        "Lorem ipsum dolor sit amet consectetur?",
        "Lorem ipsum dolor sit amet consectetur?",
        "Lorem ipsum dolor sit amet consectetur?",
        "Lorem ipsum dolor sit amet consectetur?",
        "Lorem ipsum dolor sit amet consectetur?",
        "Lorem ipsum dolor sit amet consectetur?"
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col mx-auto px-10 py-12 bg-white min-h-screen">
            <h2 className="text-4xl font-bold:600 text-black mb-4 text-center">Payment Related Questions</h2>
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/2">
                    <div className="space-y-2">
                        {questions.map((question, index) => (
                            <div key={index} >
                                <button
                                    className="flex justify-between items-center w-full py-4 text-left text-xl font-medium text-black"
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className="flex items-center">
                                        <span className={`inline-block w-2 h-2 mr-2 rounded-full ${activeIndex === index ? 'bg-black' : 'invisible'}`}></span>
                                        <span>{question}</span>
                                    </div>
                                    {activeIndex === index ? (
                                        <FaChevronUp className="text-green-500" />
                                    ) : (
                                        <FaChevronDown className="text-green-500" />
                                    )}
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className={`pl-6 pb-4 text-base text-gray-700  border-b border-black ${activeIndex === index ? 'animate-top-down-bump' : ''}`}>
                                        Lorem ipsum dolor sit amet consectetur. Egestas metus gravida iaculis quisque natoque dictumst netus justo. Ante egestas maecenas sem scelerisque turpis. Potenti cursus lectus erat tincidunt quisque. Non integer cras natoque quam diam et vitae.
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
                    <div className="relative w-full h-96">
                        <Image src={FAQImage2} alt="FAQ" layout="fill" objectFit="contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};
