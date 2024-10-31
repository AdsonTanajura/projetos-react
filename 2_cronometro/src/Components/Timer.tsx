import LapList from './LapList';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';

const Timer = () => {
  return (
    <div className="timer-container">
      <TimerDisplay />
      <TimerControls />
      <LapList />
    </div>
  );
};

export default Timer;
