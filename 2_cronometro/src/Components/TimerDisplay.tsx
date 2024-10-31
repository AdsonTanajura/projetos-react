type TimerProps = {
  timer: string;
};

const TimerDisplay = ({ timer }: TimerProps) => {
  return <div className="timer-display">{timer}</div>;
};

export default TimerDisplay;
