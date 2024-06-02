import "./Child.css"
import React from "react";
// import { List } from "./list"
console.log(React)

const Child = () => {
    return (
        <React.Fragment>
            <div className="component">
                <h3>Hello Component</h3>
            </div>
                <h3>Hello Fragment</h3>
                <p>Lorem etc</p>
                {/* <List /> */}
        </React.Fragment>
    );
};

export default Child;