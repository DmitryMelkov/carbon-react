import styles from '../mnemo/FurnanceActivartionMnemo.module.scss';

interface MnemoGifsProps {
  isPressureAirRight: boolean;
}

const MnemoGifs: React.FC<MnemoGifsProps> = ({ isPressureAirRight }) => {
  return (
    <>
      <div className={`${styles['mnemo__gif']} ${styles['mnemo__gif-2']}`}>
        <img
          style={{ animationPlayState: isPressureAirRight ? 'running' : 'paused' }}
          src="/img/ventilator.png"
          alt="Вентилятор"
        />
      </div>
    </>
  );
};

export default MnemoGifs;
