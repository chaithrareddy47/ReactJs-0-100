// hello world using pure javascript

const heading = document.createElement("h2");

heading.innerHTML = "Hello world.!!! using pure Javascript";

const root1 = document.getElementById("root1");
root1.appendChild(heading);

console.log(heading);

// document - api given by browser

// basic hello world using React

const message = React.createElement(
  "h3",
  { id: "heading" },
  "Hello world.!!! using pure React"
);

console.log(message);

// nested elements

// const nestedEle = React.createElement(
//   "div",
//   { id: "parent" },
//   Recat.createElement("div", { id: "child" }, [
//     React.createElement("p", {}, "child element"),
//   ]),
//   React.createElement("p", {}, "paragragn")
// );

const nestedElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("p", {}, "Paragragh"),
    React.createElement("p", {}, "para2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("p", {}, "Paragragh"),
    React.createElement("p", {}, "para2"),
  ])
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// console.log(root2);

root2.render(nestedElement);
