"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Camera, Mail, Lock, Phone, MapPin, Upload, Crown } from "lucide-react"
import { AnimatedText } from "@/components/animated-text";

interface ModelSignupFormProps {
  onBack: () => void
}

export function ModelSignupForm({ onBack }: ModelSignupFormProps) {
  const [formData, setFormData] = useState({
    artisticName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    age: "",
    bio: "",
    services: [] as string[],
    priceRange: "",
  })

  const services = ["Acompanhante", "Massagem", "Jantar", "Eventos", "Viagens", "Fetiches"]

  const toggleService = (service: string) => {
    setFormData({
      ...formData,
      services: formData.services.includes(service)
        ? formData.services.filter((s) => s !== service)
        : [...formData.services, service],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Model signup:", formData)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <Button variant="ghost" onClick={onBack} className="mb-6 text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </AnimatedText>

        <AnimatedText delay={0.1} className="max-w-2xl mx-auto">
          <Card className="bg-dark-800/50 border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-gold-500" />
              </div>
              <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                Cadastro de Modelo
                <Badge className="bg-gold-500 text-black">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              </CardTitle>
              <p className="text-gray-400">Crie seu perfil premium e comece a monetizar</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatedText delay={0.2}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center">
                        <Camera className="h-4 w-4 mr-2 text-gold-500" />
                        Nome Artístico
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-gold-500 focus:outline-none"
                        value={formData.artisticName}
                        onChange={(e) => setFormData({ ...formData, artisticName: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Idade</label>
                      <input
                        type="number"
                        min="18"
                        required
                        className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-gold-500 focus:outline-none"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText delay={0.3}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gold-500" />
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-gold-500 focus:outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gold-500" />
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-gold-500 focus:outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText delay={0.4}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gold-500" />
                        Cidade de Atendimento
                      </label>
                      <select
                        required
                        className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-gold-500 focus:outline-none"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      >
                        <option value="">Selecione</option>
                        <option value="sao-paulo">São Paulo</option>
                        <option value="rio-janeiro">Rio de Janeiro</option>
                        <option value="belo-horizonte">Belo Horizonte</option>
                        <option value="brasilia">Brasília</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Faixa de Preço/Hora</label>
                      <select
                        required
                        className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-gold-500 focus:outline-none"
                        value={formData.priceRange}
                        onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                      >
                        <option value="">Selecione</option>
                        <option value="100-200">R$ 100 - R$ 200</option>
                        <option value="200-300">R$ 200 - R$ 300</option>
                        <option value="300-500">R$ 300 - R$ 500</option>
                        <option value="500+">R$ 500+</option>
                      </select>
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText delay={0.5}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Biografia</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-gold-500 focus:outline-none resize-none"
                      placeholder="Descreva-se de forma atrativa e profissional..."
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    />
                  </div>
                </AnimatedText>

                <AnimatedText delay={0.6}>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">Serviços Oferecidos</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <Badge
                          key={service}
                          variant={formData.services.includes(service) ? "default" : "outline"}
                          className={`cursor-pointer ${
                            formData.services.includes(service)
                              ? "bg-gold-500 text-black"
                              : "border-gray-600 text-gray-300 hover:bg-gray-700"
                          }`}
                          onClick={() => toggleService(service)}
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText delay={0.7}>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300 flex items-center">
                      <Upload className="h-4 w-4 mr-2 text-gold-500" />
                      Fotos do Perfil
                    </label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Clique para fazer upload ou arraste suas fotos aqui</p>
                      <p className="text-gray-500 text-xs mt-1">Máximo 10 fotos, JPG/PNG até 5MB cada</p>
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText delay={0.8}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center">
                        <Lock className="h-4 w-4 mr-2 text-gold-500" />
                        Senha
                      </label>
                      <input
                        type="password"
                        required
                        className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-gold-500 focus:outline-none"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 flex items-center">
                        <Lock className="h-4 w-4 mr-2 text-gold-500" />
                        Confirmar Senha
                      </label>
                      <input
                        type="password"
                        required
                        className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-gold-500 focus:outline-none"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      />
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText delay={0.9}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" required className="rounded border-gray-600 bg-dark-700" />
                      <span className="text-sm text-gray-400">
                        Confirmo que tenho mais de 18 anos e aceito os{" "}
                        <a href="/termos" className="text-gold-500 hover:underline">
                          Termos de Uso
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" required className="rounded border-gray-600 bg-dark-700" />
                      <span className="text-sm text-gray-400">
                        Aceito a{" "}
                        <a href="/privacidade" className="text-gold-500 hover:underline">
                          Política de Privacidade
                        </a>{" "}
                        e autorizo o uso das minhas fotos
                      </span>
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText delay={1.0}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-black font-semibold"
                  >
                    Criar Perfil Premium
                  </Button>
                </AnimatedText>

                <AnimatedText delay={1.1}>
                  <div className="text-center text-sm text-gray-400">
                    Seu perfil passará por verificação manual em até 24h
                  </div>
                </AnimatedText>
              </form>
            </CardContent>
          </Card>
        </AnimatedText>
      </div>
    </section>
  )
}
