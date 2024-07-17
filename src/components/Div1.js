import Image from "next/image";
import div1Image from "@/assets/div1Image.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Div1() {
  return (
    <section className="bg-[#eef1e6] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row ">
        <div className="md:w-1/2 space-y-10 mt-32">
          <div className="text-gray-900 space-y-3">
            <h1 className="text-3xl "><span className="text-[#4A6213] ">Healthy lifestyle</span> is your
            journey towards</h1>
            <h1 className="text-black text-3xl">the desired Destination</h1>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Our community of beautiful clients has grown over <br/> years, not
            only in number but also in their journey<br/> towards their{" "}
            <span className="text-[#E7281C]">desired physique</span>.
          </p>
          <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 hover:bg-[#9AC435] transition border-2 shadow-lg border-white">
            View Plans
            <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]" />
          </button>
        </div>
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <Image src={div1Image} alt="image" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
