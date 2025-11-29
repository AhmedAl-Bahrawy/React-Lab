import React from "react";
import "./Counter.css";

/**
 * Counter Component
 * Displays a counter value with animated styling
 */
export const Counter = ({ value, className = "", ...props }) => {
    return (
        <div className={`counter-display ${className}`} {...props}>
            <span className="counter-value">{value}</span>
        </div>
    );
};
