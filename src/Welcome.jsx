import React from "react"; 

function Welcome({name="Andrea",age="24"}){
    return (
        <div>
            <p>Welcome,{name}!</p>
            <p>Your age is {age}</p>
        </div>
    )
}

export default Welcome;