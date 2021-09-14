import { Fragment } from 'react'
import '../css/Controls.css'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'
import { RootState } from '../reducers'


function Controls(props: any) {
    const dispatch = useDispatch()
    const isRunning = useSelector((state: RootState) => state.game.isRunning)

    return <Fragment>
        <div className="controls">
            {/* left */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveLeft())
            }}>Left</button>

            {/* right */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveRight())
            }}>Right</button>

            {/* rotate */}
            <button className="control-button" onClick={(e) => {
                dispatch(rotate())
            }}>Rotate</button>

            {/* down */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveDown())
            }}>Down</button>

        </div>
    </Fragment>
}

export default Controls
