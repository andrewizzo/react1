import React from "react"; 
import Age from "./Age";

function Welcome({name=<strong>Andrea</strong>,age="4"}){
    return (
        <div>
            <p>Welcome,{name}!</p>
            {age > 18 ? <Age age={age}/> : <p>it is not greater than 18</p>}
        </div>
    )
}

export default Welcome;