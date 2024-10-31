import LapList from './LapList';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';
import { useEffect, useState } from 'react';

import './Timer.css';

const Timer = () => {
  const [mlSeconds, setMlSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  const formatTime = () => {
    const minutos = ('0' + (Math.floor(mlSeconds / 60000) % 60)).slice(-2);
    const seconds = ('0' + (Math.floor(mlSeconds / 1000) % 60)).slice(-2);
    const senSenconds = ('0' + (Math.floor(mlSeconds / 10) % 100)).slice(-2);

    return `${minutos}:${seconds}:${senSenconds}`;
  };

  const startTimer = (interval) => {
    return setInterval(() => {
      setMlSeconds((previMlSeconds) => previMlSeconds + 10);
    }, 10);
  };
  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = startTimer(interval);
    } else {
      interval = stopTimer(interval);
    }

    return () => stopTimer(interval);
  }, [timerOn]);
  return (
    <div className="timer-container">
      <TimerDisplay timer={formatTime()} />
      <TimerControls
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
      />
      <LapList />
    </div>
  );
};

export default Timer;
