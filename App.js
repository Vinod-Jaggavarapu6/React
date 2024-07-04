import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello React");

// const jsxHeading = <h1 id="heading">Hello React from JSX</h1>;

const Title = () => <h1 className="title">Component Composition</h1>;
const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h1 id="heading">Hello React from JSX functional component</h1>
    </>
  );
};
// console.log(jsxHeading);
console.log(HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
