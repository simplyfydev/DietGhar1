import Div1 from "@/components/Div1";
import Div6 from "@/components/Div6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousal from "@/components/Carousal";
import ReviewButton from "@/components/ReviewButton";
import Features from "@/components/Features";
import Carousal1 from "@/components/Carousal1";
import FirstCarousal from "@/components/FirstCarousal";
import Expectation from "@/components/Expectation";
import HoverDiv from "@/components/HoverDiv";
import LastDiv from "@/components/LastDiv";
import PricingDiv from "@/components/PricingDiv";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Div1 />
      <FirstCarousal />
      <div className="bg-white">
        <Carousal1 />
      </div>
      <Features />
      <Div6 />
      <Expectation />
      <HoverDiv/>
      <PricingDiv/>
      <main className="grid content-center overflow-hidden gap-4 w-full text-navy bg-white">
        <Carousal />
      </main>
      
      <div className="bg-white py-12">
        <ReviewButton />
      </div>
      <div className="bg-white">
      <LastDiv/>
      </div>
      <Footer />
    </div>
  );
}
