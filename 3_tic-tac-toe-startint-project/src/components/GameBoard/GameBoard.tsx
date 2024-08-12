import { GameBoardType } from '../../App';

interface GameBoardProps {
  gameBoard: GameBoardType;
  onPlayerGame: CallableFunction;
}

export default function GameBoard({ gameBoard, onPlayerGame }: GameBoardProps) {
  const board = gameBoard.map((row: (string | null)[], rowIndex: number) => (
    <li key={rowIndex}>
      <ol>
        {row.map((columnValue: string | null, columnIndex: number) => (
          <li key={columnIndex}>
            <button onClick={() => onPlayerGame(rowIndex, columnIndex)} disabled={columnValue !== null}>
              {columnValue}
            </button>
          </li>
        ))}
      </ol>
    </li>
  ));

  return <ol id="game-board">{board}</ol>;
}
