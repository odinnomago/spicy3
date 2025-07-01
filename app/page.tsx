import { Header } from "@/components/header";
import { LandingHeroSection } from "@/components/landing-hero-section";
import { LandingShortcutsSection } from "@/components/landing-shortcuts-section";
import { LandingAdvantagesSection } from "@/components/landing-advantages-section";
import { LandingFeaturedModelsSection } from "@/components/landing-featured-models-section";
import { LandingCheckoutPlansSection } from "@/components/landing-checkout-plans-section";
import { LandingFooter as Footer } from "@/components/landing-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <LandingHeroSection />
      <LandingShortcutsSection />
      <LandingAdvantagesSection />
      <LandingFeaturedModelsSection />
      <LandingCheckoutPlansSection />
      <Footer />
    </div>
  );
}
