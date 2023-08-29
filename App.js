import React from "react";
import ReactDOM from "react-dom";
//React element
const Title = () => (<h1>Namaste react title comp</h1>);
const root= ReactDOM.createRoot(document.getElementById("root"));
        

//React functional component
const HeadingComponent = ()=> {
        return (
                <div>
                {Title()}
                <Title/>
                <Title></Title>
        <h1>Namaste functional component</h1>
        </div>)
}
// can write like this also
const HeadingComponent1 = ()=> <h1>Namaste functional component</h1>
//How to render func. component
root.render(<HeadingComponent/>);