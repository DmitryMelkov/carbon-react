//LevelIndicator.tsx
import { useEffect, useState, useMemo } from 'react';

interface LevelIndicatorProps {
  value: number;
  range: {
    min: number;
    max: number;
  };
  threshold?: number;
}

export default function LevelIndicator({ value, range, threshold = 25 }: LevelIndicatorProps) {
  const [isWarning, setIsWarning] = useState(false);
  const isValidLevel = !isNaN(value);
  const totalRange = range.max - range.min;

  const fillPercentage = useMemo(() => {
    if (!isValidLevel) return 0;
    const raw = ((value - range.min) / totalRange) * 100;
    return Math.min(Math.max(raw, 0), 100);
  }, [value, range, totalRange, isValidLevel]);

  useEffect(() => {
    if (isValidLevel && fillPercentage < threshold) {
      const interval = setInterval(() => setIsWarning((prev) => !prev), 500);
      return () => clearInterval(interval);
    }
    setIsWarning(false);
  }, [fillPercentage, isValidLevel, threshold]);

  const backgroundColor = !isValidLevel ? 'transparent' : isWarning ? 'red' : '#57b7f7';

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        bottom: '0',
        height: `${fillPercentage}%`,
        backgroundColor,
        transition: 'background-color 0.5s ease-in-out, height 0.5s ease-in-out',
      }}
    />
  );
}
