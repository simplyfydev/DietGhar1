import Div1 from "@/components/Div1";
import Div6 from "@/components/Div6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousal from "@/components/Carousal";
import ReviewButton from "@/components/ReviewButton";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Div1 />
      <Div6 />
      <main className="grid content-center overflow-hidden gap-4 w-full text-navy bg-white">
        <Carousal />
      </main>
      <div className="bg-white py-12">
        <ReviewButton />
      </div>
      <Footer />
    </div>
  );
}
