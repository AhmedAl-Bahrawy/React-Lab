import React, { forwardRef } from "react";

//
// 🔹 MainButton (with forwardRef)
//
export const MainButton = forwardRef(({ children, ...props }, ref) => {
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});

//
// 🔹 UnderText (regular component)
//
export const UnderText = ({ children }) => {
  return <p style={{ marginTop: "8px" }}>{children}</p>;
};

//
// 🔹 ButtonCollection (parent wrapper)
//
export const ButtonCollection = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      style={{ display: "flex", flexDirection: "row", gap: "8px" }}
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
