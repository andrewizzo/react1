import React, { useState } from "react";

function ClickerCounter(){
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((c) => c + 1)
    };

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={handleClick}>Clicca qui</button>
        </div>
    )
}

export default ClickerCounter;