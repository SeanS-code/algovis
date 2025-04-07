import React from "react"

const Tile = ({ name }) => {
    const tileStyle = {
        width: "100px",
        padding: "50px",
        border: "1px solid black",
        textAlign: "center",
    }

    return (
        <div style={tileStyle}>{name}</div>
    )
}

export default Tile