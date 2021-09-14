import { Fragment } from 'react'
import '../css/Scoreboard.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Scoreboard(props: any) { //TODO: fix type
  
	return <Fragment>
		<div className="scoreboard">
			<div>Score:{ props.score }</div>
			<div>Level: 1</div>
			<button className="scoreboard-button" onClick={(e) => {}}>Play</button>
			<button className="scoreboard-button" onClick={(e) => {}}>Restart</button>
		</div>
	</Fragment>

}

export default Scoreboard