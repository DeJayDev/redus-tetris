/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment } from 'react'
import '../css/Controls.css'
import { useDispatch, useSelector } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'
import { RootState } from '../reducers'


function Controls() {
    const dispatch = useDispatch()
    const isRunning = useSelector((state: RootState) => state.game.isRunning)
    const gameOver = useSelector((state: RootState) => state.game.gameOver)

    return <Fragment>
        <div className="controls">
            {/* left */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveLeft())
                }}>Left</button>

            {/* right */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveRight())
                }}>Right</button>

            {/* rotate */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(rotate())
                }}>Rotate</button>

            {/* down */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveDown())
                }}>Down</button>

        </div>
    </Fragment>
}

export default Controls
