
import React from 'react'
import { connect } from 'react-redux'
import { clickCell, GAME_STATES } from '../store/actions'
import ButtonNewGame from './ButtonNewGame'
import GameOver from './GameOver'
import Grid from './Grid'

const MineSweeper = ({playerScore, cellState, gameState, onCellClick}) => {
    switch (gameState) {
        case GAME_STATES.IDLE:
            return (
                <ButtonNewGame />
            )
        case GAME_STATES.WON:
        case GAME_STATES.LOST:
            return (
                <GameOver 
                    gameState={gameState}
                    playerScore={playerScore}
                />
            )
        default:
            return (    
                <Grid
                    cellState={cellState}
                    playerScore={playerScore}
                    cellClickHandler={onCellClick}
                />
            )    
    }
}
           
const mapStateToProps = state => ({
    playerScore: state.playerScore,
    cellState: state.cellState,
    gameState: state.gameState,
})

const mapDispatchToProps = dispatch => {
    return {
        onCellClick: idx => () => dispatch(clickCell(idx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MineSweeper)