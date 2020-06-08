import { useState, useEffect } from 'react';

export const useTimer = (seconds: number): number => {
  const [timer, setTimer] = useState(0);
  const [sec, setSec] = useState(seconds);

  if (sec === 0) clearInterval(timer);

  useEffect(() => {
    setTimer(
      setInterval(() => {
        setSec(prev => prev - 1);
      }, 1000)
    );

    return () => {
      clearInterval(timer);
    };
  }, []);

  return sec;
};
