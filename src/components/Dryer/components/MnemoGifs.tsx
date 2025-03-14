import styles from '../Mnemo/DryerMnemo.module.scss'

interface MnemoGifsProps {
  isGorelkaPowerGreaterThan5: boolean;
  isTemperGasExhaust: boolean;
}

const MnemoGifs: React.FC<MnemoGifsProps> = ({isGorelkaPowerGreaterThan5, isTemperGasExhaust}) => {
  return (
    <>
      {isGorelkaPowerGreaterThan5 && (
        <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-1']}`}>
          <img src="/img/fire-gif.gif" alt="Горелка" />
        </div>
      )}

      {isTemperGasExhaust && (
        <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-2']}`}>
          <img src="/img/par.gif" alt="Пар" />
        </div>
      )}

      <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-3']}`}>
        <img
          style={{ animationPlayState: isTemperGasExhaust ? 'running' : 'paused' }}
          src="/img/ventilator.png"
          alt="Вентилятор"
        />
      </div>

      <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-4']}`}>
        <img
          style={{ animationPlayState: isTemperGasExhaust ? 'running' : 'paused' }}
          src="/img/ventilator.png"
          alt="Вентилятор"
        />
      </div>
      {isGorelkaPowerGreaterThan5 && (
        <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-5']}`}>
          <img src="/img/pipeline_top_coal.gif" alt="img" />
        </div>
      )}
      {isGorelkaPowerGreaterThan5 && (
        <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-6']}`}>
          <img src="/img/pipeline_middle_coal.gif" alt="img" />
        </div>
      )}
      {isGorelkaPowerGreaterThan5 && (
        <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-7']}`}>
          <img src="/img/pipeline_flow_coal.gif" alt="img" />
        </div>
      )}
      {isGorelkaPowerGreaterThan5 && (
        <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-8']}`}>
          <img src="/img/pipeline_middle_coal.gif" alt="img" />
        </div>
      )}
    </>
  );
};

export default MnemoGifs;
