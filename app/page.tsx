import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SearchSection } from "@/components/search-section"
import { StoriesSection } from "@/components/stories-section"
import { FeaturedProfiles } from "@/components/featured-profiles"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <Hero />
      <SearchSection />
      <StoriesSection />
      <FeaturedProfiles />
      <Footer />
    </div>
  )
}
