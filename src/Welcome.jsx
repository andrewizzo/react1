import React from "react"; 
import Age from "./Age";

function Welcome({name=<strong>Andrea</strong>,age="24"}){
    return (
        <div>
            <p>Welcome,{name}!</p>
            <Age age={age}/>
        </div>
    )
}

export default Welcome;