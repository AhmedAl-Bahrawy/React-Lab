import { forwardRef } from "react";
import "./Checkbox.css";

/**
 * Checkbox Component
 * A beautiful, accessible checkbox with smooth animations
 * 
 * @param {boolean} checked - Whether the checkbox is checked
 * @param {function} onChange - Callback function when checkbox state changes
 * @param {string} label - Label text for the checkbox
 * @param {boolean} disabled - Whether the checkbox is disabled
 */
export const Checkbox = forwardRef(
    ({ checked = false, onChange, label, disabled = false, ...props }, ref) => {
        return (
            <label className={`checkbox-container ${disabled ? "disabled" : ""}`}>
                <input
                    ref={ref}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className="checkbox-input"
                    {...props}
                />
                <span className="checkbox-custom">
                    <svg
                        className="checkbox-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </span>
                {label && <span className="checkbox-label">{label}</span>}
            </label>
        );
    }
);

Checkbox.displayName = "Checkbox";
