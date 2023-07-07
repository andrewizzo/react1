import React, { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome(){
    const [name ,setName] = useState();

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleInputChange} />
            <Welcome name={name} />
        </div>
    )
}

export default InteractiveWelcome;