
import React from 'react'

const Counter = ({value,increment,decrement}) => {
    return (
        <div style={{textAlign : 'center'}}>
            <h1>Counter </h1>
            <span>{value}</span>
            <button onClick={ increment} > + </button>
            <button onClick= { decrement}>- </button>
        </div>
    )}


export default Counter;
