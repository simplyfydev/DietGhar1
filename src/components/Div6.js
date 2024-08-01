import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "@/components/style2.css"
export default function Home() {
  return (
    <div className="bg-[#F1F1F1] text-black p-8 flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl mb-2">
          <span className="text-[#4A6213]">DietGhar</span> ways to get in shape
        </h1>
        <p className="text-lg">
          Get personalised Diet and Workout Plans based on your goals!
        </p>
      </div>
      <div className="flex flex-col p-4 sm:p-8 md:p-12 justify-center">
        <div data-theme="teal" className="mx-auto">
          <h2 className="sr-only">Featured case study</h2>
          <section className="font-sans text-black flex flex-col sm:flex-row sm:space-x-16 space-y-4 sm:space-y-0">
            {["Ratio Nutrition", "Meal Plans", "Fit Body Form"].map((title, index) => (
              <div
                key={index}
                className="lg:items-center fancy-corners fancy-corners--large fancy-corners--top-left bg-white shadow-2xl flex-1 max-w-xs rounded-br-3xl"
              >
                 <div className="w-40 h-2 bg-[#4A6213] mx-auto rounded-bl-xl rounded-br-xl "></div>
                <div className="leading-relaxed ">
                
                  <h2 className="leading-tight text-xl text-center font-bold mt-6">{title}</h2>
                  <p className="mt-6 text-sm ml-6 mr-4 mb-8">
                    {index === 0 && "Healthy diet plans for different dietary needs, fitness goals, and preferences."}
                    {index === 1 && "Our diet plans are aimed at increasing energy levels to strengthen the immune system."}
                    {index === 2 && "Various workout videos available to make you fit and healthy at your home."}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="text-center mt-8 ">
        <button className="flex bg-[#9AC435] text-white rounded-full px-6 py-3 hover:bg-[#9AC435] transition border-2 shadow-lg border-white ">
          View Plans
          <FaRegArrowAltCircleRight className="text-xl ml-2 mt-[2px]"/>
        </button>
      </div>
    </div>
  );
}