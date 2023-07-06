import React, { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);

    setInterval(() => {
        setCounter((c) => c + 1);
    },1000)

    return <h1>{counter}</h1>
}

export default Counter;

// perchè renderizza 1 e poi dopo 1 secondo renderizza 4 e poi impazzisce e aggiorna all'infinito?




