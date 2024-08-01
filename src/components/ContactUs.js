// components/ContactUs.js
'use client'
import Image from 'next/image';
import { useState } from 'react';
import BackgroundImage from '@/assets/ContactUs/BackgroundImage.png';
import TabImage from '@/assets/ContactUs/MaskGroup.png';
import TabContent from '@/assets/ContactUs/TabContent.png';
import ContactUsGetInTouch from './ContactUsGetInTouch';
import ContactSection from './ContactSection';

export default function ContactUs() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      {/* First Layer: Background Image */}
      <Image
        src={BackgroundImage}
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="absolute inset-0 z-0"
      />

      {/* Second Layer: Center Image */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 ${
          hovered ? 'scale-110' : 'scale-100'
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative">
          <Image
            src={TabImage}
            width={350}
            alt="Center Image"
            className="transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={TabContent}
              width={305}
              height={200}
              alt="Inner Image"
              className="transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Third Layer: Text Overlay */}
      <div className="absolute top-0 left-0 z-20 p-8 text-white">
        <h1 className="text-6xl font-bold">Contact Us</h1>
        <p className="text-xl mt-2">Whenever you need us, we’re here to assist you.</p>
      </div>
    </div>
    <ContactSection/>
    <ContactUsGetInTouch/>
    </>
  );
}
