import React from 'react';
import styles from '../FurnanceCarbonizationMnemo.module.scss';

interface MnemoGifsProps {
  isGorelkaPowerGreaterThan5: boolean;
  isVacuumNegative: boolean;
}

const MnemoGifs: React.FC<MnemoGifsProps> = ({ isGorelkaPowerGreaterThan5, isVacuumNegative }) => {
  return (
    <>
      {/* GIF для мощности горелки */}
      {isGorelkaPowerGreaterThan5 && (
        <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-1']}`}>
          <img src="/img/fire-gif.gif" alt="Горелка" />
        </div>
      )}

      {/* GIF для вентилятора с анимацией */}
      <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-2']}`}>
        <img
          style={{ animationPlayState: isVacuumNegative ? 'running' : 'paused' }}
          src="/img/ventilator.png"
          alt="Вентилятор"
        />
      </div>

      {/* GIF для пара */}
      {isVacuumNegative && (
        <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-3']}`}>
          <img src="/img/par.gif" alt="Пар" />
        </div>
      )}

      {/* Статичные вентиляторы */}
      <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-4']}`}>
        <img src="/img/ventilator.png" alt="Вентилятор" />
      </div>
      <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-5']}`}>
        <img src="/img/ventilator.png" alt="Вентилятор" />
      </div>
    </>
  );
};

export default MnemoGifs;