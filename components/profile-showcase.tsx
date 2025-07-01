
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileCard } from "@/components/profile-card";

const mockProfiles = {
  destaques: [
    { id: "1", name: "Isabella", age: 24, city: "São Paulo", rating: 4.9, price: "R$ 450/h", imageUrl: "/placeholder.svg?height=400&width=300", isOnline: true, isVerified: true },
    { id: "2", name: "Valentina", age: 27, city: "Rio de Janeiro", rating: 4.8, price: "R$ 550/h", imageUrl: "/placeholder.svg?height=400&width=300", isOnline: false, isVerified: true },
  ],
  novidades: [
    { id: "3", name: "Sophia", age: 22, city: "Belo Horizonte", rating: 5.0, price: "R$ 600/h", imageUrl: "/placeholder.svg?height=400&width=300", isOnline: true, isVerified: true },
  ],
  online: [
    { id: "1", name: "Isabella", age: 24, city: "São Paulo", rating: 4.9, price: "R$ 450/h", imageUrl: "/placeholder.svg?height=400&width=300", isOnline: true, isVerified: true },
    { id: "3", name: "Sophia", age: 22, city: "Belo Horizonte", rating: 5.0, price: "R$ 600/h", imageUrl: "/placeholder.svg?height=400&width=300", isOnline: true, isVerified: true },
  ],
};

export function ProfileShowcase() {
  return (
    <section className="py-16 bg-dark-950">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="destaques" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-dark-800/80 border border-gray-700/60 h-12 px-2">
            <TabsTrigger value="destaques" className="text-lg">Destaques</TabsTrigger>
            <TabsTrigger value="novidades" className="text-lg">Novidades</TabsTrigger>
            <TabsTrigger value="online" className="text-lg">Online Agora</TabsTrigger>
          </TabsList>
          <TabsContent value="destaques" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {mockProfiles.destaques.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} isLoggedIn={true} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="novidades" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {mockProfiles.novidades.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} isLoggedIn={true} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="online" className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {mockProfiles.online.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} isLoggedIn={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
