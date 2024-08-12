import { useState } from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import GameOver from './components/GameOver';
import Log from './components/Log';
import Players from './components/Players/Players';
import { IPlayer } from './models/player';
import { ITurn } from './models/turn';
import { WINNING_COMBINATIONS } from './winningCombinations';

export type GameBoardType = (string | null)[][];

const INITIAL_GAMEBOARD: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
const INITIAL_PLAYERS: IPlayer[] = [
  { name: 'Player 1', symbol: 'X' },
  { name: 'Player 2', symbol: 'O' }
];

// Put helper functions outside of the component function, only if the don't use the state.
const getGameBoard = (turns: ITurn[]): GameBoardType => {
  const gameBoard = [...INITIAL_GAMEBOARD.map((row) => [...row])];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  }
  return gameBoard;
};

const getPlayer = (players: IPlayer[], symbol: string): string | undefined => {
  return players.find((player: IPlayer) => player.symbol === symbol)?.name;
};

const getCurrentPlayerSymbol = (turnArray: ITurn[]): string => {
  let currentPlayerSymbol = 'X';

  if (turnArray.length > 0 && turnArray[0].player === 'X') {
    currentPlayerSymbol = 'O';
  }

  return currentPlayerSymbol;
};

const getWinner = (board: GameBoardType, players: IPlayer[]): string | null | undefined => {
  let name = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = board[combination[0].row][combination[0].column];
    const secondSymbol = board[combination[1].row][combination[1].column];
    const thirdSymbol = board[combination[2].row][combination[2].column];

    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      name = getPlayer(players, firstSymbol);
    }
  }

  return name;
};

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [turns, setTurns] = useState<ITurn[]>([]);

  let gameBoard = getGameBoard(turns);
  const winner = getWinner(gameBoard, players);
  const hasDraw = turns.length === 9 && !winner;

  const handlePlayerNameChange = (symbol: string, name: string) => {
    setPlayers((prevPlayers: IPlayer[]) => {
      const updatedPlayer = prevPlayers.find((player: IPlayer) => player.symbol === symbol);
      if (updatedPlayer) {
        updatedPlayer.name = name;
        return [...prevPlayers, updatedPlayer];
      } else {
        return [...prevPlayers];
      }
    });
  };

  const handlePlayerGame = (rowIndex: number, columnIndex: number) => {
    // Objects & arrays (which technically are objects) are reference values in JavaScript/TypeScript
    // You should therefore not mutate them directly, instead create a (deep) copy first.
    setTurns((prevTurn: ITurn[]) => {
      const updatedTurn = [
        { square: { row: rowIndex, column: columnIndex }, player: getCurrentPlayerSymbol(prevTurn) },
        ...prevTurn
      ];

      return updatedTurn;
    });
  };

  const handleRematch = () => {
    gameBoard = INITIAL_GAMEBOARD;
    setTurns([]);
  };

  return (
    <main>
      <div id="game-container">
        <Players activePlayerSymbol={getCurrentPlayerSymbol(turns)} onNameChange={handlePlayerNameChange} />
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onPlayerGame={handlePlayerGame} gameBoard={gameBoard} />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
