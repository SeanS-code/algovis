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
        attr="bdfs"
      />
      <Tile 
        name="BST"
        attr="bst"
      />
      <Tile 
        name="Backtracking"
        attr="bt"
      />
    </>
  )
}

export default App
