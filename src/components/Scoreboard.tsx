import { Fragment } from "react";
import '../css/Scoreboard.css'

function Scoreboard(props: any) {
  
    return <Fragment>
        <div className="scoreboard">
            <div>Score:{ props.score }</div>
            <div>Level: 1</div>
            <button className="scoreboard-button" onClick={(e) => {}}>Play</button>
            <button className="scoreboard-button" onClick={(e) => {}}>Restart</button>
        </div>
    </Fragment>

}

export default Scoreboard;