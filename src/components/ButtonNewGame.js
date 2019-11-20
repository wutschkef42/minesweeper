
import React from 'react'
import { connect } from 'react-redux'
import { 
    initCellState, 
    setGameState, 
    GAME_STATES } 
from '../store/actions'

const ButtonNewGame = ({onInitGame, onStartGame}) => {
    const restartGame = () => {
        onInitGame()
        onStartGame()
    }

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
            onClick={restartGame}        
            className='btn-start-game'
        >
            new game
        </a>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onInitGame: () => dispatch(initCellState()),
        onStartGame: () => dispatch(setGameState(GAME_STATES.ACTIVE))
    }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNewGame);