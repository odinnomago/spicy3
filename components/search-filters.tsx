"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { MapPin, DollarSign, Clock, Filter, X } from "lucide-react"
import { AnimatedText } from "@/components/animated-text";

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([100, 1000])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const cities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Salvador", "Fortaleza"]
  const services = ["Acompanhante", "Massagem", "Jantar", "Viagem", "Eventos"]

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <div className="space-y-6">
      <AnimatedText>
        <Card className="bg-dark-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Filter className="h-5 w-5 mr-2 text-primary-500" />
              Filtros
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Online Now */}
            <AnimatedText delay={0.1}>
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-600 bg-dark-700" />
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-300">Online agora</span>
                </label>
              </div>
            </AnimatedText>

            {/* Cities */}
            <AnimatedText delay={0.2}>
              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                  Cidades
                </h3>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <label key={city} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-600 bg-dark-700" />
                      <span className="text-sm text-gray-300">{city}</span>
                    </label>
                  ))}
                </div>
              </div>
            </AnimatedText>

            {/* Price Range */}
            <AnimatedText delay={0.3}>
              <div>
                <h3 className="font-semibold text-white mb-3 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-primary-500" />
                  Faixa de Preço
                </h3>
                <div className="space-y-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    min={50}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}+</span>
                  </div>
                </div>
              </div>
            </AnimatedText>

            {/* Services */}
            <AnimatedText delay={0.4}>
              <div>
                <h3 className="font-semibold text-white mb-3">Serviços</h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <Badge
                      key={service}
                      variant={selectedFilters.includes(service) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedFilters.includes(service)
                          ? "bg-primary-600 text-white"
                          : "border-gray-600 text-gray-300 hover:bg-gray-700"
                      }`}
                      onClick={() => toggleFilter(service)}
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedText>

            {/* Clear Filters */}
            <AnimatedText delay={0.5}>
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 bg-transparent">
                <X className="h-4 w-4 mr-2" />
                Limpar Filtros
              </Button>
            </AnimatedText>
          </CardContent>
        </Card>
      </AnimatedText>
    </div>
  )
}
