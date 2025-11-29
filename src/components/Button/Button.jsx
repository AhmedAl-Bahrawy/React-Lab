import React, { forwardRef } from "react";
import "./Button.css";

/**
 * Button Component
 * A reusable button component with forwardRef support for direct DOM access
 */
export const Button = forwardRef(({ children, variant = "primary", className = "", ...props }, ref) => {
  return (
    <button 
      ref={ref} 
      className={`btn btn-${variant} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
