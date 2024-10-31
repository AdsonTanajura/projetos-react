type TimerControlsProps = {
  onStart: () => void;
  onStop: () => void;
  timerOn: boolean;
  reset: () => void;
  onlap: () => void;
};

const TimerControls = ({
  onStart,
  onStop,
  timerOn,
  reset,
  onlap,
}: TimerControlsProps) => {
  return (
    <div className="timer-controls">
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={onlap}>Volta</button>}
      <button onClick={reset}>Zerar</button>
    </div>
  );
};

export default TimerControls;
