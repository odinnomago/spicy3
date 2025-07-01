
import { Header } from "@/components/header";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
