// KranItems.tsx
import React from 'react';
import Kran from '../../Kran/kranComponent';

interface KranConfig {
  key: string;
  size: { width: number; height: number };
  valueKey: string;
  orientation: 'horizontal' | 'vertical';
  className: string;
  threshold?: number;
}

interface KranListProps {
  data: Record<string, boolean | number>;
}

const KranItems: React.FC<KranListProps> = ({ data }) => {
  // Функция для преобразования значений кранов
  const getKranValue = (value: boolean | number): number => {
    if (typeof value === 'boolean') {
      return value ? 10 : 0;
    }
    return parseFloat(String(value));
  };

  const kranConfigs: KranConfig[] = [
    {
      key: 'ИМ1 скруббер',
      size: { width: 30, height: 22 },
      valueKey: 'ИМ1 скруббер',
      orientation: 'horizontal',
      className: 'kran-1',
    },
    {
      key: 'ИМ2 ХВО',
      size: { width: 26, height: 18 },
      valueKey: 'ИМ2 ХВО',
      orientation: 'horizontal',
      className: 'kran-2',
    },
    {
      key: 'ИМ3 аварийный сброс',
      size: { width: 30, height: 22 },
      valueKey: 'ИМ3 аварийный сброс',
      orientation: 'horizontal',
      className: 'kran-3',
    },
    {
      key: 'ИМ4 пар в отделение активации',
      size: { width: 30, height: 22 },
      valueKey: 'ИМ4 пар в отделение активации',
      orientation: 'horizontal',
      className: 'kran-4',
    },
    {
      key: 'ИМ5 котел-утилизатор',
      size: { width: 30, height: 22 },
      valueKey: 'ИМ5 котел-утилизатор',
      orientation: 'horizontal',
      className: 'kran-5',
      threshold: 5,
    },
  ];

  return (
    <>
      {kranConfigs.map((config) => (
        <Kran
          key={config.key}
          size={config.size}
          value={getKranValue(data[config.valueKey])}
          orientation={config.orientation}
          className={config.className}
          threshold={config.threshold}
        />
      ))}
    </>
  );
};

export default KranItems;