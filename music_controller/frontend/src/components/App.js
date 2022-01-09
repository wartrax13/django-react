import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect 
} from "react-router-dom";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <HomePage />
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);