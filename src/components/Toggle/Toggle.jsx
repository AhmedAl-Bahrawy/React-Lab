import React from "react";
import "./Toggle.css";

/**
 * Toggle Component
 * A modern toggle switch with label
 */
export const Toggle = ({ enabled, onChange, label, className = "", ...props }) => {
    return (
        <div className={`toggle-container ${className}`} {...props}>
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => onChange(e.target.checked)}
                    className="toggle-input"
                />
                <span className="toggle-slider"></span>
            </label>
            {label && (
                <span className={`toggle-label ${enabled ? "enabled" : "disabled"}`}>
                    {label || (enabled ? "Enabled" : "Disabled")}
                </span>
            )}
        </div>
    );
};
