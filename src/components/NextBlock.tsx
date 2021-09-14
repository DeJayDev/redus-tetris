import { Fragment } from 'react'
import '../css/NextBlock.css'
import GridSquare from './GridSquare'
import { useSelector } from 'react-redux'
import { shapes } from '../utils'
import { RootState } from '../reducers'

function NextBlock() {
    const nextShape = useSelector((state: RootState) => state.game.nextShape)
    const box = shapes[nextShape][0]

    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square} />
        })
    })

    return <Fragment>
        <div className="next-block">
            {grid}
        </div>
    </Fragment>

}

export default NextBlock
