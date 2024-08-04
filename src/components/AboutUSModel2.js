import Image from "next/image";
import img1 from "@/assets/Goal1.png"
import img2 from "@/assets/Goal2.png"
import img3 from "@/assets/Goal3.png"
import img4 from "@/assets/Goal4.png"

export const AboutUSModel2 = () => {
    return (
        <div className="bg-white py-16 text-center">
            <section className="flex flex-col sm:flex-row justify-center items-start px-12  space-y-8 sm:space-y-0 sm:space-x-16">
                <div className="flex-1">
                    <h2 className="text-3xl text-[#637F22] font-bold">Our Vision</h2>
                    <p className="text-gray-600 mt-4 mx-auto max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur. Magna dictumst ac ut diam arcu elit nullam diam.
                        Nibh praesent duis quis duis. Libero quis vel blandit elementum urna enim augue.
                        Facilisi tristique donec velit turpis lorem et egestas est.
                    </p>
                </div>

                <div className="flex-1">
                    <h2 className="text-3xl text-[#637F22] font-bold">Our Mission</h2>
                    <p className="text-gray-600 mt-4 mx-auto max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur. Magna dictumst ac ut diam arcu elit nullam diam.
                        Nibh praesent duis quis duis. Libero quis vel blandit elementum urna enim augue.
                        Facilisi tristique donec velit turpis lorem et egestas est.
                    </p>
                </div>
            </section>

            <section className="py-8 mt-8" >
                <h2 className="text-3xl text-[#637F22] font-bold text-center mb-8">Our Goal</h2>

                <div className="flex flex-col sm:flex-row justify-center items-start space-y-8 sm:space-y-0 sm:space-x-8">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-72 lg:w-80 relative">
                        <h3 className="text-xl text-[#9AC435] font-semibold">Innovative Solutions</h3>
                        <p className="text-gray-600 mt-2">Innovative techniques to stay ahead of trends.</p>
                        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2">
                            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-gray-100"></div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-72 lg:w-80 relative">
                        <h3 className="text-xl text-[#9AC435] font-semibold">Client Satisfaction & Relationship</h3>
                        <p className="text-gray-600 mt-2">Prioritize client satisfaction with long term relationships built on trust, transparency, and understanding client needs.</p>
                        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2">
                            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-gray-100"></div>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center items-center mt-8 mb-8">
                    <div className="flex items-center justify-around w-9/12 border-t-2 border-[#212121] absolute z-0"></div>
                    <div className="relative z-10 flex items-center justify-around w-full">
                        <div className="flex items-center justify-center bg-white p-2 rounded-full border-2 border-[#9AC435]">
                            <Image src={img1} alt="Icon 1" className="w-8 h-8" />
                        </div>
                        <div className="flex items-center justify-center bg-white p-2 rounded-full border-2 border-[#9AC435]">
                            <Image src={img2} alt="Icon 2" className="w-8 h-8" />
                        </div>
                        <div className="flex items-center justify-center bg-white p-2 rounded-full border-2 border-[#9AC435]">
                            <Image src={img3} alt="Icon 3" className="w-8 h-8" />
                        </div>
                        <div className="flex items-center justify-center bg-white p-2 rounded-full border-2 border-[#9AC435]">
                            <Image src={img4} alt="Icon 4" className="w-8 h-8" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-start space-y-8 sm:space-y-0 sm:space-x-8 mt-8">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-72 lg:w-80 relative">
                        <h3 className="text-xl text-[#9AC435] font-semibold">Sustainable Practices</h3>
                        <p className="text-gray-600 mt-2">Implement sustainability with eco-friendly solutions.</p>
                        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
                            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-gray-100"></div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-72 lg:w-80 relative">
                        <h3 className="text-xl text-[#9AC435] font-semibold">Technological Advancement</h3>
                        <p className="text-gray-600 mt-2">With the technology, aiming to enhance the quality of service and product.</p>
                        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
                            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-gray-100"></div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};
