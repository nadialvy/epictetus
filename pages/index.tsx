import FeaturedThumbnail from "../components/FeaturedThumbnail"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Posts from "../components/Posts"

export default function Home(){
  return (
    <div className="
      bg-gradient-to-b
      from-gray-600 to bg-gray-900
      min-h-screen
      py-12
      text-white
      2xl:px-64
      xl:px-40
      lg:px-32
      md:px-8
    ">
      <Navbar />
      <FeaturedThumbnail />
      <Posts />
      <Footer />
    </div>
  )
}
