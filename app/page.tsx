import { Header } from "@/components/header";
import { SearchHero } from "@/components/search-hero";
import { ProfileShowcase } from "@/components/profile-showcase";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <SearchHero />
      <ProfileShowcase />
      <Footer />
    </div>
  );
}
