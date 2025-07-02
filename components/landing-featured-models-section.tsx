
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";
import Image from "next/image";

const mockModels = [
  {
    id: "1",
    name: "Laura Diamond",
    city: "São Paulo",
    price: "R$ 500/h",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "2",
    name: "Isabella Gold",
    city: "Rio de Janeiro",
    price: "R$ 650/h",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
  {
    id: "3",
    name: "Sophia Ruby",
    city: "Belo Horizonte",
    price: "R$ 400/h",
    imageUrl: "/placeholder.svg?height=400&width=300",
  },
];

export function LandingFeaturedModelsSection() {
  return (
    <section className="bg-dark-950 py-16">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-center text-white mb-12">Modelos em Destaque</h2>
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockModels.map((model, index) => (
            <AnimatedText key={model.id} delay={index * 0.1}>
              <Card className="bg-dark-900 border-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="relative h-60 w-full">
                    <Image src={model.imageUrl} alt={model.name} layout="fill" objectFit="cover" className="w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold">{model.name}</h3>
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{model.city}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center text-lg font-bold text-primary-500">
                      <DollarSign className="h-5 w-5 mr-1" />
                      {model.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                      Ver Perfil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
