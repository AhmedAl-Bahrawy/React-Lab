import "./App.css";
import {
  ComponentsLab,
  Component,
  ComponentTitle,
  ComponentDescription,
  SectionTitle,
  InteractivityAndState,
  ManagingState,
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

        <ManagingState />
      </ComponentsLab>
    </div>
  );
}

export default App;
