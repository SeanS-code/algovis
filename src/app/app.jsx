import React from 'react'

import Tile from "../components/tile.jsx"

function App() {
  /*const titleStyle = {
    color: "blue",
  }*/

  return (
    <>
      <h1>Algo<span>vis</span></h1>
      
      <Tile 
        name="B-DFS"
      />
      <Tile 
        name="BST"
      />
      <Tile 
        name="Backtracking"
      />
    </>
  )
}

export default App
