import Link from "next/link"
import { Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold gradient-text">Spicy Models</span>
            </div>
            <p className="text-gray-400 text-sm">
              A plataforma premium para acompanhantes de luxo. Discrição, segurança e qualidade garantidas.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Links Úteis</h3>
            <div className="space-y-2">
              <Link href="/busca" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Buscar Perfis
              </Link>
              <Link href="/como-funciona" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Como Funciona
              </Link>
              <Link href="/vip" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Planos VIP
              </Link>
              <Link href="/cadastro" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Cadastre-se
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Legal</h3>
            <div className="space-y-2">
              <Link href="/termos" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </Link>
              <Link href="/contato" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contato
              </Link>
              <Link href="/suporte" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Suporte
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>contato@spicymodels.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+55 11 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Spicy Models. Todos os direitos reservados. | +18 anos</p>
        </div>
      </div>
    </footer>
  )
}
