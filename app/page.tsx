import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <ExperienceSection /> */}
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}
