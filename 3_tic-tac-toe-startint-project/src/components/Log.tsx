import { ITurn } from '../models/turn';

interface LogProps {
  turns: ITurn[];
}

export default function Log({ turns }: LogProps) {
  const logTurns = turns.map((turn: ITurn) => (
    <li key={`${turn.square.row}${turn.square.column}`}>
      {turn.player} selected {turn.square.row},{turn.square.column}
    </li>
  ));
  return <ol id="log">{logTurns}</ol>;
}
