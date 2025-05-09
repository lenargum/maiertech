import { Link } from 'react-router-dom'
import { Button } from './ui/Button/Button'
import { HeaderLogo } from './ui/Logo/HeaderLogo'
import { HoverBorderGradient } from './ui/hover-border-gradient'

import IconLightMode from '@/assets/darkmode/IconLightMode'
import IconDarkMode from '@/assets/darkmode/IconDarkMode'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <header className="container mx-auto fixed top-0 left-0 right-0 z-10 pt-5">
      <HoverBorderGradient containerClassName="rounded-full w-full" className="flex justify-between items-center gap-8 p-5 pl-8 border-2 border-[#EDE8FB] h-20 bg-white/50 backdrop-blur-[10px]">
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

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(false)}
              className={`cursor-pointer p-0 rounded-full transition-all duration-300 ease-in-out ${darkMode ? "text-[#949699]" : "text-gradient"}`}
              aria-label="Toggle light mode"
            >
              <IconLightMode isGradientColor={!darkMode} />
            </button>

            <div className="w-0 h-4 outline outline-[#E6E7E8]" />

            <button
              onClick={() => setDarkMode(true)}
              className={`cursor-pointer p-0 rounded-full transition-all duration-300 ease-in-out ${darkMode ? "text-gradient" : "text-[#949699]"}`}
              aria-label="Toggle dark mode"
            >
              <IconDarkMode isGradientColor={darkMode} />
            </button>
          </div>



          <div className="hidden md:block">
            <Button href="/contact" variant="filled" className="py-2 px-6 text-sm">
              Kontakt
            </Button>
          </div>
        </div>
      </HoverBorderGradient>
    </header>
  )
}

export default Header 