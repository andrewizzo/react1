import React from "react";

function Age({age}){
    return(
        <div>
            {age > 18 ? <p>Your age is {age}</p> : <p>You are very Young</p>}
        </div>
    )
}

export default Age;