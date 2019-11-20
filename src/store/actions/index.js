
/*
** action types
*/

export const SET_GAME_STATE     = 'SET_GAME_STATE'
export const INIT_CELL_STATE    = 'INIT_CELL_STATE'
export const CLICK_CELL         = 'CLICK_CELL'

/* 
** constants 
*/

export const GAME_STATES = {
    WON:    'WON',
    LOST:   'LOST',
    ACTIVE: 'ACTIVE',
    IDLE:   'IDLE',
}

export const BOMB = 0

/*
** action creators
*/

export const setGameState = gameState => ({
    type: SET_GAME_STATE,
    payload: gameState
})

export const initCellState = cellState => ({
    type: INIT_CELL_STATE,
    payload: cellState
})

export const clickCell = cellIndex => ({
    type: CLICK_CELL,
    payload: cellIndex
})
