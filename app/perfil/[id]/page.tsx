import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProfileDetails } from "@/components/profile-details"

interface ProfilePageProps {
  params: {
    id: string
  }
}

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <ProfileDetails profileId={params.id} />
      <Footer />
    </div>
  )
}
