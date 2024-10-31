import LapList from './LapList';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';

import './Timer.css';

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
