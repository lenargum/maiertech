import { Link } from 'react-router-dom'
import { Button } from './ui/Button/Button'
import { HeaderLogo } from './ui/Logo/HeaderLogo'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

  return (
    <header className="max-w-[100vw] lg:container lg:mx-auto fixed top-0 left-0 right-0 z-50 p-4 lg:p-0 lg:pt-5">
      <HoverBorderGradient containerClassName="rounded-full w-full" className="flex justify-between items-center gap-8 py-2.5 px-5 lg:p-5 lg:pl-8 dark:border-[#1A1A1A] h-15 lg:h-20 bg-white dark:bg-black backdrop-blur-[10px]">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <HeaderLogo className="h-[28px] lg:h-[41px]" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/about" className="h5" onClick={scrollToTop}>
            Über Uns
          </Link>
          <Link to="/innovationen" className="h5" onClick={scrollToTop}>
            Innovationen
          </Link>
          <Link to="/solutions" className="h5" onClick={scrollToTop}>
            Solutions
          </Link>
          <Link to="/energy" className="h5" onClick={scrollToTop}>
            Energy
          </Link>
          <Link to="/contact" className="h5" onClick={scrollToTop}>
            Kontakt
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          {/* Theme switcher */}
          <ThemeToggle />

          <div className="hidden lg:block">
            <Button href="/contact" variant="filled" className="py-2 px-6">
              Kontakt
            </Button>
          </div>
        </div>

        <button className="lg:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 12L10 12"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 20L10 20"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 28L10 28"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </HoverBorderGradient>

      {isMobileMenuOpen && (
        <div className="flex lg:hidden fixed z-50 inset-0 h-screen w-screen bg-white dark:bg-black backdrop-blur-[10px] flex-col justify-between items-center gap-10 px-8 py-5.5"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          <div className="flex items-center justify-between w-full py-[calc(6px)] px-[calc(0.25rem+2px)]">
            <div className="flex items-center">
              <Link to="/" className="flex items-center" onClick={scrollToTop}>
                <HeaderLogo className="h-[28px] lg:h-[41px]" />
              </Link>
            </div>

            <button className="lg:hidden cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-4 -4 32 32">
                <path fill="currentColor" d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="flex flex-col items-center gap-10">
            <Link to="/about" className="h4" onClick={scrollToTop}>
              Über Uns
            </Link>
            <Link to="/innovationen" className="h4" onClick={scrollToTop}>
              Innovationen
            </Link>
            <Link to="/solutions" className="h4" onClick={scrollToTop}>
              Solutions
            </Link>
            <Link to="/energy" className="h4" onClick={scrollToTop}>
              Energy
            </Link>
            <Link to="/contact" className="h4" onClick={scrollToTop}>
              Kontakt
            </Link>
          </nav>

          <div className="flex flex-col items-center gap-5">
            <ThemeToggle variant="mobile" />

            <Button href="/contact" variant="filled" className="py-2 px-6 text-sm">
              Kontakt
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 