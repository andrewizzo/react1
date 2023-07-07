import React, { useState } from "react";

function ClickerTracker(){
    const [lastButton, setLastButton] = useState();

    const handleClick = (e) => {
        const buttonId = e.target.id;
        setLastButton(buttonId)
    };

    return (
        <div>
            <h1>Last Button Clicked = {lastButton}</h1>
            <button id="button1" onClick={handleClick}>Button1</button>
            <button id="button2" onClick={handleClick}>Button2</button>
            <button id="button3" onClick={handleClick}>Button3</button>
        </div>
    );
}

export default ClickerTracker;