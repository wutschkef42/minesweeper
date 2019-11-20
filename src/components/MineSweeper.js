
import React from 'react'
import { connect } from 'react-redux'
import { 
    clickCell, 
    initCellState, 
    setGameState, 
    GAME_STATES
} from '../store/actions'
import ButtonNewGame from './ButtonNewGame'
import GameOver from './GameOver'
import Grid from './Grid'

const MineSweeper = ({playerScore, cellState, gameState, onCellClick}) => {
    if (gameState === GAME_STATES.IDLE) {
        return (
            <ButtonNewGame />
        )
    }
    if ( gameState === GAME_STATES.WON 
        || gameState === GAME_STATES.LOST) {
        return (
            <GameOver 
                gameState={gameState}
                playerScore={playerScore}
            />
        )
    }
    return (    
        <Grid
            cellState={cellState}
            playerScore={playerScore}
            cellClickHandler={onCellClick}
        />
    )    
}
           
const mapStateToProps = state => ({
    playerScore: state.playerScore,
    cellState: state.cellState,
    gameState: state.gameState,
})

const mapDispatchToProps = dispatch => {
    return {
        onCellClick: idx => () => dispatch(clickCell(idx)),
        onStartGame: () => dispatch(setGameState(GAME_STATES.ACTIVE)),
        onInitGame: () => dispatch(initCellState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MineSweeper)