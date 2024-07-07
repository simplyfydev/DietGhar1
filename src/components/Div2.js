import Image from "next/image";
import mainImage from "@/assets/F1.png";
import behindImage from "@/assets/B1.png";

export default function Div2() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md flex items-center">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-[#6C4E22]">Skin Care Pack</h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Volutpat ac tincidunt risus mollis lectus odio et nunc varius. Arcu gravida imperdiet pharetra viverra tempor. Auctor tristique tellus augue orci.
        </p>
        <button className="mt-6 inline-flex items-center bg-[#95BB3A] text-white text-lg font-medium py-2 px-4 rounded-full hover:bg-[#85aa2a] focus:outline-none focus:ring-4 focus:ring-[#85aa2a]">
          Know more
          <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <p className="mt-4 text-sm text-gray-400">www.dietghar.com</p>
      </div>
      <div className="relative w-1/3">
        <div className="absolute -top-4 -left-4 w-full h-full">
          <Image src={behindImage} alt="Behind Image" className="rounded-lg object-cover" />
        </div>
        <div className="relative">
          <Image src={mainImage} alt="Main Image" className="rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
}
