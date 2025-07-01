import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Crown } from "lucide-react";

export function About() {
  return (
    <section className="bg-dark-950 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Sobre a Spicy Models</h1>
          <p className="text-xl text-gray-400">
            A plataforma líder em encontros de alto padrão no Brasil, onde elegância e discrição se encontram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-dark-900 border-gray-800 p-6">
            <CardHeader className="flex-row items-center gap-4 mb-4">
              <div className="bg-primary-500/20 p-3 rounded-full">
                <Heart className="h-8 w-8 text-primary-500" />
              </div>
              <CardTitle className="text-2xl font-bold">Quem Somos</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                Somos uma plataforma premium que revolucionou o mercado de acompanhantes de luxo no Brasil. 
                Nossa missão é proporcionar experiências únicas, mantendo os mais altos padrões de qualidade e 
                discrição que nossos usuários merecem.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-dark-900 border-gray-800 p-6">
            <CardHeader className="flex-row items-center gap-4 mb-4">
              <div className="bg-gold-500/20 p-3 rounded-full">
                <Crown className="h-8 w-8 text-gold-500" />
              </div>
              <CardTitle className="text-2xl font-bold">No Que Acreditamos</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                Acreditamos que encontros especiais merecem um ambiente à altura. Nossos valores fundamentais são 
                respeito mútuo, privacidade absoluta e excelência em cada detalhe do serviço que oferecemos.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-dark-900 border-gray-800 p-8 max-w-3xl mx-auto">
          <CardHeader className="flex-row items-center gap-4 mb-4 justify-center">
            <Shield className="h-8 w-8 text-primary-500" />
            <CardTitle className="text-2xl font-bold">Nosso Compromisso</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-300">
            <p>
              Investimos em tecnologia e processos rigorosos para garantir um ambiente seguro e discreto. 
              Todos os perfis são verificados manualmente e a sua privacidade é nossa prioridade absoluta.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}