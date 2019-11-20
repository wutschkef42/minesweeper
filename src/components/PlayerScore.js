
import React from 'react'

const PlayerScore = ({playerScore}) => (
    <div className='player-score'>
        <p>
            score <span className='score-value'>{playerScore}</span>
        </p>
    </div>
)

export default PlayerScore