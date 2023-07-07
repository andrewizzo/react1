import React from "react"; 
import Age from "./Age";

function Welcome({name="John",age="40"}){
    return (
        <div>
            <p>Welcome,{name}!</p>
            {age > 18 && age < 65 && name=="John" ? <Age age={age}/> : <Age age={age} />}
        </div>
    )
}

export default Welcome;