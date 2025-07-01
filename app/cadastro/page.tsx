import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SignupOptions } from "@/components/signup-options"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <SignupOptions />
      <Footer />
    </div>
  )
}
