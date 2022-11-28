import FeaturedThumbnail from "../components/FeaturedThumbnail"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Posts from "../components/Posts"

export default function Home(){
  return (
    <div className="bg-gradient-to-b from-gray-600 to bg-gray-900 min-h-screen px-64 py-12 text-white">
      <Navbar />
      <FeaturedThumbnail />
      <Posts />
      <Footer />
    </div>
  )
}
