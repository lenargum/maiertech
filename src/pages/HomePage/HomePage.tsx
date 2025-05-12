import { HeroSection } from './HeroSection'
import { BusinessAreasGrid } from './BusinessAreasGrid'
import { PartnershipsSection } from './PartnershipsSection'
import { ProjectsShowcase } from './ProjectsShowcase'
import { ContactSection } from './ContactSection'
import { StatsSection } from './StatsSection'
const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Business Areas Section */}
      <BusinessAreasGrid />

      {/* Stats Section */}
      <StatsSection />

      {/* Success Stories & Partnership Section */}
      <PartnershipsSection />

      {/* Projects Showcase Section */}
      <ProjectsShowcase />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}

export default HomePage 