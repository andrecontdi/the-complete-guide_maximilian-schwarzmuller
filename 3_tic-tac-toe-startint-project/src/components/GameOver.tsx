import { MouseEventHandler } from 'react';

interface GameOverPros {
  winner: string | null | undefined;
  onRematch: MouseEventHandler<HTMLButtonElement>;
}
export default function GameOver({ winner, onRematch }: GameOverPros) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={onRematch}>REMATCH!</button>
      </p>
    </div>
  );
}
