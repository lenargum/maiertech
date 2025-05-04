import { useRef } from 'react'
import { motion } from "motion/react"

const SolutionsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const solutions = [
    {
      title: "Enterprise Solutions",
      description: "Custom software solutions designed for large organizations with complex needs.",
      icon: "💼"
    },
    {
      title: "Small Business Tools",
      description: "Affordable and scalable solutions tailored for growing businesses.",
      icon: "🔧"
    },
    {
      title: "Industry Specific",
      description: "Specialized solutions for healthcare, finance, manufacturing and more.",
      icon: "🏭"
    },
    {
      title: "Digital Transformation",
      description: "Help organizations transition to digital processes and workflows.",
      icon: "🚀"
    }
  ]

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Solutions
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
            Business Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Maiertech delivers comprehensive business solutions that help organizations 
            optimize operations, increase efficiency, and drive growth. Our team works closely 
            with clients to understand their unique challenges and develop customized solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {solutions.map((solution, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-3xl mb-3">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Our Approach
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We follow a systematic approach to ensure our solutions meet your business needs:
          </p>
          
          <div className="space-y-6 mb-6">
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-800 dark:text-green-100 font-semibold">01</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We start by understanding your business, goals, and challenges through thorough research and discussions.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-800 dark:text-green-100 font-semibold">02</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Strategy</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We develop a tailored strategy and solution architecture that aligns with your objectives.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-800 dark:text-green-100 font-semibold">03</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team delivers the solution with a focus on quality, efficiency, and minimal disruption.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-800 dark:text-green-100 font-semibold">04</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Support & Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide ongoing support and continually optimize the solution to ensure long-term success.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="/contact" className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300">
              Discuss Your Project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default SolutionsPage 