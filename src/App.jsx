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
      {/* Color Changer */}
      <Component>
        <ComponentTitle>Color Changer</ComponentTitle>
        <ComponentDescription>This is a color changer</ComponentDescription>
        <ColorChangerCollection>
          <ButtonCollection>
            <MainButton
              style={{ backgroundColor: color }}
              onClick={() => setColor(ColorChanger())}
            >
              Change Color
            </MainButton>
          </ButtonCollection>
        </ColorChangerCollection>
      </Component>
      {/* Double-click counter (state snapshots) */}
      <Component>
        <ComponentTitle>Double-click Counter</ComponentTitle>
        <ComponentDescription>
          Click the button twice rapidly to increment the counter. Demonstrates
          handling state snapshots on double-click events.
        </ComponentDescription>
        <CounterCollection>
          <Counter counter={counter} />
          <ButtonCollection>
            <MainButton
              ref={buttonRef}
              onDoubleClick={() => setCounter((prev) => prev + 1)}
            >
              Double Click me value is
            </MainButton>
          </ButtonCollection>
        </CounterCollection>
      </Component>
      {/*Rapid increment button (state queueing) */}
      <Component>
        <ComponentTitle>Rapid Increment Button</ComponentTitle>
        <ComponentDescription></ComponentDescription>
        <CounterCollection>
          <Counter counter={counter} />
          <ButtonCollection>
            <MainButton onClick={handleTripleAdd}>Click to add 3</MainButton>
          </ButtonCollection>
        </CounterCollection>
      </Component>
    </ComponentsLab>
  );
}

export default App;
