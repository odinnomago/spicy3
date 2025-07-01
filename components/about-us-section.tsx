
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, Users, ShieldCheck, Heart } from "lucide-react";

export function AboutUsSection() {
  return (
    <section className="bg-dark-950 text-white py-20">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-4 gradient-text">Sobre a Spicy Models</h1>
          <p className="text-xl text-gray-400">
            Conheça nossa missão, valores e o que nos torna a plataforma de luxo mais confiável.
          </p>
        </div>

        {/* Quem Somos */}
        <Card className="bg-dark-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary-500 flex items-center"><Users className="h-8 w-8 mr-3" /> Quem Somos</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              A Spicy Models nasceu da visão de criar um espaço online seguro, discreto e exclusivo para a conexão entre acompanhantes de luxo e clientes exigentes. Entendemos a necessidade de um ambiente onde a beleza, o profissionalismo e a discrição se encontram, e é exatamente isso que oferecemos.
            </p>
            <p>
              Não somos uma agência, mas sim uma plataforma que facilita a autonomia de modelos e a busca qualificada de clientes, garantindo que cada interação seja baseada em respeito mútuo e expectativas claras.
            </p>
          </CardContent>
        </Card>

        {/* No Que Acreditamos */}
        <Card className="bg-dark-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary-500 flex items-center"><Gem className="h-8 w-8 mr-3" /> No Que Acreditamos</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 text-lg leading-relaxed space-y-4">
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Segurança Acima de Tudo</h4>
                  <p className="text-gray-400">Investimos pesado em tecnologia e processos de verificação para garantir que todos os perfis sejam autênticos e que suas informações estejam sempre protegidas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Respeito e Discrição</h4>
                  <p className="text-gray-400">Promovemos um ambiente onde o respeito mútuo e a discrição são inegociáveis. Sua privacidade e conforto são nossa prioridade máxima.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Qualidade e Exclusividade</h4>
                  <p className="text-gray-400">Selecionamos cuidadosamente cada perfil para garantir que você encontre apenas o mais alto padrão em companhia e experiência.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Declaração Final (Adaptado da Declaração Final dos Termos de Uso) */}
        <Card className="bg-dark-900 border-gray-800 text-center">
          <CardContent className="text-gray-300 text-lg leading-relaxed p-6">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Nosso Compromisso</h2>
            <p>
              <strong className="text-green-400">Na Spicy Models, acreditamos que a excelência e a confiança são a base para experiências verdadeiramente inesquecíveis.</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
