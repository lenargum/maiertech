import { motion } from "motion/react"

export const PartnershipsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-500 mb-3">
            Erfolgsgeschichten & Partnerschaften
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Zukunftsweisende Energielösungen entstehen nicht alleine —
            wir arbeiten mit Konzernen, Technologie & Energiepartnern zusammen.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center"
          >
            <h3 className="text-5xl font-bold text-cyan-500 mb-2">22+</h3>
            <p className="text-gray-600 dark:text-gray-300">Jahre Erfahrung in der Energiebranche</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center"
          >
            <h3 className="text-5xl font-bold text-cyan-500 mb-2">50+</h3>
            <p className="text-gray-600 dark:text-gray-300">Technologie & EPC Partner weltweit</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center"
          >
            <h3 className="text-5xl font-bold text-cyan-500 mb-2">100+</h3>
            <p className="text-gray-600 dark:text-gray-300">Realisierte Projekte weltweit</p>
          </motion.div>
        </div>

        {/* Partners */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
            Unsere Partner
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-32 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                <div className="text-gray-400 dark:text-gray-500 text-xs">Partner Logo</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 