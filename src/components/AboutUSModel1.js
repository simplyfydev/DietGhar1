import React from 'react';

export const AboutUSModel1 = () => {
  return (
    <div className="bg-white py-16">
      <div className="relative p-8 bg-[#FCFAFA] text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-48 h-48 border-2 border-[#9AC435] rounded-lg opacity-20 transform rotate-45 top-10 -left-10"></div>
          <div className="absolute w-36 h-36 border-2 border-[#9AC435] rounded-lg opacity-20 transform rotate-45 top-1/3 right-16"></div>
          <div className="absolute w-28 h-28 border-2 border-[#9AC435] rounded-lg opacity-20 transform rotate-45 bottom-20 left-20"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl text-gray-800">About Us</h2>
          <div className="flex justify-center items-center relative">
            <h1 className="text-4xl font-bold text-gray-800">We DietGhar</h1>
            <div className="absolute w-24 h-24 border-2 border-[#9AC435] rounded-lg opacity-20 transform rotate-45 -top-6 -right-8"></div>
          </div>
          <p className="text-gray-600 mt-4">
            Being trustworthy health and fitness advisors since 2016, we at DietGhar strive to make you feel your best.
            Our team of qualified nutritionists believes in promoting a healthy and holistic way of living, by altering
            your daily dietary intake. With our online consultation services, you can not only choose healthy and delicious
            foods but also reach your fitness goals.
          </p>
          <p className="text-gray-600 mt-4">
            Our diet plans are prepared keeping in mind your traditional eating habits and preferences. Our family of clients
            follow different lifestyles, and we as a team believe in making their life easier with our easy-to-make and
            sustainable food options.
          </p>
          <p className="text-gray-600 mt-4">
            We have served and helped more than 3000+ clients over the period of 6 years and continue to grow our DietGhar family further.
          </p>
          <p className="text-gray-800 font-bold mt-4">
            Together, we can achieve your best self!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUSModel1;
