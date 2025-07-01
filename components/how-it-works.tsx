
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Star, Shield } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="bg-dark-950 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Como a Spicy Models Funciona</h1>
          <p className="text-xl text-gray-400">
            Uma plataforma desenhada para oferecer encontros de alto padrão com máxima segurança, discrição e simplicidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Para Clientes */}
          <Card className="bg-dark-900 border-gray-800 p-6 h-full">
            <CardHeader className="flex-row items-center gap-4 mb-4">
              <div className="bg-primary-500/20 p-3 rounded-full">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <CardTitle className="text-3xl font-bold">Para Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">1. Explore com Liberdade</h4>
                    <p className="text-gray-400">Navegue pelos perfis de nossas modelos verificadas. Utilize filtros de busca avançados para encontrar exatamente o que você procura.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">2. Acesse o Perfil Completo</h4>
                    <p className="text-gray-400">Para ver a galeria de fotos completa e informações de contato, realize um cadastro rápido e seguro. Membros VIP têm acesso irrestrito.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">3. Conecte-se com Segurança</h4>
                    <p className="text-gray-400">Utilize nosso chat privado ou o contato direto (disponível para membros VIP) para combinar os detalhes do encontro com total discrição.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Para Modelos */}
          <Card className="bg-dark-900 border-gray-800 p-6 h-full">
            <CardHeader className="flex-row items-center gap-4 mb-4">
              <div className="bg-gold-500/20 p-3 rounded-full">
                <Star className="h-8 w-8 text-gold-500" />
              </div>
              <CardTitle className="text-3xl font-bold">Para Modelos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">1. Crie seu Perfil Premium</h4>
                    <p className="text-gray-400">O cadastro é gratuito e rápido. Adicione suas melhores fotos, descreva seus serviços e defina seus valores para atrair o público certo.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">2. Verificação e Segurança</h4>
                    <p className="text-gray-400">Nossa equipe realiza uma verificação manual de todos os perfis para garantir a segurança e a autenticidade da plataforma, protegendo você.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">3. Gerencie e Monetize</h4>
                    <p className="text-gray-400">Tenha controle total sobre sua agenda e informações. Receba contatos de clientes de alto padrão e gerencie seus encontros com discrição.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-20">
            <Card className="bg-dark-900 border-gray-800 p-8 max-w-3xl mx-auto">
                <CardHeader className="flex-row items-center gap-4 mb-4 justify-center">
                    <Shield className="h-8 w-8 text-blue-500" />
                    <CardTitle className="text-3xl font-bold">Nosso Compromisso com a Segurança</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-gray-300">
                        A Spicy Models investe em tecnologia e processos rigorosos para garantir um ambiente seguro para todos. Perfis são verificados manualmente, a comunicação é protegida e a sua discrição é o pilar fundamental do nosso serviço. Sua tranquilidade é a nossa prioridade.
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
