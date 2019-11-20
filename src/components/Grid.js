
import React, { Fragment } from 'react'
import Cell from './Cell'
import SolverCell from './SolverCell'
import PlayerScore from './PlayerScore'
import CONFIG from '../config'

const Grid = ({cellState, playerScore, cellClickHandler}) => {
    const solverBottomFill = new Array(CONFIG.GRID_ROWS).fill(null)
    
    return (
        <div>
            <PlayerScore playerScore={playerScore}/>
            <div className='grid'>
                {
                    cellState.map((cell, i) => {
                        if (i !== 0 && (i + 1) % (CONFIG.GRID_ROWS ) === 0) {
                            return (
                                <Fragment key={i}>
                                    <Cell 
                                        openState={cell.clicked} 
                                        cellClick={cellClickHandler} 
                                        cellIndex={i}
                                        content={cell.content}
                                    />
                                    <SolverCell 
                                        cellState={cellState} 
                                        isRow={true} 
                                        idx={i}
                                    />
                                </Fragment>
                            )
                        }
                        return (
                            <Cell 
                                openState={cell.clicked} 
                                cellClick={cellClickHandler} 
                                cellIndex={i}
                                content={cell.content}
                                key={i}
                            />
                        )
                    })
                }
                {
                    solverBottomFill.map((_, i) => (
                        <SolverCell 
                            isRow={false}
                            idx={i}
                            key={i} 
                            cellState={cellState}
                        />)
                    )
                }
            </div>
        </div>
    )
}

export default Grid