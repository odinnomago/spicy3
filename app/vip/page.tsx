
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckoutPlans } from "@/components/checkout-plans";
import { CheckoutPlansClients } from "@/components/checkout-plans-clients";

export default function VipPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <CheckoutPlans />
      <CheckoutPlansClients />
      <Footer />
    </div>
  );
}
