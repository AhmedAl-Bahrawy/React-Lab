export const CounterCollection = ({ children, ...props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  );
};

export const Counter = ({ counter, ...props }) => {
  return (
    <>
      <p>{counter}</p>
    </>
  );
};
