import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/Button'

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="mr-1">
                <div className="w-8 h-8 primary-gradient-bg rounded-md flex items-center justify-center">
                  <div className="text-white font-bold">M</div>
                </div>
              </div>
              <div className="ml-1">
                <span className="font-bold text-lg text-gray-800 dark:text-white">MAIER<span className="text-[#00DCBB]">TECH</span></span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] text-sm font-medium">
            Über Uns
          </Link>
          <Link to="/innovationen" className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] text-sm font-medium">
            Innovationen
          </Link>
          <Link to="/solutions" className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] text-sm font-medium">
            Solutions
          </Link>
          <Link to="/energy" className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] text-sm font-medium">
            Energy
          </Link>
          <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] text-sm font-medium">
            Kontakt
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          
          <div className="hidden md:block">
            <Button href="/contact" variant="filled" className="py-2 px-6 text-sm">
              Kontakt
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Über Uns
            </Link>
            <Link 
              to="/innovationen" 
              className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Innovationen
            </Link>
            <Link 
              to="/solutions" 
              className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/energy"
              className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Energy
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 dark:text-gray-300 hover:text-[#0096ED] dark:hover:text-[#00DCBB] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header 