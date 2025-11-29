const ProfileFormCollection = ({ children, className, ...props }) => {
  return (
    <div
      className={`form-collection ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Input = ({ children, className, ...props }) => {
  return <input className={`form-input ${className || ''}`} {...props} placeholder={children} />;
};

const ValueView = ({ children, className, ...props }) => {
  return (
    <div className={`value-view ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

export { ProfileFormCollection, Input, ValueView };
