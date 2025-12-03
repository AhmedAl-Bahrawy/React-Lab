import { useRef, useState } from "react";
import { Button } from "../Button/Button";
import { Toggle } from "../Toggle/Toggle";
import { Counter } from "../Counter/Counter";
import { ColorPicker, getRandomColor } from "../ColorPicker/ColorPicker";
import { Input, ValueDisplay } from "../Input/Input";
import {
    Component,
    ComponentTitle,
    ComponentDescription,
} from "../ComponentsLab";
import "./InteractivityAndState.css";

/**
 * #### **Interactivity & State**
 * 
 * This component demonstrates various React state management patterns and interactivity concepts:
 * - Basic state with useState
 * - Event handling (onClick, onDoubleClick, onChange)
 * - State batching and updates
 * - Object and array state management
 * - Form validation
 * - Refs with forwardRef
 */
export const InteractivityAndState = () => {
    const [enabled, setEnabled] = useState(false);
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState(getRandomColor());
    const buttonRef = useRef(null);
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    const [removingItems, setRemovingItems] = useState(new Set());
    const [search, setSearch] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [selected, setSelected] = useState([]);

    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "john@example.com",
        age: "25",
    });

    const options = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "Flask",
        "Django",
        "SQL",
        "NoSQL",
        "MongoDB",
        "MySQL",
    ];

    const handleFormChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validateForm = (form) => {
        const errors = {};
        if (!form.name) {
            errors.name = "Name is required";
        }
        if (!form.email) {
            errors.email = "Email is required";
        }
        if (!form.password) {
            errors.password = "Password is required";
        }
        if (form.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(form);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors(validationErrors);
            console.log(form);
        }
    };

    const filtered = items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    const handleRemoveItem = (index) => {
        // Add item to removing set to trigger animation
        setRemovingItems((prev) => new Set(prev).add(index));

        // Wait for animation to complete before removing from state
        setTimeout(() => {
            setItems((prev) => prev.filter((_, i) => i !== index));
            setRemovingItems((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
            });
        }, 300); // Match the animation duration in CSS
    };

    const handleClick = () => {
        console.log("Main button clicked!", buttonRef.current?.textContent);
    };

    const handleTripleAdd = () => {
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter((prev) => prev + 1);
        setCounter((prev) => prev + 1);
    };

    const toggleOption = (option) => {
        setSelected((prev) => {
            if (prev.includes(option)) {
                return prev.filter((item) => item !== option);
            }
            return [...prev, option];
        });
    };

    return (
        <>
            {/* Button Component Demo */}
            <Component>
                <ComponentTitle>Interactive Buttons</ComponentTitle>
                <ComponentDescription>
                    Beautiful buttons with hover effects, animations, and forwardRef
                    implementation for direct DOM access.
                </ComponentDescription>
                <div className="component-demo">
                    <div className="button-group">
                        <Button ref={buttonRef} onClick={handleClick} variant="primary">
                            Click me ✨
                        </Button>
                        <Button
                            onClick={() => alert("Secondary action!")}
                            variant="secondary"
                        >
                            Secondary
                        </Button>
                        <Button variant="success">Success</Button>
                        <Button variant="warning">Warning</Button>
                    </div>
                    <p className="under-text">
                        Try clicking the buttons to see console logs and interactions
                    </p>
                </div>
            </Component>

            {/* Toggle Component Demo */}
            <Component>
                <ComponentTitle>Toggle Switch</ComponentTitle>
                <ComponentDescription>
                    Interactive toggle switch with dynamic state management and visual
                    feedback.
                </ComponentDescription>
                <div className="component-demo">
                    <Toggle
                        enabled={enabled}
                        onChange={setEnabled}
                        label={enabled ? "Enabled ✓" : "Disabled ✗"}
                    />
                </div>
            </Component>

            {/* Counter Component Demo */}
            <Component>
                <ComponentTitle>Counter Controls</ComponentTitle>
                <ComponentDescription>
                    State management demonstration with increment and decrement
                    functionality.
                </ComponentDescription>
                <div className="component-demo">
                    <Counter value={counter} />
                    <div className="button-group">
                        <Button
                            onClick={() => setCounter((prev) => prev + 1)}
                            variant="success"
                        >
                            + Increment
                        </Button>
                        <Button
                            onClick={() => setCounter((prev) => prev - 1)}
                            variant="warning"
                            disabled={counter <= 0}
                        >
                            - Decrement
                        </Button>
                        <Button onClick={() => setCounter(0)} variant="secondary">
                            Reset
                        </Button>
                    </div>
                </div>
            </Component>

            {/* ColorPicker Component Demo */}
            <Component>
                <ComponentTitle>Dynamic Color Changer</ComponentTitle>
                <ComponentDescription>
                    Random color generation with smooth transitions and visual effects.
                </ComponentDescription>
                <div className="component-demo">
                    <ColorPicker color={color} onColorChange={setColor} />
                </div>
            </Component>

            {/* Double-click counter */}
            <Component>
                <ComponentTitle>Double-Click Counter</ComponentTitle>
                <ComponentDescription>
                    Advanced event handling with double-click detection and state
                    snapshots demonstration.
                </ComponentDescription>
                <div className="component-demo">
                    <Counter value={counter} />
                    <Button
                        ref={buttonRef}
                        onDoubleClick={() => setCounter((prev) => prev + 1)}
                        variant="primary"
                        className="pulse"
                    >
                        Double-Click Me 🖱️
                    </Button>
                </div>
            </Component>

            {/* Rapid increment button */}
            <Component>
                <ComponentTitle>Batch State Updates</ComponentTitle>
                <ComponentDescription>
                    Demonstrates React's state batching behavior with rapid successive
                    updates.
                </ComponentDescription>
                <div className="component-demo">
                    <Counter value={counter} />
                    <Button onClick={handleTripleAdd} variant="primary">
                        Add +5 Rapidly 🚀
                    </Button>
                </div>
            </Component>

            {/* User profile form */}
            <Component>
                <ComponentTitle>User Profile Form</ComponentTitle>
                <ComponentDescription>
                    Object state management with real-time updates and form validation
                    patterns.
                </ComponentDescription>
                <div className="component-demo">
                    <div className="form-container">
                        {Object.entries(profile).map(([key, value]) => (
                            <div key={key} className="form-field">
                                <Input
                                    type={
                                        key === "age"
                                            ? "number"
                                            : key === "email"
                                                ? "email"
                                                : "text"
                                    }
                                    value={value}
                                    onChange={(e) =>
                                        setProfile((prev) => ({ ...prev, [key]: e.target.value }))
                                    }
                                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                                    placeholder={`Enter your ${key}`}
                                />
                                <ValueDisplay label={key} value={profile[key]} />
                            </div>
                        ))}
                    </div>
                </div>
            </Component>

            {/*Add/remove list items (array state)*/}
            <Component>
                <ComponentTitle>Add/Remove List Items</ComponentTitle>
                <ComponentDescription>
                    Dynamic list management with array state operations - add new items,
                    remove individual entries, and see smooth animations in action.
                </ComponentDescription>
                <div className="component-demo">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`list-item ${removingItems.has(index) ? "removing" : ""
                                }`}
                        >
                            {item}
                            <Button
                                onClick={() => handleRemoveItem(index)}
                                variant="danger"
                                className={`remove-button ${removingItems.has(index) ? "removing" : ""
                                    }`}
                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                    <Input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter a new item"
                    />
                    <Button
                        onClick={() => {
                            setItems((prev) => [...prev, text]);
                            setText("");
                        }}
                        variant="primary"
                    >
                        Add Item
                    </Button>
                </div>
            </Component>

            {/* Filtered search list */}
            <Component>
                <ComponentTitle>Filtered Search List</ComponentTitle>
                <ComponentDescription>
                    Dynamic list filtering with search input and state management.
                </ComponentDescription>
                <div className="component-demo">
                    <Input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search items"
                    />
                    <div className="list-container">
                        {filtered.map((item, index) => (
                            <div key={index} className="list-item">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </Component>

            {/* Form with validation */}
            <Component>
                <ComponentTitle>Form with Validation</ComponentTitle>
                <ComponentDescription>
                    Form with validation using React Hook Form and Yup.
                </ComponentDescription>
                <div className="component-demo">
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            value={form.name}
                            name="name"
                            onChange={handleFormChange}
                            placeholder="Name"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                        <Input
                            type="email"
                            value={form.email}
                            name="email"
                            onChange={handleFormChange}
                            placeholder="Email"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                        <Input
                            type="password"
                            value={form.password}
                            name="password"
                            onChange={handleFormChange}
                            placeholder="Password"
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </Component>

            {/* Multi-Select Checkboxes */}
            <Component>
                <ComponentTitle>Multi-Select Checkboxes</ComponentTitle>
                <ComponentDescription>
                    Multi-select checkboxes with state management and toggle
                    functionality.
                </ComponentDescription>
                <div className="component-demo">
                    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                        {options.map((option) => (
                            <label
                                key={option}
                                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                            >
                                <input
                                    type="checkbox"
                                    checked={selected.includes(option)}
                                    onChange={() => toggleOption(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <h3>Selected:</h3>
                    <pre>{JSON.stringify(selected, null, 2)}</pre>
                </div>
            </Component>
        </>
    );
};
