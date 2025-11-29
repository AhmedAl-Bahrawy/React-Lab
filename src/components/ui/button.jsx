import React, { forwardRef } from "react";

//
// 🔹 MainButton (with forwardRef)
//
export const MainButton = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button ref={ref} className={className} {...props}>
      {children}
    </button>
  );
});

//
// 🔹 UnderText (regular component)
//
export const UnderText = ({ children, className }) => {
  return <p className={`under-text ${className || ''}`}>{children}</p>;
};

//
// 🔹 ButtonCollection (parent wrapper)
//
export const ButtonCollection = forwardRef(({ children, vertical = false, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`button-collection ${vertical ? 'vertical' : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
});

//
// Attach sub-components
//
ButtonCollection.MainButton = MainButton;
ButtonCollection.UnderText = UnderText;
