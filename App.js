const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child" }, [
    React.createElement("h1", { key: "h1c" }, "Im h1 tag"),
    React.createElement("h2", { key: "h2c" }, "Im h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1c2" }, "Im h1 tag child2"),
    React.createElement("h2", { key: "h2ce" }, "Im h2 tag child2"),
  ]),
]);
console.log(parent);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
