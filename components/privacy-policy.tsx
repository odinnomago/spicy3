
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, XCircle, Mail, Phone, MapPin, Shield, Users, Star, Crown, Diamond } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";

export function PrivacyPolicy() {
  return (
    <section className="bg-dark-950 text-white py-16">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedText>
            <h1 className="text-5xl font-extrabold mb-4 gradient-text">Política de Privacidade</h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-gray-400">
              Sua privacidade é nossa prioridade. Entenda como coletamos, usamos e protegemos seus dados.
            </p>
          </AnimatedText>
        </div>

        {/* 3. Política de Privacidade (Conteúdo adaptado da seção 3 dos Termos de Uso) */}
        <AnimatedText delay={0.3}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">1. Coleta de Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Coletamos apenas dados necessários para:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Cadastro de contas (nome, email, telefone, senha criptografada)</li>
                <li>Publicação de anúncios</li>
                <li>Processamento de pagamentos (dados de pagamento via Stripe)</li>
                <li>Melhorias de segurança e experiência do usuário</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">2. Armazenamento e Segurança</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>Dados armazenados de forma criptografada em servidores seguros.</li>
                <li>Utilizamos SSL e padrões de segurança PCI-DSS para processamento de pagamentos.</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">3. Uso dos Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>Exclusivamente para fins operacionais, analíticos e de melhoria da plataforma.</li>
                <li><strong className="text-red-400">Nunca vendemos dados pessoais</strong> a terceiros.</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">4. Direitos do Usuário</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>Acessar, corrigir ou excluir seus dados pessoais mediante solicitação via suporte.</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* Contato e Suporte (Adaptado da seção 13 dos Termos de Uso) */}
        <AnimatedText delay={0.7}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">5. Contato e Suporte</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>Para dúvidas ou solicitações relacionadas à privacidade:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gold-400" />
                  <strong className="text-primary-400">Email:</strong> suporte@spicymodels.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gold-400" />
                  <strong className="text-primary-400">WhatsApp:</strong> +55 xx xxxxx-xxxx
                </li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* Declaração Final (Adaptado da Declaração Final dos Termos de Uso) */}
        <AnimatedText delay={0.8}>
          <Card className="bg-dark-900 border-gray-800 text-center">
            <CardContent className="text-gray-300 text-lg leading-relaxed p-6">
              <h2 className="text-3xl font-bold text-primary-500 mb-4">Declaração Final</h2>
              <p>
                Ao utilizar a Spicy Models, você confirma ter lido, entendido e aceito integralmente nossa Política de Privacidade.
              </p>
            </CardContent>
          </Card>
        </AnimatedText>
      </div>
    </section>
  );
}
