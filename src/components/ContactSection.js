import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import TabContent from '@/assets/ContactUs/BackgroundImage.png';

const ContactSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row p-7 justify-between md:items-center mb-8">
                    <div className="flex-1 mb-4 md:mb-0">
                        <div className="w-full md:w-auto">
                            <h2 className="text-3xl text-black font-bold">How to reach us</h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <p className="text-lg text-black">
                            Whether you have a question, need help, or want to share feedback, we are here to assist you with whatever you require.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center text-center">
                    {/** WhatsApp Card */}
                    <div className="group flex flex-col items-center mb-8 md:mb-0 relative w-96 h-96">
                        <div className="w-full h-full relative overflow-hidden p-8 bg-white transition-transform duration-300 group-hover:transform group-hover:scale-105">
                            <Image src={TabContent} alt="WhatsApp" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            <div className="absolute inset-0 bg-[#9AC435] opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className='p-6 rounded-full border-2 border-black group-hover:border-transparent bg-white transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:-translate-y-2'>
                                    <FaWhatsapp className="text-[#9AC435] text-7xl group-hover:bg-white" />
                                </div>
                                <a href="https://wa.me/917838249321" className="text-xl text-black font-semibold mt-10 group-hover:text-white transition-colors duration-300">Click to WhatsApp Us</a>
                                <p className="text-gray-700 group-hover:text-white transition-colors duration-300">+91 7838249321</p>
                            </div>
                        </div>
                    </div>
                    {/** Call Us Card */}
                    <div className="group flex flex-col items-center mb-8 md:mb-0 relative w-96 h-96">
                        <div className="w-full h-full relative overflow-hidden p-8 bg-white transition-transform duration-300 group-hover:transform group-hover:scale-105">
                            <Image src={TabContent} alt="Call" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            <div className="absolute inset-0 bg-[#9AC435] opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className='p-6 rounded-full border-2 border-black group-hover:border-transparent bg-white transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:-translate-y-2'>
                                    <FaPhone className="text-[#9AC435] text-7xl group-hover:bg-white" />
                                </div>
                                <p className="text-xl font-semibold text-black mt-10 group-hover:text-white transition-colors duration-300">Call Us On</p>
                                <p className="text-gray-700 group-hover:text-white transition-colors duration-300">+91 7838249321</p>
                                <p className="text-gray-700 group-hover:text-white transition-colors duration-300">Days of operation: Monday - Saturday</p>
                                <p className="text-gray-700 group-hover:text-white transition-colors duration-300">Hours of operation: 10:00AM to 6:00PM</p>
                            </div>
                        </div>
                    </div>
                    {/** Email Card */}
                    <div className="group flex flex-col items-center relative w-96 h-96">
                        <div className="w-full h-full relative overflow-hidden p-8 bg-white transition-transform duration-300 group-hover:transform group-hover:scale-105">
                            <Image src={TabContent} alt="Email" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            <div className="absolute inset-0 bg-[#9AC435] opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className='p-6 rounded-full border-2 border-black group-hover:border-transparent bg-white transition-all duration-300 group-hover:transform group-hover:scale-110 group-hover:-translate-y-2'>
                                    <FaEnvelope className="text-[#9AC435] text-7xl group-hover:bg-white" />
                                </div>
                                <p className="text-xl font-semibold text-black mt-10 group-hover:text-white transition-colors duration-300">Write To Us On</p>
                                <p className="text-gray-700 group-hover:text-white transition-colors duration-300">dietghardev@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
