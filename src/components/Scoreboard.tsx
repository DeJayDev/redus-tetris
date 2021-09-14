import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pause, restart, resume } from '../actions'
import '../css/Scoreboard.css'
import { RootState } from '../reducers'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Scoreboard(props: any) { //TODO: fix type

    const dispatch = useDispatch()
    const game = useSelector((state: RootState) => state.game)
    const { score, isRunning, gameOver } = game

    return <Fragment>
        <div className="scoreboard">
            <div>Score:{ score }</div>
            <div>Level: 1</div>
            <button className="scoreboard-button" onClick={(e) => {
                if (gameOver) return
                if (isRunning) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
            }}>{isRunning ? 'Pause' : 'Play'}</button>
            <button className="scoreboard-button" onClick={(e) => {
                dispatch(restart())
            }}>Restart</button>
        </div>
    </Fragment>

}

export default Scoreboard