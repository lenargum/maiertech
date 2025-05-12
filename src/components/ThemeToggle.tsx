import { useTheme } from '@/contexts/ThemeContext'
import IconLightMode from '@/assets/darkmode/IconLightMode'
import IconDarkMode from '@/assets/darkmode/IconDarkMode'
import React from 'react'


const ThemeToggle:React.FC<{variant?: 'desktop' | 'mobile'}> = ({variant = 'desktop'}) => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setDarkMode(false);
        }}
        className={`cursor-pointer p-0 rounded-full transition-all duration-300 ease-in-out`}
        aria-label="Toggle light mode"
      >
        <IconLightMode isGradientColor={!darkMode} variant={variant} />
      </button>

      <div className="w-px h-4 rounded bg-[#E6E7E8] dark:bg-[#1A1A1A]" />

      <button
        onClick={(e) => {
          e.stopPropagation();
          setDarkMode(true);
        }}
        className={`cursor-pointer p-0 rounded-full transition-all duration-300 ease-in-out`}
        aria-label="Toggle dark mode"
      >
        <IconDarkMode isGradientColor={darkMode} variant={variant} />
      </button>
    </div>
  );
} 

export default ThemeToggle;