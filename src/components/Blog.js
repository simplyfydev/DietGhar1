"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const articles = [
  {
    id: 1,
    title: "Healthy Habits for a Happy Heart: Tips to Prevent Heart Disease",
    excerpt:
      "Heart disease is a serious condition that affects millions of people around the world. It is caused by a variety ....",
    date: "Mar 25, 2023",
    comments: "Leave a comment",
    image: "/images/heart-disease.png",
  },
  {
    id: 2,
    title: "The Power of Curd: Benefits for Skin, Hair, and Health",
    excerpt:
      "Curd, also known as yogurt, has been a staple food in many cultures for centuries. It is made by fermenting....",
    date: "Jan 24, 2023",
    comments: "Leave a comment",
    image: "/images/curd.png",
  },
  {
    id: 3,
    title: "Benefits of Home Workouts: Save Time, Money, and Stay on Track",
    excerpt:
      "Home workouts have become increasingly popular in recent years, especially with the rise of online fitness programs and at-home workout....",
    date: "Feb 10, 2023",
    comments: "Leave a comment",
    image: "/images/home-workouts.png",
  },
  {
    id: 4,
    title: "Surprising Foods and Drinks That Can Damage Your Teeth",
    excerpt:
      "When it comes to maintaining good dental health, brushing and flossing are essential. But did you know that what you...",
    date: "Apr 15, 2023",
    comments: "Leave a comment",
    image: "/images/food-drink.png",
  },
  {
    id: 5,
    title: "The Bitter Truth About Sugar: Why it’s Bad for Your Health",
    excerpt:
      "Sugar is a staple ingredient in many of our favorite foods and beverages, from sodas and candies to cakes and....",
    date: "May 20, 2023",
    comments: "Leave a comment",
    image: "/images/sugar.png",
  },
  {
    id: 6,
    title: "Want Healthy Or Unhealthy?",
    excerpt:
      "When it comes to dental health, what you eat and drink matters just as much as how well you brush....",
    date: "Nov 12, 2023",
    comments: "Leave a comment",
    image: "/images/healthy-unhealthy.png",
  },
  {
    id: 7,
    title: "Eggs: The Versatile and Nutritious Superfood",
    excerpt:
      "Eggs are a popular and versatile food that can be enjoyed in many different ways, from omelets and scrambles to...",
    date: "Jun 15, 2023",
    comments: "Leave a comment",
    image: "/images/eggs.png",
  },
  {
    id: 8,
    title: "Eating the Rainbow: How a Colorful Diet Can Boost Your Health",
    excerpt:
      "When it comes to eating for good health, the color of your food matters. Different colored foods contain different nutrients....",
    date: "Jul 10, 2023",
    comments: "Leave a comment",
    image: "/images/rainbow-diet.png",
  },
  {
    id: 9,
    title: "New Article 1",
    excerpt: "Excerpt for the new article 1.",
    date: "Aug 1, 2023",
    comments: "Leave a comment",
    image: "/images/article1.png",
  },
  {
    id: 10,
    title: "New Article 2",
    excerpt: "Excerpt for the new article 2.",
    date: "Aug 2, 2023",
    comments: "Leave a comment",
    image: "/images/article2.png",
  },
  {
    id: 11,
    title: "New Article 3",
    excerpt: "Excerpt for the new article 3.",
    date: "Aug 3, 2023",
    comments: "Leave a comment",
    image: "/images/article3.png",
  },
  {
    id: 12,
    title: "New Article 4",
    excerpt: "Excerpt for the new article 4.",
    date: "Aug 4, 2023",
    comments: "Leave a comment",
    image: "/images/article4.png",
  },
  {
    id: 13,
    title: "New Article 5",
    excerpt: "Excerpt for the new article 5.",
    date: "Aug 5, 2023",
    comments: "Leave a comment",
    image: "/images/article5.png",
  },
  {
    id: 14,
    title: "New Article 6",
    excerpt: "Excerpt for the new article 6.",
    date: "Aug 6, 2023",
    comments: "Leave a comment",
    image: "/images/article6.png",
  },
  {
    id: 15,
    title: "New Article 7",
    excerpt: "Excerpt for the new article 7.",
    date: "Aug 7, 2023",
    comments: "Leave a comment",
    image: "/images/article7.png",
  },
  {
    id: 16,
    title: "New Article 8",
    excerpt: "Excerpt for the new article 8.",
    date: "Aug 8, 2023",
    comments: "Leave a comment",
    image: "/images/article8.png",
  },
];
import img from "@/assets/testing.png";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import LastDiv from "./LastDiv";

import { FaCalendarAlt } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { FaCommentDots } from "react-icons/fa";
import { PiGreaterThanLight } from "react-icons/pi";

const ArticleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const articlesPerPage = 8; // 2 columns * 4 rows = 8 articles per page

  const handleNext = () => {
    if (currentIndex + articlesPerPage < articles.length) {
      setCurrentIndex(currentIndex + articlesPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - articlesPerPage >= 0) {
      setCurrentIndex(currentIndex - articlesPerPage);
    }
  };

  return (
    <>
      <LastDiv />
      <div className="container mx-auto px-36">
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-98">
            {articles
              .slice(currentIndex, currentIndex + articlesPerPage)
              .map((article) => (
                <div
                  key={article.id}
                  className="flex bg-white rounded-lg shadow-md overflow-hidden w-full"
                >
                  <div className="w-auto h-auto">
                    <Image
                      src={img}
                      alt={article.title}
                      className="w-auto h-auto object-cover"
                      width={400}
                      height={192}
                    />
                    <div className="flex px-2 py-2 items-center justify-center">
                      <FaCalendarAlt className="w-3 h-6 mr-1 text-[#9AC435]" />
                      date /
                      <ImUser className="w-3 h-6 mr-1 text-[#9AC435]" /> Admin /
                      <FaCommentDots className="w-3 h-6 mr-1 text-[#9AC435] ml-1" />
                      Comment
                    </div>
                  </div>
                  <div className="flex flex-col justify-between h-full p-4 w-2/3">
                    <div>
                      <h2 className="text-lg font-bold mb-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-700 mb-4 mt-8">
                        {article.excerpt}
                      </p>
                    </div>

                    <button className="flex w-1/2 mb-4 items-center bg-[#9AC435] text-white rounded-full px-4 py-1 hover:bg-[#9AC435] transition border-2 shadow-lg border-white">
                      Know more
                      <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            disabled={currentIndex + articlesPerPage >= articles.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ArticleCarousel;
