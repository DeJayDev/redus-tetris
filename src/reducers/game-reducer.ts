import { GAME_OVER, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, PAUSE, RESTART, RESUME, ROTATE } from '../actions'
import { defaultState, nextRotation, canMoveTo } from '../utils'

const gameReducer = (state = defaultState(), action: any) => { // TODO: Review this any
    switch (action.type) {
    case ROTATE:
        // eslint-disable-next-line no-case-declarations
        const newRotation = nextRotation(shape, rotation)
        if (canMoveTo(shape, grid, x, y, newRotation)) {
	       return { ...state, rotation: newRotation }
        }
        return state
    case MOVE_RIGHT:
        return state

    case MOVE_LEFT:
        return state

    case MOVE_DOWN:
        return state

    case RESUME:
        return state

    case PAUSE:
        return state

    case GAME_OVER:
        return state

    case RESTART:
        return state

    default:
        return state
    
    }
}

export default gameReducer