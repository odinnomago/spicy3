"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation" // Import for redirection
import { supabase } from "@/lib/supabaseClient" // Import Supabase client
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert" // For error messages
import { ArrowLeft, User, Mail, Lock, Phone, MapPin, Terminal } from "lucide-react"

interface ClientSignupFormProps {
  onBack: () => void
}

export function ClientSignupForm({ onBack }: ClientSignupFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    age: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

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

    setIsLoading(true)

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          // You can pass user_metadata here if needed, which gets stored in auth.users table
          // For client-specific data, we'll insert into the 'profiles' table separately.
          data: {
            full_name: formData.name, // This can be useful for pre-filling Supabase user data
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

      // Now, insert into the 'profiles' table
      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: signUpData.user.id, // Use the user's ID from auth.users as PK for profiles
          user_id: signUpData.user.id, // Explicitly set user_id as FK
          full_name: formData.name,
          // email: formData.email, // Email is already in auth.users table
          phone: formData.phone,
          city: formData.city,
          age: parseInt(formData.age, 10) || null,
          profile_type: "cliente", // Set profile type
          // avatar_url and bio can be null or set later
        })

      if (profileError) {
        // If profile creation fails, ideally we might want to delete the auth user
        // or handle this more gracefully. For now, just show an error.
        console.error("Error creating profile:", profileError)
        setError(`Usuário criado, mas houve um erro ao salvar o perfil: ${profileError.message}. Por favor, contate o suporte.`)
        setIsLoading(false)
        return
      }

      // Supabase sends a confirmation email by default.
      // The user will be logged in, but their session might have limited capabilities until email is confirmed.
      // Or, if email confirmation is disabled, they are fully logged in.
      setSuccessMessage("Cadastro realizado com sucesso! Verifique seu e-mail para confirmação, se aplicável. Você será redirecionado.")

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/") // Redirect to home page or a dashboard
      }, 3000)

    } catch (catchError: any) {
      setError(catchError.error_description || catchError.message || "Ocorreu um erro desconhecido.")
    } finally {
      // Do not set isLoading to false if a redirect is happening soon
      // but ensure it's false if there was an error and no redirect.
      if (error && !successMessage) {
        setIsLoading(false)
      }
    }
  }

  return (
    <section className="py-16 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Button variant="ghost" onClick={onBack} className="mb-6 text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>

          <Card className="bg-dark-800/50 border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-primary-500" />
              </div>
              <CardTitle className="text-2xl text-white">Cadastro de Cliente</CardTitle>
              <p className="text-gray-400">Crie sua conta para acessar perfis premium</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center">
                    <User className="h-4 w-4 mr-2 text-primary-500" />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary-500" />
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary-500" />
                    Telefone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                      Cidade
                    </label>
                    <select
                      required
                      className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
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
                    <label className="text-sm font-medium text-gray-300">Idade</label>
                    <input
                      type="number"
                      min="18"
                      required
                      className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center">
                    <Lock className="h-4 w-4 mr-2 text-primary-500" />
                    Senha
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center">
                    <Lock className="h-4 w-4 mr-2 text-primary-500" />
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" required className="rounded border-gray-600 bg-dark-700" />
                  <span className="text-sm text-gray-400">
                    Aceito os{" "}
                    <a href="/termos" className="text-primary-500 hover:underline">
                      Termos de Uso
                    </a>{" "}
                    e{" "}
                    <a href="/privacidade" className="text-primary-500 hover:underline">
                      Política de Privacidade
                    </a>
                  </span>
                </div>

                <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700" disabled={isLoading}>
                  {isLoading ? "Criando conta..." : "Criar Conta"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
