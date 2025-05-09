import { Link } from 'react-router-dom'
import { Button } from './ui/Button/Button'
import { HeaderLogo } from './ui/Logo/HeaderLogo'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { ThemeToggle } from './ThemeToggle'

const Header = () => {
  return (
    <header className="container mx-auto fixed top-0 left-0 right-0 z-10 pt-5">
      <HoverBorderGradient containerClassName="rounded-full w-full" className="flex justify-between items-center gap-8 p-5 pl-8 dark:border-[#1A1A1A] h-20 bg-white dark:bg-black backdrop-blur-[10px]">
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
          {/* Theme switcher */}
          <ThemeToggle />

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