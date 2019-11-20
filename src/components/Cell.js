
import React from 'react'
import '../App.css'

const Cell = ({openState, cellClick, cellIndex}) => {
    return (
        <div 
            className={openState ? 'cell open' : 'cell close'} 
            onClick={openState ? null : cellClick(cellIndex)}
    >
    </div>
    )
} 

export default Cell;