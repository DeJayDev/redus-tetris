import '../css/GridSquare.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GridSquare(props: any) {
    const classes = `grid-square color-${props.color}`
    return <div className={classes} />
}

export default GridSquare