import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import '../css/MessagePopup.css'
import { RootState } from '../reducers'

function MessagePopup() {
    const isRunning = useSelector((state: RootState) => state.game.isRunning)
    const gameOver = useSelector((state: RootState) => state.game.gameOver)

    let message = ''
    let isHidden = 'hidden'
  
    if (gameOver) {
        message = 'Game Over'
        isHidden = ''
    } else if (!isRunning) {
        message = 'Paused'
        isHidden = ''
    }

    return <Fragment>
        <div className={`message-popup ${isHidden}`}>
            <h1>Hey!</h1>
            <p>{message}</p>
        </div>
    </Fragment>
}

export default MessagePopup
