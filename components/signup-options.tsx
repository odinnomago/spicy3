"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ClientSignupForm } from "@/components/client-signup-form"
import { ModelSignupForm } from "@/components/model-signup-form"
import { User, Crown, Shield, Star, Camera, Heart, DollarSign } from "lucide-react"

export function SignupOptions() {
  const [selectedType, setSelectedType] = useState<"client" | "model" | null>(null)

  if (selectedType === "client") {
    return <ClientSignupForm onBack={() => setSelectedType(null)} />
  }

  if (selectedType === "model") {
    return <ModelSignupForm onBack={() => setSelectedType(null)} />
  }

  return (
    <section className="py-16 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 gradient-text">Junte-se ao Spicy Models</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha como deseja participar da nossa plataforma premium
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Cliente Card */}
          <Card
            className="bg-dark-800/50 border-gray-700 card-hover group cursor-pointer"
            onClick={() => setSelectedType("client")}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-600/30 transition-colors">
                <User className="h-8 w-8 text-primary-500" />
              </div>
              <CardTitle className="text-2xl font-playfair text-white">Sou Cliente</CardTitle>
              <p className="text-gray-400">Encontre acompanhantes premium</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Perfis verificados e seguros</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Star className="h-5 w-5 text-gold-500" />
                  <span>Sistema de avaliações</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Heart className="h-5 w-5 text-primary-500" />
                  <span>Lista de favoritos</span>
                </div>
              </div>
              <Button className="w-full bg-primary-600 hover:bg-primary-700 mt-6">Cadastrar como Cliente</Button>
            </CardContent>
          </Card>

          {/* Modelo Card */}
          <Card
            className="bg-dark-800/50 border-gray-700 card-hover group cursor-pointer relative"
            onClick={() => setSelectedType("model")}
          >
            <Badge className="absolute -top-2 -right-2 bg-gold-500 text-black font-semibold">
              <Crown className="h-3 w-3 mr-1" />
              Premium
            </Badge>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors">
                <Camera className="h-8 w-8 text-gold-500" />
              </div>
              <CardTitle className="text-2xl font-playfair text-white">Sou Modelo</CardTitle>
              <p className="text-gray-400">Monetize sua beleza e charme</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <span>Ganhe dinheiro com seus serviços</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Perfil verificado e protegido</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Camera className="h-5 w-5 text-purple-500" />
                  <span>Stories e galeria de fotos</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-black font-semibold mt-6">
                Cadastrar como Modelo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
