import Image from "next/image";
import img1 from "@/assets/Goal1.png"
import img2 from "@/assets/Goal2.png"
import img3 from "@/assets/Goal3.png"
import img4 from "@/assets/Goal4.png"
export default function OurGoal() {
    return (
      <div className="px-12 py-12">
        <h2 className="text-center text-green-700 mb-10 text-3xl font-bold">Our Goal</h2>
        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-white p-2 rounded-full shadow-lg">
                <Image
                  src= {img1}
                  alt="Innovative Solutions"
                  className="w-6 h-6"
                />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8 border border-black">
              <h3 className="text-lg font-semibold text-green-700">Innovative Solutions</h3>
              <p className="text-base font-normal text-gray-700">
                Innovative techniques to stay ahead of trends.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-white p-2 rounded-full shadow-lg">
                <Image
                   src= {img2}
                  alt="Sustainable Practices"
                  className="w-6 h-6"
                />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8 border border-black">
              <h3 className="text-lg font-semibold text-green-700">Sustainable Practices</h3>
              <p className="text-base font-normal text-gray-700">
                Implement sustainability with eco-friendly solutions.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-white p-2 rounded-full shadow-lg">
                <Image
                  src= {img3}
                  alt="Client Satisfaction & Relationship"
                  className="w-6 h-6"
                />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8 border border-black">
              <h3 className="text-lg font-semibold text-green-700">
                Client Satisfaction & Relationship
              </h3>
              <p className="text-base font-normal text-gray-700">
                Prioritize client satisfaction with long term relationships built on trust, transparency, and understanding client needs.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-white p-2 rounded-full shadow-lg">
                <Image
                  src= {img4}
                  alt="Technological Advancement"
                  className="w-6 h-6"
                />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pe-8 border border-black">
              <h3 className="text-lg font-semibold text-green-700">Technological Advancement</h3>
              <p className="text-base font-normal text-gray-700">
                With technology, aiming to enhance the quality of service and product.
              </p>
            </div>
          </li>
        </ol>
      </div>
    );
  }
  
