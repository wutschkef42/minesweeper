
import {
    BOMB,
    GAME_STATES,
    SET_GAME_STATE,
    INIT_CELL_STATE,
    CLICK_CELL,
} from '../actions'

import CONFIG from '../../config'


const initialState = {
    gameState: GAME_STATES.IDLE,
    cellState: [],
    playerScore: 0,
}

/*
** initialises grid by putting treasures and bombs inside cells
*/

const placeTreasuresAndBombs = (rows, cols) => {
    let totalPoints = 0
    let cells = new Array(rows * cols).fill(null)
    
    const sumTotalPoints = cells => 
        cells.reduce((acc, cur) => acc + cur.content, 0)
    
    // fill with random treasures
    while (totalPoints < CONFIG.MAX_SCORE + CONFIG.DIFFICULTY) {
        cells = cells.map(() => (
            {
                clicked: false,
                content: Math.floor(Math.random() * CONFIG.MAX_POINTS_PER_CELL + 1)
            })
        )
        totalPoints = sumTotalPoints(cells)
    }

    // sprinkle bombs
    for (let i = 0; i < CONFIG.BOMB_COUNT; i++) {
        let idx = Math.floor(Math.random() * CONFIG.GRID_COLS * CONFIG.GRID_ROWS)
        totalPoints -= cells[idx].content
        cells[idx].content = BOMB
    }
    return cells
}

/*
** updates click state of clicked cell 
*/

const toggleCell = (cellState, clickedIdx) => (
    cellState.map((cell, idx) => ({
        ...cell,
        clicked: idx === clickedIdx ? true : cell.clicked
    }))
)

/*
** checks if game is won | lost | active
*/

const updateGameState = (newPlayerScore, cellState, clickedIdx) => {
    if (newPlayerScore >= CONFIG.MAX_SCORE) {
        return GAME_STATES.WON
    }
    if (cellState[clickedIdx].content === BOMB) {
        return GAME_STATES.LOST
    }
    return GAME_STATES.ACTIVE
}

/*
** game state reducer
*/

const sweeperEngine = (state = initialState, action) => {
    const { cellState, playerScore } = state

    switch(action.type) {
        case SET_GAME_STATE:
            return Object.assign({}, state, {
                gameState: action.payload
            })
        case INIT_CELL_STATE:
            return Object.assign({}, state, {
                playerScore: 0,
                cellState: placeTreasuresAndBombs(CONFIG.GRID_ROWS, CONFIG.GRID_COLS)
            })
        case CLICK_CELL:
            const newCellState = toggleCell(cellState, action.payload)
            const newPlayerScore = playerScore + cellState[action.payload].content
            const newGameState = updateGameState(newPlayerScore, cellState, action.payload)
            
            return Object.assign({}, state, {
                gameState: newGameState,
                cellState: newCellState,
                playerScore: newPlayerScore,
            })
        default:
            return state
    }
}

export default sweeperEngine