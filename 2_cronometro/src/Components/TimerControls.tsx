type TimerControlsProps = {
  onStart: () => void;
  onStop: () => void;
};

const TimerControls = ({ onStart, onStop }: TimerControlsProps) => {
  return (
    <div className="timer-controls">
      <button onClick={onStart}>Iniciar</button>
      <button onClick={onStop}>Zerar</button>
    </div>
  );
};

export default TimerControls;
