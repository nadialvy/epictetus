import FeaturedThumbnail from "../components/FeaturedThumbnail"
import Navbar from "../components/Navbar"
import Paragraph from "../components/Paragraph"
import PostCard from "../components/PostCard"
import Posts from "../components/Posts"
import Profile from "../components/Profile"
import SubParagraph from "../components/SubParagraph"

export default function Home(){
  return (
    <div className="bg-gradient-to-b from-gray-600 to bg-gray-900 min-h-screen px-64 py-12 text-white">
      <Navbar />
      <FeaturedThumbnail />
      <Posts />
      <footer className="pt-16 pb-2 text-center">
        <SubParagraph
          content="Copyright (c) 2021 - Design By Nauval."
          needOpacity={true}
        />
      </footer>
    </div>
  )
}
