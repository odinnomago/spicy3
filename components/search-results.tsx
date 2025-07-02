"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Eye, Heart, Shield, MessageCircle } from "lucide-react"
import { AnimatedText } from "@/components/animated-text";

const searchResults = []

export function SearchResults() {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <AnimatedText>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Resultados da Busca</h1>
          <span className="text-gray-400">{searchResults.length} perfis encontrados</span>
        </div>
      </AnimatedText>

      {/* Sort Options */}
      <AnimatedText delay={0.1}>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-sm">Ordenar por:</span>
          <select className="bg-dark-700 border border-gray-600 rounded px-3 py-1 text-white text-sm">
            <option>Mais relevantes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Melhor avaliação</option>
            <option>Online agora</option>
          </select>
        </div>
      </AnimatedText>

      {/* Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {searchResults.map((profile, index) => (
          <AnimatedText key={profile.id} delay={index * 0.1 + 0.2}>
            <Card className="bg-dark-800/50 border-gray-700 card-hover">
              <CardContent className="p-0">
                <div className="flex">
                  {/* Image */}
                  <div
                    className="relative w-48 h-64 flex-shrink-0 cursor-pointer"
                    onClick={() => (window.location.href = `/perfil/${profile.id}`)}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 blur-content flex items-center justify-center rounded-l-lg">
                      <Eye className="h-6 w-6 text-gray-500" />
                      <span className="ml-2 text-gray-500 text-sm">Clique para ver</span>
                    </div>

                    {/* Status Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {profile.isVip && (
                        <Badge className="bg-gold-500 text-black font-semibold text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          VIP
                        </Badge>
                      )}
                      {profile.isOnline && <Badge className="bg-green-500 text-white text-xs">Online</Badge>}
                      {profile.isVerified && <Badge className="bg-blue-500 text-white text-xs">Verificado</Badge>}
                    </div>

                    {/* Heart Icon */}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-3 right-3 h-7 w-7 p-0 bg-black/50 hover:bg-black/70"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Handle favorite logic
                      }}
                    >
                      <Heart className="h-3 w-3" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-xl text-white mb-1">
                          {profile.name}, {profile.age}
                        </h3>
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{profile.city}</span>
                        </div>
                        <div className="flex items-center text-gold-500 text-sm">
                          <Star className="h-4 w-4 fill-current mr-1" />
                          <span>{profile.rating}</span>
                          <span className="text-gray-400 ml-1">({profile.reviews} avaliações)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-primary-500 font-bold text-lg">{profile.price}</div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{profile.description}</p>

                    <div className="flex items-center space-x-3">
                      <Button
                        size="sm"
                        className="bg-primary-600 hover:bg-primary-700 flex-1"
                        onClick={() => (window.location.href = `/perfil/${profile.id}`)}
                      >
                        Ver Perfil Completo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedText>
        ))}
      </div>

      {/* Load More */}
      <AnimatedText delay={searchResults.length * 0.1 + 0.3}>
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent"
          >
            Carregar Mais Resultados
          </Button>
        </div>
      </AnimatedText>
    </div>
  )
}
