export const CounterCollection = ({ children, className, ...props }) => {
  return (
    <div className={`counter-collection ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

export const Counter = ({ counter, className, ...props }) => {
  return (
    <div className={`counter-display ${className || ''}`} {...props}>
      {counter}
    </div>
  );
};
