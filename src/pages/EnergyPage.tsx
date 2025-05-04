import { useRef } from 'react'
import { motion } from "motion/react"

const EnergyPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Energy Solutions
        </h1>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Sustainable Energy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            At Maiertech, we're committed to developing innovative energy solutions that 
            are environmentally friendly, efficient, and cost-effective. Our energy 
            division focuses on renewable sources and optimizing energy consumption.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div 
              className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Solar Energy
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our advanced solar panels and systems harness the power of the sun to 
                provide clean, renewable energy for residential and commercial applications.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Wind Power
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We design and implement wind power solutions that capture energy efficiently, 
                even in areas with moderate wind conditions.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Energy Management Systems
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our intelligent energy management systems help businesses and homeowners monitor, 
            control, and optimize their energy usage:
          </p>
          
          <div className="space-y-4 mb-6">
            <motion.div 
              className="flex items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-yellow-100 dark:bg-yellow-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700 dark:text-yellow-200" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Smart Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Real-time tracking of energy consumption and production with detailed analytics.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-yellow-100 dark:bg-yellow-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700 dark:text-yellow-200" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Automated Control</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Intelligent systems that adjust energy usage based on patterns and preferences.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="bg-yellow-100 dark:bg-yellow-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700 dark:text-yellow-200" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced algorithms that maximize efficiency and minimize costs.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Energy Consulting
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our team of energy experts provides consulting services to help businesses and 
            organizations develop sustainable energy strategies:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Energy audits and assessments
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Customized energy efficiency plans
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Renewable energy implementation strategies
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Carbon footprint reduction
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              Regulatory compliance guidance
            </motion.li>
          </ul>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <a href="/contact" className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors duration-300">
              Get a Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default EnergyPage 