'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ target, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(progress * target));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}
