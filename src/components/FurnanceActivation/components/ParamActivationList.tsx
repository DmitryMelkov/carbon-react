import React from 'react';
import { FurnanceActivationData } from '../../../types/FurnanceActivationTypes';
import ParamIndicator from '../../ParamIndicator/ParamIndicator';
import { furnanceActivationTooltips } from '../../../utils/tooltipTexts';
import styles from '../mnemo/FurnanceActivartionMnemo.module.scss';

interface ParamActivationListProps {
  data: FurnanceActivationData;
  id: string;
  tooltipsEnabled: boolean;
}

const ParamActivationList: React.FC<ParamActivationListProps> = ({ data, id, tooltipsEnabled }) => {
  return (
    <>
      <div className={`${styles['mnemo__param-box']} ${styles['vr']}`}>
        <div className={`${styles['mnemo__param-box-vr']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-left']}`}>ВРЛ</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура верх регенератора левый МПА${id}`}
              value={data.temperatures[`Температура верх регенератора левый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
        <div className={`${styles['mnemo__param-box-vr']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-right']}`}>ВРП</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            }  ${styles['brd-transparent']} mpa`}
          >
            <ParamIndicator
              keyName={`Температура верх регенератора правый МПА${id}`}
              value={data.temperatures[`Температура верх регенератора правый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['vd']}`}>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 9</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-left']}`}>ВДЛ</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура верх дальний левый  МПА${id}`}
              value={data.temperatures[`Температура верх дальний левый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val-p']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Давление верх дальний левый МПА${id}`}
              value={data.pressures[`Давление верх дальний левый МПА${id}`]}
              unit={'кгc/м2'}
              tooltipText={furnanceActivationTooltips.tooltipDavlenie}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 10</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-right']}`}>ВДП</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура верх дальний правый МПА${id}`}
              value={data.temperatures[`Температура верх дальний правый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val-p']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Давление верх дальний правый МПА${id}`}
              value={data.pressures[`Давление верх дальний правый МПА${id}`]}
              unit={'кгc/м2'}
              tooltipText={furnanceActivationTooltips.tooltipDavlenie}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['vb']}`}>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 11</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-left']}`}>ВБЛ</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура верх ближний левый МПА${id}`}
              value={data.temperatures[`Температура верх ближний левый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 12</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-right']}`}>ВБП</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура верх ближний правый МПА${id}`}
              value={data.temperatures[`Температура верх ближний правый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['sd']}`}>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 5</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-left']}`}>СДЛ</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура середина дальняя левый МПА${id}`}
              value={data.temperatures[`Температура середина дальняя левый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val-p']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Давление середина дальняя левый МПА${id}`}
              value={data.pressures[`Давление середина дальняя левый МПА${id}`]}
              unit={'кгc/м2'}
              tooltipText={furnanceActivationTooltips.tooltipDavlenie}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 6</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-right']}`}>СДП</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура середина дальняя правый МПА${id}`}
              value={data.temperatures[`Температура середина дальняя правый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val-p']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Давление середина дальняя правый МПА${id}`}
              value={data.pressures[`Давление середина дальняя правый МПА${id}`]}
              unit={'кгc/м2'}
              tooltipText={furnanceActivationTooltips.tooltipDavlenie}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['sb']}`}>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 7</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-left']}`}>СБЛ</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура середина ближняя левый МПА${id}`}
              value={data.temperatures[`Температура середина ближняя левый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val-p']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Давление середина ближняя левый МПА${id}`}
              value={data.pressures[`Давление середина ближняя левый МПА${id}`]}
              unit={'кгc/м2'}
              tooltipText={furnanceActivationTooltips.tooltipDavlenie}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 8</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-right']}`}>СБП</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура середина ближняя правый МПА${id}`}
              value={data.temperatures[`Температура середина ближняя правый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val-p']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Давление середина ближняя правый МПА${id}`}
              value={data.pressures[`Давление середина ближняя правый МПА${id}`]}
              unit={'кгc/м2'}
              tooltipText={furnanceActivationTooltips.tooltipDavlenie}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['nd']}`}>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 1</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-left']}`}>НДЛ</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура низ дальний левый МПА${id}`}
              value={data.temperatures[`Температура низ дальний левый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 2</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-right']}`}>НДП</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура низ дальний правый МПА${id}`}
              value={data.temperatures[`Температура низ дальний правый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['nb']}`}>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 3</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-left']}`}>НБЛ</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура низ ближний левый МПА${id}`}
              value={data.temperatures[`Температура низ ближний левый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val-p']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Давление низ ближний левый МПА${id}`}
              value={data.pressures[`Давление низ ближний левый МПА${id}`]}
              unit={'кгc/м2'}
              tooltipText={furnanceActivationTooltips.tooltipDavlenie}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-borov']}`}>Боров 8</div>
        <div className={`${styles['mnemo__param-flex']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-right']}`}>СБП</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура низ ближний правый МПА${id}`}
              value={data.temperatures[`Температура низ ближний правый МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val-p']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Давление низ ближний правый МПА${id}`}
              value={data.pressures[`Давление низ ближний правый МПА${id}`]}
              unit={'кгc/м2'}
              tooltipText={furnanceActivationTooltips.tooltipDavlenie}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['db']}`}>
        <div className={`${styles['mnemo__param-box-db']}`}>
          <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-right']}`}>ДБ</div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${styles['brd-bottom-transparent']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Температура дымовой боров МПА${id}`}
              value={data.temperatures[`Температура дымовой боров МПА${id}`]}
              unit={'°C'}
              tooltipText={furnanceActivationTooltips.tooltipTemper}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
          <div
            className={`${styles['mnemo__param']} ${styles['mnemo__param-val-vozduh']} ${
              tooltipsEnabled ? styles['tooltips-enabled'] : ''
            } mpa`}
          >
            <ParamIndicator
              keyName={`Разрежение дымовой боров МПА${id}`}
              value={data.pressures[`Разрежение дымовой боров МПА${id}`]}
              unit={'кгc/м2'}
              tooltipText={furnanceActivationTooltips.tooltipDB}
              tooltipsEnabled={tooltipsEnabled}
            />
          </div>
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['ks']}`}>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-right']}`}>КС</div>
        <div
          className={`${styles['mnemo__param']} ${styles['mnemo__param-val']} ${
            tooltipsEnabled ? styles['tooltips-enabled'] : ''
          } mpa`}
        >
          <ParamIndicator
            keyName={`Температура камера сгорания МПА${id}`}
            value={data.temperatures[`Температура камера сгорания МПА${id}`]}
            unit={'°C'}
            tooltipText={furnanceActivationTooltips.tooltipTemper}
            tooltipsEnabled={tooltipsEnabled}
          />
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['vozduh-left']}`}>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-vozduh']}`}> Воздух левый</div>
        <div
          className={`${styles['mnemo__param']} ${styles['mnemo__param-val-vozduh']} ${
            tooltipsEnabled ? styles['tooltips-enabled'] : ''
          } mpa`}
        >
          <ParamIndicator
            keyName={`Давление воздух левый МПА${id}`}
            value={data.pressures[`Давление воздух левый МПА${id}`]}
            unit={' кгс/м2'}
            tooltipText={furnanceActivationTooltips.tooltipDavlenie}
            tooltipsEnabled={tooltipsEnabled}
          />
        </div>
      </div>
      <div className={`${styles['mnemo__param-box']} ${styles['vozduh-right']}`}>
        <div className={`${styles['mnemo__param-descr']} ${styles['mnemo__param-descr-vozduh']}`}> Воздух правый</div>
        <div
          className={`${styles['mnemo__param']} ${styles['mnemo__param-val-vozduh']} ${
            tooltipsEnabled ? styles['tooltips-enabled'] : ''
          } mpa`}
        >
          <ParamIndicator
            keyName={`Давление воздух правый МПА${id}`}
            value={data.pressures[`Давление воздух правый МПА${id}`]}
            unit={' кгс/м2'}
            tooltipText={furnanceActivationTooltips.tooltipDavlenie}
            tooltipsEnabled={tooltipsEnabled}
          />
        </div>
      </div>
    </>
  );
};

export default ParamActivationList;
