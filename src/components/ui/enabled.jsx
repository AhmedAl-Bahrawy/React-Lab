import { forwardRef, useState, useEffect } from "react";

export const EnabledCollection = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "row" }}>
      {children}
    </div>
  );
});

export const EnabledCheckbox = forwardRef(
  ({ enabled, setEnabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        checked={enabled}
        onChange={() => setEnabled((prev) => !prev)}
        {...props}
      />
    );
  }
);

export const EnabledLabel = ({ enabled }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(enabled ? "Enabled ON" : "Enabled OFF");
  }, [enabled]);

  return <label>{text}</label>;
};
