import GridSquare from './GridSquare'
import '../css/GridBoard.css'
import { useSelector } from 'react-redux'

function GridBoard(props: any) {

	const grid: any[] = []; // TODO: Address this any type

	for (let row = 0; row < 18; row++) {
		grid.push([])
		for (let col = 0; col < 10; col++) {
			grid[row].push(<GridSquare key={`${col}${row}`} />)
		}
	}

	return (
		<div className="grid-board">
			{grid}
		</div>
	)

}

export default GridBoard