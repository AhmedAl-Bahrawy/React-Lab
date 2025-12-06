import "./ComponentsLab.css";

/**
 * ComponentsLab
 * Main container for all component demonstrations
 */
export const ComponentsLab = ({ children }) => {
  return <div className="components-lab">{children}</div>;
};

/**
 * Component
 * Individual component card wrapper
 */
export const Component = ({ children }) => {
  return <div className="component-card fade-in-up">{children}</div>;
};

/**
 * ComponentTitle
 * Title for each component demonstration
 */
export const ComponentTitle = ({ children }) => {
  return <h2 className="component-title">{children}</h2>;
};

/**
 * ComponentDescription
 * Description for each component demonstration
 */
export const ComponentDescription = ({ children }) => {
  return <p className="component-description">{children}</p>;
};

/**
 * SectionTitle
 * Main section title with separator for grouping related components
 */
export const SectionTitle = ({ children }) => {
  return (
    <div className="section-title-container">
      <h1 className="section-title">{children}</h1>
      <div className="section-separator"></div>
    </div>
  );
};
