import React from "react"; 
import Age from "./Age";

function Welcome({name="John",age="40"}){
    return (
        <div>
            <p>Welcome,{name}!</p>
            {age > 18 && age < 65 && name=="John" ? <Age age={age}/> : <p>it is not greater than 18 and less than 65 and the name props is not equal to "John"</p>}
        </div>
    )
}

export default Welcome;