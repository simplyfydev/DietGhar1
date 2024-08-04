import ArticleGrid from "@/components/Blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <div>
      <Navbar/>
      <ArticleGrid/>
      <Footer/>
    </div>
  )
}
