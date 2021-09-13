// initalize a functional component
import React from 'react';

function GridSquare(props: any) {
    const classes = `grid-square color-${props.color}`
    return <div className={classes} />
}

export default GridSquare;