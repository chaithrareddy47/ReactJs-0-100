
import React from "react";
import ReactDOM from "react-dom/client";
import Example from "./components/Example";
import { func } from "prop-types";


const element = React.createElement(
    'p', // type of element
    {}, // proprs - attibutes for element
    'This is children' // children (text or other element)
);
console.log(element); // this is object


const heading = <h1>{10 + 3}</h1>
console.log(heading);

function greet(user) {
    return <p>{ user}</p>
}
const ele = greet('chai')


const jsxCode = <p>This is jsx code </p> 
console.log(jsxCode);

const transpiledToReact = React.createElement('h3', {},
    'Transpiled into React element'
)
console.log(transpiledToReact);

// Componenets
function Mycomponenet() {
    return <p>This is Componenets</p>
}

const elee = Mycomponenet()

function App() {
    return (
      <>
        <Mycomponenet />
        <Example />
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)
