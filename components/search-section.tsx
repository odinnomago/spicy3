"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, DollarSign, Filter, Search } from "lucide-react"

export function SearchSection() {
  const [filters, setFilters] = useState({
    city: "",
    category: "",
    priceRange: "",
  })

  return (
    <section className="py-16 bg-dark-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Busque Sua Companhia Ideal</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Refine sua busca e encontre a companhia perfeita para cada ocasião.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-dark-800/50 border-gray-700">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* City Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                  Cidade
                </label>
                <select
                  className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                  value={filters.city}
                  onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                >
                  <option value="">Todas as cidades</option>
                  <option value="sao-paulo">São Paulo</option>
                  <option value="rio-janeiro">Rio de Janeiro</option>
                  <option value="belo-horizonte">Belo Horizonte</option>
                  <option value="brasilia">Brasília</option>
                </select>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-primary-500" />
                  Categoria
                </label>
                <select
                  className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                >
                  <option value="">Todas</option>
                  <option value="premium">Premium</option>
                  <option value="vip">VIP</option>
                  <option value="internacional">Internacional</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-primary-500" />
                  Faixa de Valor
                </label>
                <select
                  className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                >
                  <option value="">Qualquer valor</option>
                  <option value="100-300">R$ 100 - R$ 300</option>
                  <option value="300-500">R$ 300 - R$ 500</option>
                  <option value="500+">R$ 500+</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 h-12">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
