'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import FAQ1 from "@/assets/FAQ1.png";
import Questions from '@/assets/Questions.png'
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons
import FAQComponent from './FAQComponent';
import FAQComponent1 from './FAQComponent1';
import FAQComponent2 from './FAQComponent2';
import FAQHelpSection from './FAQHelpSection';

export default function Home() {
  const [placeholder, setPlaceholder] = useState("");
  const inputRef = useRef(null);

  const PLACEHOLDERS = [
    "This is an animated placeholder",
    "Search for green hoodie",
    "Search for our latest items",
    "Find your favorite movie"
  ];

  const getRandomDelayBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const animateLetters = (currentLetters, remainingLetters, onAnimationEnd) => {
    if (!remainingLetters.length) {
      return onAnimationEnd && onAnimationEnd(currentLetters.join(""));
    }

    currentLetters.push(remainingLetters.shift());
    setTimeout(() => {
      setPlaceholder(currentLetters.join(""));
      animateLetters(currentLetters, remainingLetters, onAnimationEnd);
    }, getRandomDelayBetween(50, 90));
  };

  const onAnimationEnd = (currentPlaceholder) => {
    setTimeout(() => {
      let newPlaceholder;
      do {
        newPlaceholder = PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)];
      } while (currentPlaceholder === newPlaceholder);

      animatePlaceholder(newPlaceholder);
    }, 2000);
  };

  const animatePlaceholder = (placeholder) => {
    animateLetters([], placeholder.split(""), onAnimationEnd);
  };

  useEffect(() => {
    animatePlaceholder(PLACEHOLDERS[0]);
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${FAQ1.src})` }}>
        <div className="absolute inset-0 bg-green-900 bg-opacity-50 flex justify-center items-center">
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-white mb-4">
              Your Questions Answered!
            </h1>
            <p className="text-xl text-white mb-8">
              Discover the answers to common inquiries about our Payment, Diet, Products and Services
            </p>
            <div className="flex justify-center">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={placeholder}
                  className="pl-12 pr-4 py-4 w-96 rounded-full focus:outline-none shadow-xl bg-white bg-opacity-50 text-white border-2 border-white placeholder-white placeholder-opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-12 bg-white">
        <div className="text-3xl md:text-5xl font-bold text-black text-center ">
          Frequently asked
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="relative w-48 h-28 md:w-64">
            <Image src={Questions} alt="FAQ" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <FAQComponent />
      <FAQComponent1 />
      <FAQComponent2 />
      <FAQHelpSection/>
    </>
  );
}
