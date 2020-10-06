import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Food from "./dinner.js"

import Greet from "./greeting.js"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Food f="Biryani" />
                <Food f="Karahi" />
                <Food f="tikka" />
                <Greet gr="gul hassans" />
                <Greet gr="Noor hussain" />
                <Greet gr="Muzamil" />
            </header>
        </div>
    )
}

export default App;