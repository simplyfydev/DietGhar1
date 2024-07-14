"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "@/assets/LD1.png";
import img2 from "@/assets/LD2.png";
import img3 from "@/assets/LD3.png";
import img4 from "@/assets/LD4.png";
import img5 from "@/assets/LD5.png";

import { FaCalendarAlt } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { FaCommentDots } from "react-icons/fa";
import { PiGreaterThanLight } from "react-icons/pi";

const blogPosts = [
  {
    image: img1,
    date: "Mar 24, 2023",
    title: "Healthy Habits for a Happy Heart: Tips to Prevent Heart Disease",
    description:
      "Heart disease is a serious condition that affects millions of people around the world. It is caused by a variety...",
  },
  {
    image: img2,
    date: "Mar 24, 2023",
    title: "The Power of Curd: Benefits for Skin, Hair, and Health",
    description:
      "Curd, also known as yogurt, has been a staple food in many cultures for centuries. It is made by fermenting...",
  },
  {
    image: img3,
    date: "Mar 24, 2023",
    title: "5 Benefits of Home Workouts: Save Time, Money, and Stay on Track",
    description:
      "Home workouts have become increasingly popular in recent years, especially with the rise of online fitness programs and at-home workout...",
  },
  {
    image: img4,
    date: "Mar 24, 2023",
    title: "5 Benefits of Home Workouts: Save Time, Money, and Stay on Track",
    description:
      "Home workouts have become increasingly popular in recent years, especially with the rise of online fitness programs and at-home workout...",
  },
  {
    image: img5,
    date: "Mar 24, 2023",
    title: "5 Benefits of Home Workouts: Save Time, Money, and Stay on Track",
    description:
      "Home workouts have become increasingly popular in recent years, especially with the rise of online fitness programs and at-home workout...",
  },
];

const BlogPost = ({ image, date, title, description }) => {
  return (
    <div className="relative max-w-sm h-[750px] py-2 rounded overflow-hidden shadow-lg mx-1">
      <Image
        src={image}
        alt={title}
        className="w-full"
        width={400}
        height={300}
      />
      <div className="flex px-4 py-4">
        <FaCalendarAlt className="w-6 h-6 mr-1 text-[#9AC435]" />
        {date} /
        <ImUser className="w-6 h-6 mr-1 text-[#9AC435]" /> Admin /
        <FaCommentDots className="w-6 h-6 mr-1 text-[#9AC435] ml-1" />
        Comment
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <button className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#9AC435] text-white rounded-full px-6 py-3 hover:bg-[#9AC435] transition border-2 shadow-lg border-white">
        Know More <PiGreaterThanLight className="w-4 h-4 ml-1 mt-1"/>
      </button>
    </div>
  );
};

export default function LastDiv() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "80px",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="p-8 text-black">
      <h1 className="text-3xl font-bold text-center mb-6">Health Reads</h1>
      <p className="text-[24px] text-center mb-4 font-medium">
        Blog posts on health, diet, weight loss and general wellness
      </p>
      <Slider {...settings}>
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.description}
          />
        ))}
      </Slider>
    </div>
  );
}
