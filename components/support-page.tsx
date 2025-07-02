
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";

export function SupportPage() {
  return (
    <section className="bg-dark-950 text-white py-20">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText>
            <h1 className="text-5xl font-extrabold mb-4 gradient-text">Suporte Spicy Models</h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-gray-400">
              Estamos aqui para ajudar! Entre em contato conosco para qualquer dúvida, problema ou sugestão.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={0.3}>
            {/* Contato por Email */}
            <Card className="bg-dark-900 border-gray-800 p-6 text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold">Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300">Envie-nos um email e responderemos o mais breve possível.</p>
                <a href="mailto:suporte@spicymodels.com" className="text-primary-500 hover:underline text-lg font-semibold">
                  suporte@spicymodels.com
                </a>
              </CardContent>
            </Card>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            {/* Contato por WhatsApp */}
            <Card className="bg-dark-900 border-gray-800 p-6 text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300">Fale conosco diretamente pelo WhatsApp para um atendimento rápido.</p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline text-lg font-semibold">
                  +55 11 99999-9999
                </a>
              </CardContent>
            </Card>
          </AnimatedText>
        </div>

        {/* Seção de Perguntas Frequentes (Exemplo) */}
        <AnimatedText delay={0.5}>
          <Card className="bg-dark-900 border-gray-800 p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-xl mb-2">Como faço para me cadastrar como modelo?</h3>
                <p className="text-gray-400">O processo de cadastro é simples e rápido. Clique em "Anunciar Grátis" na página inicial e siga as instruções. Sua conta passará por uma verificação manual.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Minhas informações estão seguras?</h3>
                <p className="text-gray-400">Sim, priorizamos a segurança e a privacidade dos nossos usuários. Utilizamos criptografia de ponta e seguimos rigorosos padrões de segurança para proteger seus dados.</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Como posso assinar um plano VIP?</h3>
                <p className="text-gray-400">Você pode ver todos os nossos planos VIP na página "Seja VIP". Escolha o plano que melhor se adapta às suas necessidades e siga as instruções para assinar.</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedText>
      </div>
    </section>
  );
}
