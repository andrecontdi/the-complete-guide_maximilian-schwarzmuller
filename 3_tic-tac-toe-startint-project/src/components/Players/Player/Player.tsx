import { ChangeEvent, useState } from 'react';
import './Player.css';

interface PlayerProps {
  name: string;
  symbol: string;
  isActive: boolean;
  onNameChange: CallableFunction;
}

export default function Player({ name, symbol, isActive, onNameChange }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [player, setPlayer] = useState(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayer(event.target.value);
  };

  const playerName = isEditing ? (
    <input type="text" placeholder={player} value={player} onChange={handleChange} required />
  ) : (
    <span className="player-name">{player}</span>
  );
  const buttonText = isEditing ? 'Save' : 'Edit';

  const handleEdit = () => {
    // DON'T
    // If your new state depends on your previous value, you should not update the state like this.
    // setIsEditing(!isEditing);

    // DO
    // Instead, pass a function to your state updating function
    // This will always get the latest state value.
    setIsEditing((editing: boolean) => !editing);

    if (isEditing) {
      onNameChange(symbol, player);
    }

    // States updates are not performed instantly but at some point in the future (when React has time for it).
    // In most cases, those states updates of course are executed almost instantly.
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{buttonText}</button>
    </li>
  );
}
