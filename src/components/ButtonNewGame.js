
import React from 'react'
import { connect } from 'react-redux'
import { 
    initCellState, 
    setGameState, 
    GAME_STATES } 
from '../store/actions'

const ButtonNewGame = ({onStart}) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
        onClick={onStart}
        className='btn-start-game'
    >
        NEW GAME
    </a>
)

const mapDispatchToProps = dispatch => {
    return {
        onStart: () => dispatch(initCellState()) && dispatch(setGameState(GAME_STATES.ACTIVE))
    }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNewGame)