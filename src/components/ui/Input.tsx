import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={`w-full py-2 bg-transparent outline-none body1 text-center placeholder:text-[#949699] transition-all duration-300 border-b border-[#EDE8FB] dark:border-[#2A2A2A] ${className}`}
        ref={ref}
        style={{ lineHeight: "1.1", ...props.style }}
        {...props}
      />
    );
  }
);

Input.displayName = "Input"; 