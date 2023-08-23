import React, { useState } from "react";

const TodoList = () => {
    const [items,setItems] = useState([]);
    const [inputValue,setInputValue] = useState('');

    const handleAddItem = () => {
        if(inputValue.trim()){
            setItems([...items,inputValue])
            //avevo gia aggiunto prima che quando premi il pulsante e aggiungi un item ,
            //l'input si aggiorna in automatico riportando il valore a una stringa vuota,giusto? 
            setInputValue('');
        }
    }

    const handleReset = () => {
        setItems([])
    }

    const handleRemoveItem = (index) => {
        items.splice(index,1)
        setItems([...items])
    }

    return (
        <>
            <div>
                <ul>
                    {items.map((item,index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => handleRemoveItem(index)}>rimuovi</button>
                        </li>
                    ))}
                </ul>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleAddItem}>add</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </>
    )
}

export default TodoList;