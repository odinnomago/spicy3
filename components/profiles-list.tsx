
import { ProfileCard } from "@/components/profile-card";

const mockProfiles = [
  {
    id: "1",
    name: "Isabella",
    age: 24,
    city: "São Paulo",
    rating: 4.9,
    price: "R$ 450/h",
    imageUrl: "/placeholder.svg?height=400&width=300",
    isOnline: true,
    isVerified: true,
  },
  {
    id: "2",
    name: "Valentina",
    age: 27,
    city: "Rio de Janeiro",
    rating: 4.8,
    price: "R$ 550/h",
    imageUrl: "/placeholder.svg?height=400&width=300",
    isOnline: false,
    isVerified: true,
  },
  {
    id: "3",
    name: "Sophia",
    age: 22,
    city: "Belo Horizonte",
    rating: 5.0,
    price: "R$ 600/h",
    imageUrl: "/placeholder.svg?height=400&width=300",
    isOnline: true,
    isVerified: true,
  },
];

export function ProfilesList() {
  return (
    <section className="py-16 bg-dark-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Perfis em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} isLoggedIn={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
