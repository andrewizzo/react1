import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({initialValue=0,incrementInterval=1000,incrementAmount=1}){
    const [counter, setCounter] = useState(initialValue);

    setInterval(() => {
        setCounter((c) => c + incrementAmount);
    },incrementInterval)

    return <CounterDisplay count={counter} />
}

export default Counter;

// perchè renderizza 1 e poi dopo 1 secondo renderizza 4 e poi impazzisce e aggiorna all'infinito?




