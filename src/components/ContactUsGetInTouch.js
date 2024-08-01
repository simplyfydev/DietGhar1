// components/GetInTouch.js
'use client'
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaFileExport } from 'react-icons/fa';
import contactImage from '@/assets/ContactUs/GetInTouch.png';
import { useState } from 'react';

export default function ContactUsGetInTouch() {
    const [focus, setFocus] = useState({
        name: false,
        mobile: false,
        email: false,
        message: false,
    });

    const handleFocus = (field) => {
        setFocus({ ...focus, [field]: true });
    };

    const handleBlur = (field) => {
        setFocus({ ...focus, [field]: false });
    };

    return (
        <div className="py-10 bg-white">
            <div className="flex flex-col mx-auto p-12 bg-[#F9F9F9] text-black">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div className="flex-1 mb-4 md:mb-0">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl font-bold">Get In Touch</h1>
                            <p className="mt-3">
                                Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h1 className="text-3xl font-bold mb-5">Follow Us</h1>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-700 hover:text-gray-900">
                                <FaInstagram size={32} />
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">
                                <FaFacebook size={32} />
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">
                                <FaLinkedin size={32} />
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">
                                <FaYoutube size={32} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-14">
                    {/* Contact Form */}
                    <form className="flex-1 bg-[#F9F9F9] w-full md:w-1/2 lg:w-1/3 p-4 ">
                        <div className="relative mb-4">
                            <label
                                className={`absolute top-2 text-1xl font-semibold transition-all duration-300 ease-in-out ${focus.name ? 'text-xs -top-4 text-gray-400' : ''}`}
                                htmlFor="name"
                            >
                                Name*
                            </label>
                            <input
                                className="mt-2 w-full border-b border-gray-400 focus:border-black outline-none bg-[#F9F9F9] pt-6"
                                type="text"
                                id="name"
                                autoComplete="off"
                                onFocus={() => handleFocus('name')}
                                onBlur={() => handleBlur('name')}
                                required
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <div className="relative flex-1">
                                <label
                                    className={`absolute  top-2 text-1xl font-semibold transition-all duration-300 ease-in-out ${focus.mobile ? 'text-xs -top-4 text-gray-400' : ''}`}
                                    htmlFor="mobile"
                                >
                                    Mobile Number*
                                </label>
                                <input
                                    className="mt-2 w-full border-b border-gray-400 focus:border-black outline-none bg-[#F9F9F9] pt-6"
                                    type="text"
                                    id="mobile"
                                    autoComplete="off"
                                    onFocus={() => handleFocus('mobile')}
                                    onBlur={() => handleBlur('mobile')}
                                    required
                                />
                            </div>
                            <div className="relative flex-1">
                                <label
                                    className={`absolute  top-2  text-1xl font-semibold transition-all duration-300 ease-in-out ${focus.email ? 'text-xs -top-4 text-gray-400' : ''}`}
                                    htmlFor="email"
                                >
                                    E-mail Id*
                                </label>
                                <input
                                    className="mt-2 w-full border-b border-gray-400 focus:border-black outline-none bg-[#F9F9F9] pt-6"
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    onFocus={() => handleFocus('email')}
                                    onBlur={() => handleBlur('email')}
                                    required
                                />
                            </div>
                        </div>

                        <div className="relative mb-20">
                            <label
                                className={`absolute top-2 text-1xl font-semibold transition-all duration-300 ease-in-out ${focus.message ? 'text-xs -top-4 text-gray-400' : ''}`}
                                htmlFor="message"
                            >
                                Your Message
                            </label>
                            <input
                                className="mt-2 w-full border-b border-gray-400 focus:border-black outline-none bg-[#F9F9F9] pt-6"
                                type="message"
                                id="message"
                                autoComplete="off"
                                onFocus={() => handleFocus('message')}
                                onBlur={() => handleBlur('message')}
                            ></input>
                        </div>

                        <button className="bg-[#9AC435] text-white px-6 py-2 rounded-full mt-4 flex items-center gap-2 shadow-xl hover:bg-[#4A6213] transition duration-300 ease-in-out border-2 border-white" type="submit">
                            Submit
                            <FaFileExport className="text-white" />
                        </button>
                    </form>

                    {/* Follow Us and Image */}
                    <div className="flex-shrink-0 lg:w-1/3">
                        <Image
                            src={contactImage}
                            width={400}
                            height={200}
                            alt="Contact"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
