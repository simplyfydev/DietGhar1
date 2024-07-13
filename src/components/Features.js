import Image from "next/image";
import natural from "@/assets/natural.png";
import food from "@/assets/food.png";
import f1 from "@/assets/Feature1.png";
import f2 from "@/assets/Feature2.png";
import f3 from "@/assets/Feature3.png";
import f4 from "@/assets/Feature4.png";
import f5 from "@/assets/Feature5.png";
import f6 from "@/assets/Feature6.png";
import { SlPeople } from "react-icons/sl";

export default function Features() {
  return (
    <>
      <div className="px-14 bg-white py-12">
        <h1 className="text-[#4A6213] text-4xl">Who are we?</h1>
        <p className="text-[#212121] text-lg mt-6">
          We at DietGhar believe in promoting a healthy way of living. Our
          community of beautiful clients has grown over the&#x2c; tears&#x2c; not only in
          numbers but also in their journey towards their desired physique.
          Entrust us with your goals and we won&#x27;t disappoint you
        </p>
        <button className="flex bg-[#9AC435] mt-4 text-white rounded-full px-6 py-3 hover:bg-[#9AC435] transition border-2 shadow-lg border-white ">
         Explore About Us
          <SlPeople className="text-xl ml-2 mt-[2px]"/>
        </button>
      </div>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <div className="flex justify-between text-4xl mb-8">
            <Image src={natural} className="w-33 h-24" />
            <Image src={food} className="w-28 h-24" />
          </div> */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              <span className="relative inline-block">
                {/* <span className="relative z-10">natural</span> */}
                <span className="absolute inset-0 transform -skew-x-6 z-0"></span>
              </span>
              <span className="relative inline-block mx-2 text-green-600 ">
                Eating
              </span>
              <span className="relative inline-block">
                <span className="relative z-10">
                  smart has never been easier
                </span>
                <span className="absolute inset-0 transform -skew-x-6 z-0"></span>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Image src={f1} />
              <h3 className="text-lg font-semibold text-gray-900">
                Follow any eating style or create your own
              </h3>
              <p className="mt-2 text-base text-gray-600">
                You can customize popular eating styles like vegan and paleo to
                match your needs and preferences.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={f2} />
              <h3 className="text-lg font-semibold text-gray-900">
                Reduce food waste
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Planning ahead means less produce going bad in the fridge. Add
                what you already own to the virtual pantry and our algorithms
                will use it up with priority.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={f3} />
              <h3 className="text-lg font-semibold text-gray-900">
                Take the anxiety out of picking what to eat
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Make the important decisions ahead of time and on your own
                schedule. Then there&#x27;s nothing to worry about when it&#x27;s time to
                eat.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={f4} />
              <h3 className="text-lg font-semibold text-gray-900">
                Home-cooked food
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Preparing meals at home ensures you know exactly what&#x27;s in your
                food. With our guidance&#x2c; you can easily create delicious and
                nutritious meals using simple ingredients you already have.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={f5} />
              <h3 className="text-lg font-semibold text-gray-900">
                Cost effective
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Planning your meals in advance saves money by reducing the need
                for last-minute purchases. By using ingredients you already
                have&#x2c; our system helps you make the most of your grocery budget.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={f6} />
              <h3 className="text-lg font-semibold text-gray-900">
                Customized food
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Create meals that match your tastes and dietary needs. Enter
                your preferences&#x2c; and our system will make personalized meal
                plans just for you. Enjoy a diet that&#x27;s made for you without the
                hassle of planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
