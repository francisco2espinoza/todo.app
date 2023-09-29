import React from 'react';
import './CreateTodoButton.css';
function CreateTodoButton(){
    return(
        <button 
            className="CreateTodoButton"
            onClick={
                (event)=> {
                    console.log('Le diste click')
                    console.log(event.target)
                    console.log(event)
                }
            }
        >+</button>    
    );
}
export { CreateTodoButton};