import { forwardRef, useState, useEffect } from "react";

export const EnabledCollection = forwardRef(({ children, className }, ref) => {
  return (
    <div ref={ref} className={`checkbox-container ${className || ''}`}>
      {children}
    </div>
  );
});

export const EnabledCheckbox = forwardRef(
  ({ enabled, setEnabled, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        checked={enabled}
        onChange={() => setEnabled((prev) => !prev)}
        className={`checkbox-input ${className || ''}`}
        {...props}
      />
    );
  }
);

export const EnabledLabel = ({ enabled, className }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(enabled ? "✅ Enabled ON" : "❌ Enabled OFF");
  }, [enabled]);

  return (
    <label className={`checkbox-label ${enabled ? 'enabled' : 'disabled'} ${className || ''}`}>
      {text}
    </label>
  );
};
