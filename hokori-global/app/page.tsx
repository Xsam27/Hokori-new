import HeroSection from './components/hero-section'
import IndustriesSection from './components/industries-section'
import FeaturesSection from './components/features-section'
import OurClientsSection from './components/our-clients-section'
import OurProjectsSection from './components/our-projects-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IndustriesSection />
      <FeaturesSection />
      <OurClientsSection />
      <OurProjectsSection />
    </main>
  )
}

