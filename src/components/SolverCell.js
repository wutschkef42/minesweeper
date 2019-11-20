
import React from 'react'
import CONFIG from '../config'
import { BOMB } from '../store/actions'

const calcRowMetrics = (idx, cellState) => {
    const rowCells = cellState.slice(idx - CONFIG.GRID_ROWS + 1, idx + 1)
    
     return rowCells.reduce((acc, cur) => ({
        pointSum: acc.pointSum + cur.content,
        bombCount: cur.content === BOMB ? acc.bombCount + 1 : acc.bombCount
    }), { pointSum: 0, bombCount: 0 })
}

const calcColMetrics = (idx, cellState) => {
    let pointSum = 0
    let bombCount = 0

    cellState.forEach((cur, curIdx) => {
        if (curIdx % CONFIG.GRID_ROWS === idx) {
            pointSum += cur.content
        }
        if (curIdx % CONFIG.GRID_ROWS === idx && cur.content === BOMB) {
            bombCount += 1
        } 
    })
    
    return { pointSum, bombCount }
}

const SolverCell = ({isRow, idx, cellState}) => {
    const metrics = isRow ? calcRowMetrics(idx, cellState) : calcColMetrics(idx, cellState)
    return (
        <div
            className='cell solver'
        >    
            <span>{metrics.pointSum} - {metrics.bombCount}</span>
        </div>
    )
}

export default SolverCell