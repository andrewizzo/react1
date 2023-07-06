import React from "react"; 
import Age from "./Age";

function Welcome({name=<strong>Andrea</strong>,age="400"}){
    return (
        <div>
            <p>Welcome,{name}!</p>
            {age > 18 && age < 65 ? <Age age={age}/> : <p>it is not greater than 18 and less than 65</p>}
        </div>
    )
}

export default Welcome;