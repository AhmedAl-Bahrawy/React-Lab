import React from "react";
import "./Input.css";

/**
 * Input Component
 * A styled input field with label support
 */
export const Input = ({
    label,
    value,
    onChange,
    type = "text",
    placeholder = "",
    className = "",
    ...props
}) => {
    return (
        <div className={`input-wrapper ${className}`}>
            {label && <label className="input-label">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input-field"
                {...props}
            />
        </div>
    );
};

/**
 * ValueDisplay Component
 * Displays the current value of an input
 */
export const ValueDisplay = ({ label, value, className = "", ...props }) => {
    return (
        <div className={`value-display ${className}`} {...props}>
            <strong>{label}:</strong> <span>{value || "Not provided"}</span>
        </div>
    );
};
