
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Phone, MessageCircle, Gift, ShieldCheck } from "lucide-react";

const mockModel = {
  name: "Alessandra",
  age: 26,
  city: "São Paulo - Itaim Bibi",
  rating: 4.9,
  reviews: 152,
  price: "R$ 500/h",
  isVerified: true,
  bio: "Uma mulher sofisticada e envolvente, pronta para transformar seus momentos em memórias inesquecíveis. Adoro conversas inteligentes, jantares requintados e experiências únicas.",
  services: ["Jantar a dois", "Viagens Internacionais", "Eventos Corporativos", "Massagem Tântrica"],
  gallery: [
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
  ],
};

export function ModelProfile() {
  const [mainImage, setMainImage] = useState(mockModel.gallery[0]);

  return (
    <div className="bg-dark-950 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6 hover:bg-dark-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para a busca
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gallery */}
          <div className="lg:col-span-2">
            <Card className="bg-dark-900 border-gray-800">
              <CardContent className="p-4">
                <div className="aspect-[4/5] w-full rounded-lg overflow-hidden mb-4">
                  <img src={mainImage} alt={mockModel.name} className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {mockModel.gallery.map((img, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-md cursor-pointer border-2 transition-all ${mainImage === img ? 'border-primary-500' : 'border-transparent hover:border-gray-600'}`}
                      onClick={() => setMainImage(img)}
                    >
                      <img src={img} alt={`${mockModel.name} ${index + 1}`} className="w-full h-full object-cover rounded-sm" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <Card className="bg-dark-900 border-gray-800 p-6">
              <h1 className="text-4xl font-bold mb-2">{mockModel.name}, {mockModel.age}</h1>
              <div className="flex items-center text-gray-400 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{mockModel.city}</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-gold-400">
                  <Star className="h-5 w-5 fill-current mr-1" />
                  <span className="text-lg font-bold">{mockModel.rating}</span>
                </div>
                <span className="text-gray-500">({mockModel.reviews} avaliações)</span>
                {mockModel.isVerified && (
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50">
                    <ShieldCheck className="h-4 w-4 mr-1" />
                    Perfil Verificado
                  </Badge>
                )}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{mockModel.bio}</p>
              <div className="space-y-3">
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Entrar em Contato
                </Button>
                <Button size="lg" variant="outline" className="w-full border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </div>
            </Card>

            <Card className="bg-dark-900 border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-4">Serviços Exclusivos</h3>
              <div className="flex flex-wrap gap-3">
                {mockModel.services.map(service => (
                  <Badge key={service} variant="outline" className="text-lg py-1 px-4 border-gray-700">
                    {service}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="bg-dark-900 border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-4">Presentear</h3>
              <p className="text-gray-400 mb-4">Surpreenda com um presente de uma de nossas lojas parceiras.</p>
              <Button variant="secondary" className="w-full bg-gold-500/20 text-gold-300 hover:bg-gold-500/30">
                <Gift className="h-5 w-5 mr-2" />
                Ver Opções de Presentes
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
