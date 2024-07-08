import e1 from "@/assets/Expectation1.png";
import e2 from "@/assets/Expectation2.png";
import e3 from "@/assets/Expectation3.png";
import Image from "next/image";

export default function Expectation() {
  return (
    <div className="p-6 bg-white">
      <div>
        <h1 className="text-[#4A6213] text-center text-3xl">
          What can be expect from us?
        </h1>
        <p className="text-[#212121] text-center mt-8 px-24 text-lg">
          We at DietGhar believe that every body is uniquely made and for the
          same, we expertise in making you your personalised diet along with a
          workout plan. Your health is our happiness. Our experts are here to
          motivate and help you in the best way possible, not only in terms of
          eating but also in terms of Living a healthy Body Within.
        </p>
      </div>
      <div className="flex flex-wrap mt-12 justify-center gap-52 mb-24">
        <div className="w-64 h-auto bg-white rounded-lg shadow-xl flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="justify-center">
                <Image src={e1} alt="" className="w-14 h-24 text-white" />
              </div>
            </div>
            <h3 className="justify-start mt-4 text-lg font-semibold text-green-700">
              Trusted Services
            </h3>
            <p className="text-left mt-2 text-gray-600 px-4">
              We at DietGhar believe in keeping our clients happy. Client
              satisfaction and their wellbeing is our Prime concern. Your Trust
              in us is what makes us grow more and more.
            </p>
          </div>
          <div className="bg-[#9AC435] h-2 w-3/4 rounded-t-lg mt-4 mx-auto"></div>
        </div>
        <div className="w-64 h-auto bg-white rounded-lg shadow-xl flex flex-col justify-between ">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="justify-center">
                <Image src={e2} alt="" className="w-14 h-24 text-white" />
              </div>
            </div>
            <h3 className="justify-start mt-4 text-lg font-semibold text-green-700">
              Natural Diet Plans
            </h3>
            <p className="text-left mt-2 text-gray-600 px-4">
              Our plans aim simple home cooked food that can be easily managed
              at comfort of home without indulging yourself in any fancy or Fad
              Diets or shortcuts.
            </p>
          </div>
          <div className="bg-[#9AC435] h-2 w-3/4 rounded-t-lg mt-4 mx-auto"></div>
        </div>
        <div className="w-64 h-auto bg-white rounded-lg shadow-xl flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="justify-center">
                <Image src={e3} alt="" className="w-14 h-24 text-white" />
              </div>
            </div>
            <h3 className="justify-start mt-4 text-lg font-semibold text-green-700">
              Personal Touch
            </h3>
            <p className="text-left mt-2 text-gray-600 px-4">
              Our Mentor as well as team of experts ensure that you are given
              timely service hassle free.
            </p>
          </div>
          <div className="bg-[#9AC435] h-2 w-3/4 rounded-t-lg mt-4 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
