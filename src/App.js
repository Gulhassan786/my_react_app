import React, { useState } from "react";

import "./App.css";
/*import Food from "./dinner.js";
import Greet from "./greeting.js";
*/
import { Message } from "./Message.js"

/*Below Food is imported from the component dinner.js . And Greet is imported form the component greetings.js
*/


function App() {
    let [count, setcount] = useState(1)
    let [isMorning, setMorning] = useState(true);
    let [name, setname] = useState(false)
    return (
        < div className={`box ${isMorning ? 'isdaytime' : ''}`}>

            <h1>Good  {isMorning ? `Morning defualt` : 'Night not defualt'}</h1>

            <button onClick={() => setMorning(!isMorning)} >Hi! click me</button>

            < Message counter={count} />

            <button onClick={
                () => setcount(count + 1)
            }>Click me for counting</button>

            <div className={name ? 'namecolor' : ''}>
                <h1> Asslam o alaikum {name ? 'Sir Mohsin' : 'Sir Amir pinnger'}</h1>
                <button onClick={() => setname(!name)}>Click me!</button>

            </div>
        </div >
    )
    /* This for div but now i comit it b/c it lot of stuff on the screen
     <br />
<Food f="Biryani" />
<Food f="Karahi" />
<Food f="tikka" />
<Greet gr="gul hassan" />
<Greet gr="Noor hussain" />
<Greet gr="Muzamil" />
            */
}

export default App;