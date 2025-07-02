
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";

export function LandingHeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?sensual,luxury,model')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent"></div>

      <div className="relative z-10 text-center px-4">
        <AnimatedText>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-shadow-lg">
            Encontre Modelos de Luxo
          </h1>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descubra experiências premium com segurança, discrição e confiança.
          </p>
        </AnimatedText>
        <AnimatedText delay={0.4}>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver Modelos Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </AnimatedText>
      </div>
    </section>
  );
}
