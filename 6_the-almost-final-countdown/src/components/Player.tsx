import { useRef, useState } from 'react';

const Player = () => {
  const playerName = useRef<HTMLInputElement>(null);
  const [player, setPlayer] = useState<string>();

  const handleClick = () => {
    if (!playerName.current) return;

    setPlayer(playerName.current.value);
    playerName.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {player ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};
export default Player;
