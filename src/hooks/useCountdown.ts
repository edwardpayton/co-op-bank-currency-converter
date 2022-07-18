import { useEffect, useState, useCallback, useRef } from 'react';

export default function useCountdown(time: number) {
  const [currentTime, setCurrentTime] = useState(time);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef(0);

  const startTimer = () => {
    setCurrentTime(time);
    setFinished(false);
  };

  const resetTimer = () => {
    window.clearTimeout(timerRef.current);
    setCurrentTime(0);
    setFinished(false);
  };

  const count = useCallback(() => {
    if (finished) {
      return;
    }
    if (currentTime > 0) {
      timerRef.current = window.setTimeout(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
    } else {
      setFinished(true);
    }
  }, [currentTime, finished]);

  useEffect(() => {
    count();
  }, [count]);

  return { currentTime, startTimer, resetTimer, finished };
}
