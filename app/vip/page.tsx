
import { Header } from "@/components/header";
import { VipCheckout } from "@/components/vip-checkout";
import { Footer } from "@/components/footer";

export default function VipPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <VipCheckout />
      <Footer />
    </div>
  );
}
