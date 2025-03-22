import './App.css';

import Tile from './component/tiles'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Algorithm Visualizer</h1>
        <p>Putting an image to Coding Algorithms</p>

        <Tile>Hash</Tile>
      </header>
    </div>
  );
}

export default App;
