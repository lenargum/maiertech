import { HeroSection } from '../components/HeroSection'
import { BusinessAreasGrid } from '../components/BusinessAreasGrid'
import { PartnershipsSection } from '../components/PartnershipsSection'
import { ProjectsShowcase } from '../components/ProjectsShowcase'
import { ContactSection } from '../components/ContactSection'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Business Areas Section */}
      <BusinessAreasGrid />

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