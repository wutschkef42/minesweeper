
import React from 'react'
import ButtonNewGame from './ButtonNewGame'
import { GAME_STATES } from '../store/actions'

const GameOver = ({playerScore, gameState}) => {
    const message = gameState === GAME_STATES.WON
        ? 'Congratulations, you WIN with ' + playerScore + ' points!'
        : 'You touched a bomb, you LOSE with ' + playerScore + ' points!'

    return (
        <div>
            <p className='message'>{ message }</p>
            <ButtonNewGame />
        </div>
    )
}

export default GameOver