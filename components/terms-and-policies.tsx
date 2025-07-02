
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, XCircle, Mail, Phone, MapPin, Shield, Users, Star, Crown, Diamond } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";

export function TermsAndPolicies() {
  return (
    <section className="bg-dark-950 text-white py-16">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedText>
            <h1 className="text-5xl font-extrabold mb-4 gradient-text">Termos de Uso e Políticas Gerais</h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-gray-400">
              Transparência e segurança são nossos pilares. Conheça as regras que regem a Spicy Models.
            </p>
          </AnimatedText>
        </div>

        {/* 1. Sobre a Spicy Models */}
        <AnimatedText delay={0.3}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">1. Sobre a Spicy Models</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              <p>
                A Spicy Models é uma plataforma online de anúncios de acompanhantes de luxo, conectando
                <strong className="text-primary-400"> modelos e clientes de forma segura, ética e profissional</strong>. Não somos uma agência, não intermediamos encontros e não atuamos como empregadores ou representantes dos anunciantes.
              </p>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 2. Aceitação dos Termos */}
        <AnimatedText delay={0.4}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">2. Aceitação dos Termos</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              <p>
                Ao acessar e utilizar a Spicy Models, o usuário concorda integralmente com estes Termos de Uso, Política de Privacidade e demais políticas aqui descritas. Caso não concorde, pedimos que não utilize nossos serviços.
              </p>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 3. Política de Privacidade */}
        <AnimatedText delay={0.5}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">3. Política de Privacidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gold-400">3.1 Coleta de Dados</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cadastro de contas (nome, email, telefone, senha criptografada)</li>
                  <li>Publicação de anúncios</li>
                  <li>Processamento de pagamentos (dados de pagamento via Stripe)</li>
                  <li>Melhorias de segurança e experiência do usuário</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gold-400">3.2 Armazenamento e Segurança</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dados armazenados de forma criptografada em servidores seguros.</li>
                  <li>Utilizamos SSL e padrões de segurança PCI-DSS para processamento de pagamentos.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gold-400">3.3 Uso dos Dados</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Exclusivamente para fins operacionais, analíticos e de melhoria da plataforma.</li>
                  <li><strong className="text-red-400">Nunca vendemos dados pessoais</strong> a terceiros.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gold-400">3.4 Direitos do Usuário</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Acessar, corrigir ou excluir seus dados pessoais mediante solicitação via suporte.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 4. Política de Conteúdo */}
        <AnimatedText delay={0.6}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">4. Política de Conteúdo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-green-400 flex items-center"><CheckCircle className="h-6 w-6 mr-2" /> Permitido</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Anúncios verdadeiros e profissionais.</li>
                  <li>Fotos de maioridade com qualidade e descrição clara.</li>
                  <li>Conteúdo adulto consensual permitido pela lei.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-red-400 flex items-center"><XCircle className="h-6 w-6 mr-2" /> Proibido</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Conteúdo envolvendo menores de 18 anos.</li>
                  <li>Conteúdo não consensual, forçado ou violento.</li>
                  <li>Divulgação de dados pessoais sensíveis (endereços residenciais, documentos).</li>
                  <li>Discurso de ódio, racismo, homofobia, transfobia, gordofobia ou qualquer forma de discriminação.</li>
                  <li>Exploração sexual, tráfico humano ou qualquer atividade ilegal.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 5. Política de Modelos */}
        <AnimatedText delay={0.7}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">5. Política de Modelos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gold-400">5.1 Cadastro</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Permitido apenas para maiores de 18 anos.</li>
                  <li>Documentos de verificação podem ser solicitados para segurança.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gold-400">5.2 Planos VIP</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Plano Básico */}
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="font-bold text-xl mb-2">Plano Básico</h4>
                    <p className="text-primary-500 text-2xl font-bold mb-4">Grátis</p>
                    <ul className="text-sm space-y-1">
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Perfil listado sem destaque.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Upload de até 3 fotos.</li>
                    </ul>
                  </div>
                  {/* Plano VIP Bronze */}
                  <div className="bg-amber-950/50 p-4 rounded-lg border border-amber-800/70">
                    <h4 className="font-bold text-xl mb-2 flex items-center"><Crown className="h-5 w-5 mr-2 text-amber-500" /> VIP Bronze</h4>
                    <p className="text-primary-500 text-2xl font-bold mb-4">R$149<span className="text-sm text-gray-400">/mês</span></p>
                    <ul className="text-sm space-y-1">
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Destaque padrão nas buscas.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Fotos ilimitadas.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Estatísticas básicas e suporte prioritário.</li>
                    </ul>
                  </div>
                  {/* Plano VIP Ouro */}
                  <div className="bg-yellow-950/50 p-4 rounded-lg border border-yellow-800/70">
                    <h4 className="font-bold text-xl mb-2 flex items-center"><Star className="h-5 w-5 mr-2 text-yellow-500" /> VIP Ouro</h4>
                    <p className="text-primary-500 text-2xl font-bold mb-4">R$349<span className="text-sm text-gray-400">/mês</span></p>
                    <ul className="text-sm space-y-1">
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Todos do Bronze +</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Destaque premium no topo da cidade.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Visualização de visitantes do perfil.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Selo VIP Ouro.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Divulgação semanal no Instagram oficial.</li>
                    </ul>
                  </div>
                  {/* Plano VIP Diamante */}
                  <div className="bg-blue-950/50 p-4 rounded-lg border border-blue-800/70">
                    <h4 className="font-bold text-xl mb-2 flex items-center"><Diamond className="h-5 w-5 mr-2 text-blue-500" /> VIP Diamante</h4>
                    <p className="text-primary-500 text-2xl font-bold mb-4">R$699<span className="text-sm text-gray-400">/mês</span></p>
                    <ul className="text-sm space-y-1">
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Todos do Ouro +</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Perfil fixado no topo geral.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Matéria de destaque (“Modelo da Semana”).</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Consultoria de marketing sensual profissional.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 6. Política de Clientes */}
        <AnimatedText delay={0.8}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">6. Política de Clientes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gold-400">6.1 Planos VIP</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Plano Free */}
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="font-bold text-xl mb-2">Plano Free</h4>
                    <p className="text-primary-500 text-2xl font-bold mb-4">Grátis</p>
                    <ul className="text-sm space-y-1">
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Acesso a perfis com fotos em blur.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Visualização limitada de perfis por dia.</li>
                    </ul>
                  </div>
                  {/* Plano VIP Mensal */}
                  <div className="bg-amber-950/50 p-4 rounded-lg border border-amber-800/70">
                    <h4 className="font-bold text-xl mb-2 flex items-center"><Crown className="h-5 w-5 mr-2 text-amber-500" /> VIP Mensal</h4>
                    <p className="text-primary-500 text-2xl font-bold mb-4">R$149<span className="text-sm text-gray-400">/mês</span></p>
                    <ul className="text-sm space-y-1">
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Fotos sem blur.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Acesso ilimitado.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Contato direto via WhatsApp.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Agendamento prioritário.</li>
                    </ul>
                  </div>
                  {/* Plano VIP Anual */}
                  <div className="bg-blue-950/50 p-4 rounded-lg border border-blue-800/70">
                    <h4 className="font-bold text-xl mb-2 flex items-center"><Diamond className="h-5 w-5 mr-2 text-blue-500" /> VIP Anual</h4>
                    <p className="text-primary-500 text-2xl font-bold mb-4">R$999<span className="text-sm text-gray-400">/ano</span></p>
                    <ul className="text-sm space-y-1">
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Todos do Mensal +</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Desconto anual equivalente a 3 meses grátis.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Brinde discreto após 6 meses.</li>
                      <li><CheckCircle className="h-4 w-4 inline-block mr-2 text-green-500" /> Atendimento premium dedicado.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 7. Pagamentos, Cancelamentos e Reembolsos */}
        <AnimatedText delay={0.9}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">7. Pagamentos, Cancelamentos e Reembolsos</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>Planos podem ser cancelados a qualquer momento.</li>
                <li>Reembolsos avaliados caso a caso, conforme legislação vigente e regras do Stripe.</li>
                <li>Contas suspensas por violação dos termos não terão direito a reembolso.</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 8. Política de Segurança */}
        <AnimatedText delay={1.0}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">8. Política de Segurança</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>Senhas armazenadas criptografadas.</li>
                <li>Recomendado uso de senhas fortes e exclusivas.</li>
                <li>Atividades suspeitas podem resultar em bloqueio ou banimento imediato.</li>
                <li>Monitoramento contínuo para garantir segurança e legalidade.</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 9. Política de Consentimento e Respeito */}
        <AnimatedText delay={1.1}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">9. Política de Consentimento e Respeito</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>Todo serviço anunciado deve ser <strong className="text-green-400">consensual, legal e livre de coerção</strong>.</li>
                <li>Não compactuamos com qualquer forma de exploração sexual ou tráfico humano.</li>
                <li>Denúncias podem ser feitas anonimamente e serão tratadas com sigilo absoluto.</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 10. Política de Inclusão e Diversidade */}
        <AnimatedText delay={1.2}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">10. Política de Inclusão e Diversidade</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              <p>
                A Spicy Models preza pelo respeito à diversidade de corpos, etnias, orientações sexuais e identidades de gênero, não tolerando qualquer forma de preconceito ou discriminação.
              </p>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 11. Moderação e Suspensão de Contas */}
        <AnimatedText delay={1.3}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">11. Moderação e Suspensão de Contas</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>Nos reservamos o direito de editar, remover ou recusar anúncios que violem nossas políticas ou leis aplicáveis.</li>
                <li>Usuários que descumprirem estas regras podem ser banidos sem aviso prévio.</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 12. Alterações destes Termos */}
        <AnimatedText delay={1.4}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">12. Alterações destes Termos</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed">
              <p>
                Estes termos podem ser atualizados periodicamente. Recomendamos revisão constante para ciência das atualizações.
              </p>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* 13. Contato e Suporte */}
        <AnimatedText delay={1.5}>
          <Card className="bg-dark-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-500">13. Contato e Suporte</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>Para dúvidas, sugestões ou denúncias:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gold-400" />
                  <strong className="text-primary-400">Email:</strong> suporte@spicymodels.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gold-400" />
                  <strong className="text-primary-400">WhatsApp:</strong> +55 xx xxxxx-xxxx
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-gold-400" />
                  <strong className="text-primary-400">Endereço:</strong> [Seu endereço comercial ou CNPJ]
                </li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedText>

        {/* Declaração Final */}
        <AnimatedText delay={1.6}>
          <Card className="bg-dark-900 border-gray-800 text-center">
            <CardContent className="text-gray-300 text-lg leading-relaxed p-6">
              <h2 className="text-3xl font-bold text-primary-500 mb-4">Declaração Final</h2>
              <p>
                <strong className="text-green-400">Ao utilizar a Spicy Models, você confirma ter lido, entendido e aceito integralmente estes termos, políticas e condições de uso.</strong>
              </p>
            </CardContent>
          </Card>
        </AnimatedText>
      </div>
    </section>
  );
}
