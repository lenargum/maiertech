import { motion } from "motion/react"
import { Button } from "./ui/Button"

export const HeroSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3">
          <div className="w-full h-full bg-cyan-400 rounded-bl-full"></div>
        </div>
        <div className="grid grid-cols-6 gap-4 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="bg-cyan-200 h-4 rounded-full transform translate-y-full animate-pulse" style={{ 
              animationDelay: `${i * 0.1}s`,
              animationDuration: '3s',
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 primary-gradient-text">
            Energy meets Intelligence
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 primary-gradient-text">
            Nachhaltig. Effizient. Zukunftssicher
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Intelligente Energielösungen setzen Maßstäbe. Neue, effiziente und innovative Technologien 
            mit intelligenten Netzwerken und einer nachhaltigen, vernetzten und effizienten Komponente zu 
            gestalten, ist unser Antrieb.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact" variant="filled">
              Solutions
            </Button>
            <Button href="/about" variant="outlined">
              Über uns
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 