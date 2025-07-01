import { Header } from "@/components/header";
import { AboutUsSection } from "@/components/about-us-section";
import { Footer } from "@/components/footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <AboutUsSection />
      <Footer />
    </div>
  );
}