import React, { useEffect, useState } from 'react';
import styles from './kranComponent.module.scss';

interface KranProps {
  size?: { width: number; height: number };
  status?: boolean;
  value?: number;
  threshold?: number;
  reverseColorLogic?: boolean;
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

const Kran: React.FC<KranProps> = ({
  size = { width: 40, height: 34 },
  status,
  value,
  threshold = 5,
  reverseColorLogic = false,
  orientation = 'vertical',
  className = '',
}) => {
  const [color, setColor] = useState<string>('red');

  useEffect(() => {
    if (status !== undefined) {
      // Логика для булевых значений
      setColor(reverseColorLogic ? (status ? 'red' : 'green') : status ? 'green' : 'red');
    } else if (value !== undefined) {
      // Логика для числовых значений
      setColor(reverseColorLogic ? (value > threshold ? 'red' : 'green') : value > threshold ? 'green' : 'red');
    }
  }, [status, value, threshold, reverseColorLogic]);

  const transformStyle = orientation === 'vertical' ? { transform: 'rotate(90deg)' } : {};

  const triangleHeight = size.height / 2;

  // Проверяем, существуют ли переданные классы в styles
  const computedClassName = className && styles[className] ? styles[className] : '';

  return (
    <div
      className={`${styles['kran']} ${computedClassName}`}
      style={{
        ...transformStyle,
        width: size.width,
        height: size.height,
      }}
    >
      <div className={styles['mnemo__kran-box']}>
        <div
          className={styles['mnemo__triangle1']}
          style={{
            borderTop: `${triangleHeight}px solid transparent`,
            borderLeft: `${size.width / 2}px solid ${color}`,
            borderBottom: `${triangleHeight}px solid transparent`,
          }}
        />
        <div
          className={styles['mnemo__triangle2']}
          style={{
            borderTop: `${triangleHeight}px solid transparent`,
            borderRight: `${size.width / 2}px solid ${color}`,
            borderBottom: `${triangleHeight}px solid transparent`,
          }}
        />
      </div>
    </div>
  );
};

export default Kran;