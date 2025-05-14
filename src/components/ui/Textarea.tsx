import React, { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        className={`w-full py-2 bg-transparent outline-none body1 placeholder:text-[#949699] transition-all duration-300 border-b border-[#EDE8FB] dark:border-[#2A2A2A] ${className}`}
        ref={ref}
        rows={props.rows || 4}
        style={{ lineHeight: "1.1", ...props.style }}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea"; 