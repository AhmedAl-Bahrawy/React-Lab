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

function App() {
  const [enabled, setEnabled] = useState(false);
  const [counter, setCounter] = useState(0);
  const buttonRef = useRef(null);
  const handleClick = () => {
    console.log("Main button clicked!", buttonRef.current?.textContent);
  };

  return (
    <ComponentsLab>
      {/* Button Collection */}
      <Component>
        <ComponentTitle>Button Collection (with forwardRef)</ComponentTitle>
        <ComponentDescription>
          This is a button collection with a forwardRef
        </ComponentDescription>
        <ButtonCollection>
          <MainButton ref={buttonRef} onClick={handleClick}>
            Click me
          </MainButton>
          <UnderText>This is under the button</UnderText>
        </ButtonCollection>
      </Component>
      {/* Check Enabled State */}
      <Component>
        <ComponentTitle>Check Enabled State</ComponentTitle>
        <ComponentDescription>
          This is a check enabled state
        </ComponentDescription>
        <EnabledCollection>
          <EnabledCheckbox enabled={enabled} setEnabled={setEnabled} />
          <EnabledLabel enabled={enabled} />
        </EnabledCollection>
      </Component>
      {/* Counter */}
      <Component>
        <ComponentTitle>Counter</ComponentTitle>
        <ComponentDescription>This is a counter</ComponentDescription>
        <CounterCollection>
          <Counter counter={counter} />
          <ButtonCollection>
            <MainButton onClick={() => setCounter((prev) => prev + 1)}>
              Increment
            </MainButton>
            <MainButton onClick={() => setCounter((prev) => prev - 1)}>
              Decrement
            </MainButton>
          </ButtonCollection>
        </CounterCollection>
      </Component>
    </ComponentsLab>
  );
}

export default App;
