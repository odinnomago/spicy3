"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation" // Import for redirection
import { supabase } from "@/lib/supabaseClient" // Import Supabase client
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert" // For error messages
import { ArrowLeft, Camera, Mail, Lock, Phone, MapPin, Upload, Crown, Terminal } from "lucide-react"

interface ModelSignupFormProps {
  onBack: () => void
}

export function ModelSignupForm({ onBack }: ModelSignupFormProps) {
  const router = useRouter()
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
    // photoFiles: [] as File[], // We'll handle file uploads separately if needed
  })
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const availableServices = ["Acompanhante", "Massagem", "Jantar", "Eventos", "Viagens", "Fetiches"]

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  // const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setFormData({ ...formData, photoFiles: Array.from(e.target.files) });
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccessMessage(null)

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.")
      return
    }
    if (formData.password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.")
      return
    }
    if (formData.services.length === 0) {
      setError("Selecione ao menos um serviço.")
      return
    }
    // Add other specific validations as needed

    setIsLoading(true)

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            // Using 'artisticName' as 'full_name' in auth.users for models
            // This is just an example, you might want a generic 'name' or handle it differently
            full_name: formData.artisticName,
          }
        }
      })

      if (signUpError) {
        setError(signUpError.message)
        setIsLoading(false)
        return
      }

      if (!signUpData.user) {
        setError("Não foi possível criar o usuário. Tente novamente.")
        setIsLoading(false)
        return
      }

      // TODO: Handle photo uploads to Supabase Storage here if `formData.photoFiles` is populated.
      // This would involve iterating through files, uploading them, and getting their public URLs.
      // For now, we'll skip photo uploads in this step and assume avatar_url will be set later.

      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: signUpData.user.id, // Use the user's ID from auth.users as PK
          user_id: signUpData.user.id, // Explicit FK
          full_name: formData.artisticName, // Or a different field if 'name' is preferred for all users
          // email: formData.email, // Already in auth.users
          phone: formData.phone,
          city: formData.city,
          age: parseInt(formData.age, 10) || null,
          bio: formData.bio,
          profile_type: "modelo", // Set profile type
          // Specific model fields
          services_offered: formData.services, // formData.services is already string[]
          price_range: formData.priceRange,    // formData.priceRange is a string
          // avatar_url will be handled separately, currently defaults to null in DB if not provided
        })

      if (profileError) {
        console.error("Error creating model profile:", profileError)
        setError(`Usuário modelo criado, mas houve um erro ao salvar o perfil: ${profileError.message}. Por favor, contate o suporte.`)
        // Potentially delete the auth user if profile creation fails: await supabase.auth.admin.deleteUser(signUpData.user.id)
        setIsLoading(false)
        return
      }

      setSuccessMessage("Cadastro de modelo realizado com sucesso! Verifique seu e-mail para confirmação. Seu perfil passará por análise. Você será redirecionado.")

      setTimeout(() => {
        router.push("/") // Redirect to home or a model dashboard
      }, 4000)

    } catch (catchError: any) {
      setError(catchError.error_description || catchError.message || "Ocorreu um erro desconhecido.")
    } finally {
      if (error && !successMessage) {
        setIsLoading(false)
      }
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Button variant="ghost" onClick={onBack} className="mb-6 text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>

          <Card className="bg-dark-800/50 border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-gold-500" />
              </div>
              <CardTitle className="text-2xl font-playfair text-white flex items-center justify-center gap-2">
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
                {error && (
                  <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Erro no Cadastro</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                {successMessage && (
                  <Alert variant="default" className="bg-green-500/10 border-green-500 text-green-400">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Sucesso!</AlertTitle>
                    <AlertDescription>{successMessage}</AlertDescription>
                  </Alert>
                )}
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

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-black font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? "Criando perfil..." : "Criar Perfil Premium"}
                </Button>

                <div className="text-center text-sm text-gray-400">
                  Seu perfil passará por verificação manual em até 24h
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
