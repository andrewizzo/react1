import React from "react"; 
import Age from "./Age";

function Welcome({name=<strong>Andrea</strong>,age="455"}){
    return (
        <div>
            <p>Welcome,{name}!</p>

            {/* ma non va bene anche per l'esercizio 8? 
            perchè se la props age c'è mi manda a schermo il componente age,altrimenti mi ritorna il tag p,giusto? */}
            {age > 18 ? <Age age={age}/> : <p>it is not greater than 18 </p>}
        </div>
    )
}

export default Welcome;