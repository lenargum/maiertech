import React from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'filled' | 'outlined'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
  className?: string
  onClick?: () => void
}

export const Button = ({
  children,
  variant = 'filled',
  href,
  className = '',
  onClick,
}: ButtonProps) => {
  const baseStyles = "box-border flex flex-row justify-center items-center gap-2.5 rounded-[80px] transition-all duration-300 text-center whitespace-nowrap"
  
  const getClassName = () => {
    if (variant === 'filled') {
      return `${baseStyles} py-3.5 px-6 bg-[#00DCBB] border-2 border-white/10 text-white font-semibold text-base leading-[140%] ${className}`
    }
    return `${baseStyles} px-10 py-4 text-lg border-2 border-[#00DCBB] text-[#0096ED] hover:text-[#00DCBB] hover:border-[#0096ED] hover:bg-blue-50/10 ${className}`
  }
  
  // Custom style for the filled variant with background blend mode
  const filledStyle = variant === 'filled' ? {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 42, 35, 0.2) 100%), #00DCBB',
    backgroundBlendMode: 'darken, normal',
  } : {}
  
  if (href) {
    // If it's an external link
    if (href.startsWith('http')) {
      return (
        <a 
          href={href} 
          className={getClassName()} 
          onClick={onClick} 
          target="_blank" 
          rel="noopener noreferrer"
          style={filledStyle}
        >
          {children}
        </a>
      )
    }
    
    // If it's an internal link
    return (
      <Link 
        to={href} 
        className={getClassName()} 
        onClick={onClick}
        style={filledStyle}
      >
        {children}
      </Link>
    )
  }
  
  // If it's a button
  return (
    <button 
      className={getClassName()} 
      onClick={onClick}
      style={filledStyle}
    >
      {children}
    </button>
  )
} 