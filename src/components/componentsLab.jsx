export const ComponentsLab = ({ children }) => {
  return (
    <div className="components-lab">{children}</div>
  );
};

export const Component = ({ children }) => {
  return (
    <div className="component-card fade-in-up">
      {children}
    </div>
  );
};

export const ComponentTitle = ({ children }) => {
  return <h2 className="component-title">{children}</h2>;
};

export const ComponentDescription = ({ children }) => {
  return <p className="component-description">{children}</p>;
};
