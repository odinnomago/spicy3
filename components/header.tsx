"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Heart, Menu, User, X, LogOut, UserCircle, LayoutDashboard, Search } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext" // Import useAuth

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, profile, signOut, isLoading } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    setIsMenuOpen(false) // Close mobile menu on logout
    router.push("/") // Redirect to home after logout
  }

  const commonLinks = (
    <>
      <Link href="/busca" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
        <Search className="inline h-4 w-4 mr-1 md:hidden" />Buscar
      </Link>
      <Link href="/como-funciona" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
        Como Funciona
      </Link>
      <Link href="/vip" className="text-gold-500 hover:text-gold-400 transition-colors font-semibold" onClick={() => setIsMenuOpen(false)}>
        Seja VIP
      </Link>
    </>
  )

  const loggedOutLinks = (
    <>
      <Button variant="ghost" size="sm" onClick={() => { router.push("/login"); setIsMenuOpen(false); }}>
        <User className="h-4 w-4 mr-2" />
        Entrar
      </Button>
      <Button
        className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"
        onClick={() => { router.push("/cadastro"); setIsMenuOpen(false); }}
      >
        Anunciar Grátis
      </Button>
    </>
  )

  const loggedInLinks = (
    <div className="flex items-center space-x-2 md:space-x-3">
      <div className="flex items-center space-x-2">
        {profile?.avatar_url ? (
            <img src={profile.avatar_url} alt="Avatar" className="w-8 h-8 rounded-full object-cover"/>
        ) : (
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <UserCircle className="h-5 w-5 text-white" />
            </div>
        )}
        <span className="text-gray-300 text-sm hidden md:inline">{profile?.full_name || user?.email}</span>
      </div>

      {/* Profile type specific links */}
      {profile?.profile_type === 'modelo' && (
        <Link href="/dashboard/modelo" className="text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 hover:bg-gray-700 rounded-md" onClick={() => setIsMenuOpen(false)}>
          <LayoutDashboard className="inline h-4 w-4 mr-1" />Meu Painel
        </Link>
      )}
      {profile?.profile_type === 'cliente' && (
        <Link href="/dashboard/cliente" className="text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 hover:bg-gray-700 rounded-md" onClick={() => setIsMenuOpen(false)}>
          <UserCircle className="inline h-4 w-4 mr-1" />Minha Conta
        </Link>
      )}
       {/* Generic profile link if needed, or more specific ones */}
      <Link href="/perfil" className="text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 hover:bg-gray-700 rounded-md md:hidden" onClick={() => setIsMenuOpen(false)}>
        <UserCircle className="inline h-4 w-4 mr-1" />Perfil
      </Link>


      <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-red-500 hover:text-red-400">
        <LogOut className="h-4 w-4 mr-1 md:mr-2" />
        <span className="hidden md:inline">Sair</span>
      </Button>
    </div>
  )

  const mobileLoggedInLinks = (
    <>
       <div className="flex items-center space-x-2 text-gray-300 mb-2">
          {profile?.avatar_url ? (
              <img src={profile.avatar_url} alt="Avatar" className="w-7 h-7 rounded-full object-cover"/>
          ) : (
              <div className="w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center">
                  <UserCircle className="h-4 w-4 text-white" />
              </div>
          )}
          <span>{profile?.full_name || user?.email}</span>
        </div>

        {profile?.profile_type === 'modelo' && (
          <Link href="/dashboard/modelo" className="block py-2 px-3 text-gray-300 hover:bg-gray-700 rounded-md" onClick={() => setIsMenuOpen(false)}>
            <LayoutDashboard className="inline h-4 w-4 mr-2" />Meu Painel (Modelo)
          </Link>
        )}
        {profile?.profile_type === 'cliente' && (
          <Link href="/dashboard/cliente" className="block py-2 px-3 text-gray-300 hover:bg-gray-700 rounded-md" onClick={() => setIsMenuOpen(false)}>
            <UserCircle className="inline h-4 w-4 mr-2" />Minha Conta (Cliente)
          </Link>
        )}
         <Link href="/perfil" className="block py-2 px-3 text-gray-300 hover:bg-gray-700 rounded-md" onClick={() => setIsMenuOpen(false)}>
            <UserCircle className="inline h-4 w-4 mr-2" />Editar Perfil
        </Link>
        <Button variant="ghost" size="sm" onClick={handleSignOut} className="w-full justify-start text-red-500 hover:text-red-400 mt-2">
          <LogOut className="h-4 w-4 mr-2" />Sair
        </Button>
    </>
  )


  if (isLoading) {
    // Optional: render a loading state for the header or parts of it
    // For simplicity, we can just render a minimal header or let it show default links
    // until loading is complete. Or return a placeholder.
    return (
        <header className="sticky top-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <Heart className="h-8 w-8 text-primary-500" />
                        <span className="text-2xl font-bold gradient-text">Spicy Models</span>
                    </Link>
                    <div className="text-gray-400 text-sm">Carregando...</div>
                </div>
            </div>
        </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary-500" />
            <span className="text-2xl font-bold gradient-text">Spicy Models</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {commonLinks}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? loggedInLinks : loggedOutLinks}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-3">
              {commonLinks}
              <div className="pt-3 mt-3 border-t border-gray-700">
                {user ? mobileLoggedInLinks : loggedOutLinks}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
