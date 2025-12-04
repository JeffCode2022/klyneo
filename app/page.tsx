import { Hero3D } from "@/components/home/hero-3d"
import { FeaturesSection } from "@/components/home/features-section"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { UpcomingEvents } from "@/components/home/upcoming-events"
import { CTASection } from "@/components/home/cta-section"
import { StellarBackground } from "@/components/ui/stellar-background"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <StellarBackground />
      <div className="relative z-10">
        <Hero3D />
        <FeaturesSection />
        <FeaturedProjects />
        <StatsSection />
        <TestimonialsSection />
        <UpcomingEvents />
        <CTASection />
      </div>
    </div>
  )
}
