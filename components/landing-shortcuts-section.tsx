
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Crown, UserPlus } from "lucide-react";

export function LandingShortcutsSection() {
  return (
    <section className="bg-dark-950 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Buscar Modelos */}
          <Card className="bg-dark-900 border-gray-800 text-white text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-red-500/20">
            <CardContent className="p-0">
              <Search className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Buscar Modelos</h3>
              <p className="text-gray-400 mb-6">Encontre a modelo ideal para seus desejos.</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                Buscar Agora
              </Button>
            </CardContent>
          </Card>

          {/* Assine VIP */}
          <Card className="bg-dark-900 border-gray-800 text-white text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-red-500/20">
            <CardContent className="p-0">
              <Crown className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Assine VIP</h3>
              <p className="text-gray-400 mb-6">Desbloqueie recursos exclusivos e acesso ilimitado.</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                Planos VIP
              </Button>
            </CardContent>
          </Card>

          {/* Anuncie Aqui */}
          <Card className="bg-dark-900 border-gray-800 text-white text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-red-500/20">
            <CardContent className="p-0">
              <UserPlus className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Anuncie Aqui</h3>
              <p className="text-gray-400 mb-6">Seja uma modelo de luxo e monetize seu talento.</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                Quero Anunciar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
