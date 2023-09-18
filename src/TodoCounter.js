import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
      <h1>
        Has completado {completed} de {total} ToDOs
      </h1>
    );
}

export {TodoCounter};