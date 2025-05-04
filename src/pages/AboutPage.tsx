import { motion } from "motion/react"

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          About Us
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Maiertech was founded with a vision to innovate and create solutions that make a difference. 
            Since our inception, we've been dedicated to developing cutting-edge technologies across various sectors.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our mission is to deliver innovative solutions that address real-world challenges, 
            with a focus on sustainability, efficiency, and user-friendly designs.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our team consists of passionate professionals from diverse backgrounds, 
            all united by a common goal: to create technologies that improve lives and businesses.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutPage 