import { reactorK296Tooltips } from '../../../utils/tooltipTexts';
import ParamIndicator from '../../ParamIndicator/ParamIndicator';
import styles from '../Mnemo/ReactorK296Mnemo.module.scss';

interface ReactorK296ParamProps {
  title: string;
  tooltipsEnabled: boolean;
  temper: number;
  level: number;
}

const ReactorK296param: React.FC<ReactorK296ParamProps> = ({ title, tooltipsEnabled, temper, level }) => {
  return (
    <div className={`${styles['reactor']}`}>
      <div className={`${styles['reactor-meshalka']}`}>
        <img className={`${styles['reactor-dvig']}`} src="/img/dvigatel.png" alt="reactor-dvig" />
        <div className={`${styles['reactor-dvig-platform']}`}></div>
      </div>
      <div className={`${styles['reactor-emkost']}`}>
        <div className={`${styles['mnemo__param-descr']}`}>{title}</div>
        <div
          className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
            tooltipsEnabled ? styles['tooltips-enabled'] : ''
          } mpa`}
        >
          <ParamIndicator
            keyName={'Температура реактора 45/1'}
            value={temper}
            unit={'°C'}
            tooltipText={reactorK296Tooltips.tooltipTemper}
            tooltipsEnabled={tooltipsEnabled}
          />
        </div>
        <div
          className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
            tooltipsEnabled ? styles['tooltips-enabled'] : ''
          } mpa`}
        >
          <ParamIndicator
            keyName={'Уровень реактора 45/1'}
            value={level}
            unit={'мм'}
            tooltipText={reactorK296Tooltips.tooltipUroven}
            tooltipsEnabled={tooltipsEnabled}
          />
        </div>
      </div>
      <div className={`${styles['reactor-niz']}`}></div>
    </div>
  );
};

export default ReactorK296param;
