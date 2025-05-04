import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "motion/react"

interface CarouselItemProps {
  title: string
  description: string
  link: string
  bgColor: string
}

const carouselItems: CarouselItemProps[] = [
  {
    title: "Innovationen",
    description: "Discover our innovative solutions",
    link: "/innovationen",
    bgColor: "bg-blue-100 dark:bg-blue-900"
  },
  {
    title: "Solutions",
    description: "Explore our business solutions",
    link: "/solutions",
    bgColor: "bg-green-100 dark:bg-green-900"
  },
  {
    title: "Energy",
    description: "Learn about our energy products",
    link: "/energy",
    bgColor: "bg-yellow-100 dark:bg-yellow-900"
  }
]

const Carousel = () => {
  return (
    <AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`${item.bgColor} rounded-lg shadow-lg p-6 text-center`}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
            <Link 
              to={item.link}
              className="inline-block px-6 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  )
}

export default Carousel 