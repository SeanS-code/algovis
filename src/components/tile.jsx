import React from "react"

import { Link } from "react-router"

const Tile = ({ name, attr }) => {
    const tileStyle = {
        display: 'flex',
        width: '150px',
        padding: "50px",
        border: "1px solid black",
        textAlign: "center",
    }

    return (
        <Link to={`/${attr}`} style={tileStyle}>{name}</Link>
    )
}

export default Tile