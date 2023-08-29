import React from "react";
import ReactDOM from "react-dom";
//React element
const jsxheading = (<h1>Namaste react using JSx</h1>);
console.log(jsxheading);
const root= ReactDOM.createRoot(document.getElementById("root"));
        

//React functional component
const HeadingComponent = ()=> {
        return <h1>Namaste functional component</h1>
}
// can write like this also
const HeadingComponent1 = ()=> <h1>Namaste functional component</h1>
//How to render func. component
root.render(<HeadingComponent/>);