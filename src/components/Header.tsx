import { Link } from 'react-router-dom'
import { Button } from './ui/Button/Button'
import { HeaderLogo } from './ui/Logo/HeaderLogo'

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  return (
    <header className="container mx-auto fixed top-0 left-0 right-0 z-10 pt-5">
      <div className="flex justify-between items-center p-5 pl-8 gap-8 h-20 bg-white/50 border-2 border-[#EDE8FB] backdrop-blur-[10px] rounded-full">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <HeaderLogo />
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="flex items-center gap-10">
          <Link to="/" className="h5">
            Über Uns
          </Link>
          <Link to="/innovationen" className="h5">
            Innovationen
          </Link>
          <Link to="/solutions" className="h5">
            Solutions
          </Link>
          <Link to="/energy" className="h5">
            Energy
          </Link>
          <Link to="/contact" className="h5">
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
        </div>
      </div>
    </header>
  )
}

export default Header 