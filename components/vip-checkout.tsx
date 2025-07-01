
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "VIP Mensal",
    price: "R$ 99",
    period: "/mês",
    features: [
      "Acesso a todas as galerias",
      "Chat privado com modelos",
      "Selo de usuário VIP no perfil",
      "Suporte prioritário",
    ],
    isPopular: false,
  },
  {
    name: "VIP Anual",
    price: "R$ 899",
    period: "/ano",
    features: [
      "Todos os benefícios do plano mensal",
      "Desconto de 25% na assinatura",
      "Acesso antecipado a novos perfis",
      "Convites para eventos exclusivos",
    ],
    isPopular: true,
  },
  {
    name: "DIAMOND Club",
    price: "R$ 1.999",
    period: "/ano",
    features: [
      "Todos os benefícios do plano VIP Anual",
      "Verificação de identidade prioritária",
      "Concierge para agendamentos",
      "Presente de boas-vindas exclusivo",
    ],
    isPopular: false,
  },
];

export function VipCheckout() {
  const [selectedPlan, setSelectedPlan] = useState("VIP Anual");

  return (
    <section className="bg-dark-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">Torne-se um Membro VIP</h1>
          <p className="text-xl text-gray-400">
            Desbloqueie o acesso total à nossa plataforma e desfrute de benefícios exclusivos que transformarão sua experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "bg-dark-900 border-gray-800 flex flex-col",
                { "border-primary-500/80 border-2 shadow-primary-500/20 shadow-2xl": selectedPlan === plan.name }
              )}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {plan.isPopular && (
                <div className="bg-primary-600 text-white text-sm font-bold text-center py-1 rounded-t-lg">
                  MAIS POPULAR
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-white">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">
                  <span className="text-4xl font-bold text-primary-500">{plan.price}</span>
                  <span className="text-lg">{plan.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className={cn(
                    "w-full text-lg font-semibold",
                    selectedPlan === plan.name
                      ? "bg-primary-600 hover:bg-primary-700"
                      : "bg-gray-700 hover:bg-gray-600"
                  )}
                >
                  Selecionar Plano
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
