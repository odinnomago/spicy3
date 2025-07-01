
import { Header } from "@/components/header";
import { TermsAndPolicies } from "@/components/terms-and-policies";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <TermsAndPolicies />
      <Footer />
    </div>
  );
}
