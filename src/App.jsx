import './App.css'
import Player from './components/Player/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialPlayerName="Player 1" symbol="X" />
          <Player initialPlayerName="Player 2" symbol="O" />
        </ol>

        GAME BOARD
      </div>

      {/* <div id="game-board">
      GAME BOARD
      </div> */}

      <div id="game-log">
        GAME LOG
      </div>

    </main>
  );
}

export default App
