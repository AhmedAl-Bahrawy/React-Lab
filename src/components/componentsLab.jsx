export const ComponentsLab = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  );
};

export const Component = ({ children }) => {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>{children}</div>
      <hr
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "black",
          margin: "0 auto",
        }}
      ></hr>
    </>
  );
};

export const ComponentTitle = ({ children }) => {
  return <h2>{children}</h2>;
};

export const ComponentDescription = ({ children }) => {
  return <p>{children}</p>;
};
