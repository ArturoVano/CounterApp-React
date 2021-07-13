import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CounterApp = ({ value = 0 }) => {
    
    // Hooks
    const [ counter, setCounter ] = useState( value );
    
    // Events
    const handleAdd = () => {
    /* Dos formas válidas de modificar state:
        setCounter( counter + 1 ); */
        setCounter( (c) => c + 1 );
    }

    const handleSubstract = () => setCounter( (c) => c - 1 );

    const handleReset = () => setCounter( value );
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>RESET</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    )
}
/* Se puede usar handleAdd() en onClick solo si handleAdd devuelve 
   otra función, pues de está forma React la ejecuta en cuanto la lee. */

CounterApp.propTypes = {
    value: PropTypes.number 
}

export default CounterApp;