import { useTheme } from '@/contexts/ThemeContext'
import IconLightMode from '@/assets/darkmode/IconLightMode'
import IconDarkMode from '@/assets/darkmode/IconDarkMode'

export function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setDarkMode(false)}
        className={`cursor-pointer p-0 rounded-full transition-all duration-300 ease-in-out ${
          darkMode ? "text-[#949699]" : "text-gradient"
        }`}
        aria-label="Toggle light mode"
      >
        <IconLightMode isGradientColor={!darkMode} />
      </button>

      <div className="w-px h-4 rounded bg-[#E6E7E8] dark:bg-[#1A1A1A]" />

      <button
        onClick={() => setDarkMode(true)}
        className={`cursor-pointer p-0 rounded-full transition-all duration-300 ease-in-out ${
          darkMode ? "text-gradient" : "text-[#949699]"
        }`}
        aria-label="Toggle dark mode"
      >
        <IconDarkMode isGradientColor={darkMode} />
      </button>
    </div>
  );
} 