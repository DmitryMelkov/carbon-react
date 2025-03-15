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

interface KranItemsProps {
  data: Record<string, boolean | number>;
}

const KranItems: React.FC<KranItemsProps> = ({ data }) => {
  // Функция для преобразования значений кранов
  const getKranValue = (value: boolean | number): number => {
    if (typeof value === 'boolean') {
      return value ? 10 : 0;
    }
    return parseFloat(String(value));
  };

  const kranConfigs: KranConfig[] = [
    {
      key: 'Индикация паротушения',
      size: { width: 40, height: 32 },
      valueKey: 'Индикация паротушения',
      orientation: 'horizontal',
      className: 'kran-1',
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