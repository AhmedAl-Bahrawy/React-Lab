import "./App.css";
import {
  ButtonCollection,
  MainButton,
  UnderText,
} from "./components/ui/button";
import {
  ComponentsLab,
  Component,
  ComponentTitle,
  ComponentDescription,
} from "./components/componentsLab";
import {
  EnabledCollection,
  EnabledCheckbox,
  EnabledLabel,
} from "./components/ui/enabled";
import { useRef, useState } from "react";
import { Counter, CounterCollection } from "./components/ui/counter";
import {
  ColorChangerCollection,
  ColorChanger,
} from "./components/ui/colorChanger";
import {
  ProfileFormCollection,
  Input,
  ValueView,
} from "./components/ui/userProfileForm";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(ColorChanger());
  const buttonRef = useRef(null);
  
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
  
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: "25",
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">React Components Lab</h1>
        <p className="app-subtitle">
          Explore interactive React components with modern design and smooth animations
        </p>
      </header>
      
      <ComponentsLab>
        {/* Button Collection */}
        <Component>
          <ComponentTitle>Interactive Buttons</ComponentTitle>
          <ComponentDescription>
            Beautiful buttons with hover effects, animations, and forwardRef implementation for direct DOM access.
          </ComponentDescription>
          <div className="component-demo">
            <ButtonCollection>
              <MainButton ref={buttonRef} onClick={handleClick} className="btn btn-primary">
                Click me ✨
              </MainButton>
              <MainButton onClick={() => alert('Secondary action!')} className="btn btn-secondary">
                Secondary
              </MainButton>
            </ButtonCollection>
            <UnderText>Try clicking the buttons to see console logs and interactions</UnderText>
          </div>
        </Component>

        {/* Check Enabled State */}
        <Component>
          <ComponentTitle>Toggle Switch</ComponentTitle>
          <ComponentDescription>
            Interactive checkbox with dynamic state management and visual feedback.
          </ComponentDescription>
          <div className="component-demo">
            <EnabledCollection>
              <EnabledCheckbox enabled={enabled} setEnabled={setEnabled} />
              <EnabledLabel enabled={enabled} />
            </EnabledCollection>
          </div>
        </Component>

        {/* Counter */}
        <Component>
          <ComponentTitle>Counter Controls</ComponentTitle>
          <ComponentDescription>
            State management demonstration with increment and decrement functionality.
          </ComponentDescription>
          <div className="component-demo">
            <CounterCollection>
              <Counter counter={counter} />
              <ButtonCollection>
                <MainButton 
                  onClick={() => setCounter((prev) => prev + 1)}
                  className="btn btn-success"
                >
                  + Increment
                </MainButton>
                <MainButton 
                  onClick={() => setCounter((prev) => prev - 1)}
                  className="btn btn-warning"
                  disabled={counter <= 0}
                >
                  - Decrement
                </MainButton>
                <MainButton 
                  onClick={() => setCounter(0)}
                  className="btn btn-secondary"
                >
                  Reset
                </MainButton>
              </ButtonCollection>
            </CounterCollection>
          </div>
        </Component>

        {/* Color Changer */}
        <Component>
          <ComponentTitle>Dynamic Color Changer</ComponentTitle>
          <ComponentDescription>
            Random color generation with smooth transitions and visual effects.
          </ComponentDescription>
          <div className="component-demo">
            <ColorChangerCollection>
              <ButtonCollection>
                <MainButton
                  style={{ backgroundColor: color, color: 'white' }}
                  onClick={() => setColor(ColorChanger())}
                  className="color-changer-btn"
                >
                  Change Color
                </MainButton>
              </ButtonCollection>
            </ColorChangerCollection>
          </div>
        </Component>

        {/* Double-click counter */}
        <Component>
          <ComponentTitle>Double-Click Counter</ComponentTitle>
          <ComponentDescription>
            Advanced event handling with double-click detection and state snapshots demonstration.
          </ComponentDescription>
          <div className="component-demo">
            <CounterCollection>
              <Counter counter={counter} />
              <ButtonCollection>
                <MainButton
                  ref={buttonRef}
                  onDoubleClick={() => setCounter((prev) => prev + 1)}
                  className="btn btn-primary pulse"
                >
                  Double-Click Me 🖱️
                </MainButton>
              </ButtonCollection>
            </CounterCollection>
          </div>
        </Component>

        {/* Rapid increment button */}
        <Component>
          <ComponentTitle>Batch State Updates</ComponentTitle>
          <ComponentDescription>
            Demonstrates React's state batching behavior with rapid successive updates.
          </ComponentDescription>
          <div className="component-demo">
            <CounterCollection>
              <Counter counter={counter} />
              <ButtonCollection>
                <MainButton onClick={handleTripleAdd} className="btn btn-primary">
                  Add +5 Rapidly 🚀
                </MainButton>
              </ButtonCollection>
            </CounterCollection>
          </div>
        </Component>

        {/* User profile form */}
        <Component>
          <ComponentTitle>User Profile Form</ComponentTitle>
          <ComponentDescription>
            Object state management with real-time updates and form validation patterns.
          </ComponentDescription>
          <div className="component-demo">
            <ProfileFormCollection>
              {Object.entries(profile).map(([key, value], index) => (
                <div key={key} className="form-field">
                  <Input
                    type={key === 'age' ? 'number' : key === 'email' ? 'email' : 'text'}
                    value={value}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, [key]: e.target.value }))
                    }
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    className="form-input"
                  />
                  <ValueView className="value-view">
                    <strong>{key}:</strong> {profile[key] || 'Not provided'}
                  </ValueView>
                </div>
              ))}
            </ProfileFormCollection>
          </div>
        </Component>
      </ComponentsLab>
    </div>
  );
}

export default App;
