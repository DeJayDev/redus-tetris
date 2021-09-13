import GridSquare from "./GridSquare"
import '../css/NextBlock.css'
import { Fragment } from "react"

function NextBlock(props: any) {
    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]

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
