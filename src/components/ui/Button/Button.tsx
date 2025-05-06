import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

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
  const computedClassName = useMemo(() => {
    return `ui-button h5 ${variant === 'filled' ? 'ui-button-filled' : 'ui-button-outlined'} ${className}`
  }, [variant, className])
  
  if (href) {
    // If it's an external link
    if (href.startsWith('http')) {
      return (
        <a 
          href={href} 
          className={computedClassName} 
          onClick={onClick} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    
    // If it's an internal link
    return (
      <Link 
        to={href} 
        className={computedClassName} 
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }
  
  // If it's a button
  return (
    <button 
      className={computedClassName} 
      onClick={onClick}
    >
      {children}
    </button>
  )
} 