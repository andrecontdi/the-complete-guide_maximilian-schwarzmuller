import { useRef, useState } from 'react';
import ResultModal, { ResultModalRef } from './ResultModal';

interface TimeChallengeProps {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({ title, targetTime }: TimeChallengeProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(targetTime * 1000);
  const dialog = useRef<ResultModalRef>(null);
  const timer = useRef<number>(0);

  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  const handleStart = () => {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime: number) => prevRemainingTime - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current?.open();
    clearInterval(timer.current);
  };

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current?.open();
  }

  const handleReset = () => {
    setRemainingTime(targetTime * 1000);
  };

  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button>
        <p className={timerIsActive ? 'active' : ''}>
          Time {timerIsActive ? 'is running out' : 'is inactive'} {timerIsActive}
        </p>
      </section>
      <ResultModal onReset={handleReset} ref={dialog} remainingTime={remainingTime} targetTime={targetTime} />
    </>
  );
};

export default TimerChallenge;
