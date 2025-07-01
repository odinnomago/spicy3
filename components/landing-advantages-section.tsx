
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Heart, Users, Gem } from "lucide-react";

export function LandingAdvantagesSection() {
  const advantages = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-red-500 mb-4" />,
      title: "Segurança e Discrição",
      description: "Priorizamos sua privacidade com perfis verificados e comunicação segura.",
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500 mb-4" />,
      title: "Experiências Memoráveis",
      description: "Conecte-se com modelos de luxo para momentos inesquecíveis e personalizados.",
    },
    {
      icon: <Users className="h-10 w-10 text-red-500 mb-4" />,
      title: "Perfis Autênticos e Diversos",
      description: "Uma vasta seleção de modelos reais, com biografias detalhadas e fotos de alta qualidade.",
    },
    {
      icon: <Gem className="h-10 w-10 text-red-500 mb-4" />,
      title: "Suporte Premium",
      description: "Conte com nossa equipe para um atendimento rápido e eficiente, sempre que precisar.",
    },
  ];

  return (
    <section className="bg-dark-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Por Que Escolher a Spicy Models?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-dark-900 border-gray-800 text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-red-500/20">
              <CardContent className="p-0">
                {advantage.icon}
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-400 text-sm">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
