import { IPlayer } from '../../models/player';
import Player from './Player/Player';

import './Players.css';

interface PlayersProps {
  activePlayerSymbol: string;
  onNameChange: CallableFunction;
}

const INITIAL_PLAYERS: IPlayer[] = [
  { name: 'Player 1', symbol: 'X' },
  { name: 'Player 2', symbol: 'O' }
];

export default function Players({ activePlayerSymbol, onNameChange }: PlayersProps) {
  const players = INITIAL_PLAYERS.map((player: IPlayer) => {
    const isActive = activePlayerSymbol === player.symbol;

    return (
      <Player
        key={player.name}
        name={player.name}
        symbol={player.symbol}
        isActive={isActive}
        onNameChange={onNameChange}></Player>
    );
  });

  return (
    <ol id="players" className="highlight-player">
      {players}
    </ol>
  );
}
