import { useRef } from 'react'
import { motion } from "motion/react"

const InnovationPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Innovationen
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
            Cutting-Edge Technology
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            At Maiertech, we're constantly pushing the boundaries of what's possible. 
            Our innovation department works tirelessly to develop new technologies that 
            solve real-world problems and create new opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Research & Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our R&D team explores new ideas and concepts, turning them into practical solutions
                that drive progress across industries.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Collaborative Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We partner with leading universities and research institutions to combine knowledge
                and resources for breakthrough innovations.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Innovation Process
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our structured innovation process ensures we consistently deliver valuable solutions:
          </p>
          
          <div className="space-y-4">
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-800 dark:text-blue-100 font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Ideation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Generating creative ideas through brainstorming and research.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-800 dark:text-blue-100 font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Validation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Testing concepts for feasibility and market potential.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-800 dark:text-blue-100 font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Turning validated concepts into working prototypes.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-blue-800 dark:text-blue-100 font-semibold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bringing successful innovations to market.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default InnovationPage 