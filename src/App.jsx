import "./App.css";
import {
  ComponentsLab,
  Component,
  ComponentTitle,
  ComponentDescription,
  InteractivityAndState,
} from "./components";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">React Components Lab</h1>
        <p className="app-subtitle">
          Explore interactive React components with modern design and smooth
          animations
        </p>
      </header>

      <ComponentsLab>
        {/* #### **Interactivity & State** Section */}
        <InteractivityAndState />

        {/* #### **[Your New Section Name]** Section */}
        {/* Add your new section components below */}

        {/* Example template for new component:
        <Component>
          <ComponentTitle>Your Component Title</ComponentTitle>
          <ComponentDescription>
            Description of what this component demonstrates.
          </ComponentDescription>
          <div className="component-demo">
            {/* Your component content here *\/}
          </div>
        </Component>
        */}
      </ComponentsLab>
    </div>
  );
}

export default App;
