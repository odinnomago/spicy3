
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SignupOptions } from "@/components/signup-options";
import Image from "next/image";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { email, password });
  };

  const handleGoogleLogin = () => {
    // Implementar login com Google
    console.log("Login com Google");
  };

  return (
    <Card className="bg-dark-900 border-none p-4 w-full max-w-md mx-auto">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold text-white">Acesse sua Conta</CardTitle>
        <CardDescription className="text-gray-400">Bem-vindo de volta. Entre para continuar.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 bg-dark-800 hover:bg-dark-700 text-white border-gray-700"
          onClick={handleGoogleLogin}
        >
          <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
          Continuar com Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-700"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-dark-900 px-2 text-gray-400">Ou entre com e-mail</span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">E-mail</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-dark-800 border-gray-700 text-white"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-gray-300">Senha</Label>
              <Link href="/recuperar-senha" className="text-sm text-primary hover:text-primary/80 transition-colors">
                Esqueceu sua senha?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-dark-800 border-gray-700 text-white"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            Entrar
          </Button>
        </form>

        <div className="text-center text-sm text-gray-400">
          Não tem uma conta?{" "}
          <Link href="/cadastro" className="text-primary hover:text-primary/80 transition-colors font-medium">
            Cadastre-se
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
