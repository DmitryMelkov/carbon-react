import LevelIndicator from '../../LevelIndicator/LevelIndicator';
import styles from '../Mnemo/FurnanceCarbonizationMnemo.module.scss';

interface LevelsIndicatorsProps {
  levels: {
    [key: string]: {
      value: number;
    };
  };
}

interface LevelConfig {
  keyName: string;
  className: string;
  range: { min: number; max: number };
}

const levelConfigs: LevelConfig[] = [
  {
    keyName: 'В барабане котла',
    className: styles['mnemo__level-kotel'],
    range: { min: -200, max: 200 },
  },
  {
    keyName: 'В емкости ХВО',
    className: styles['mnemo__level-hvo'],
    range: { min: 0, max: 6000 },
  },
  {
    keyName: 'В ванне скруббера',
    className: styles['mnemo__level-scrubber'],
    range: { min: 0, max: 1000 },
  },
];

export default function LevelItems({ levels }: LevelsIndicatorsProps) {
  return (
    <>
      {levelConfigs.map(({ keyName, className, range }) => (
        <div className={className} key={keyName}>
          <LevelIndicator value={levels[keyName]?.value} range={range} threshold={25} />
        </div>
      ))}
    </>
  );
}
