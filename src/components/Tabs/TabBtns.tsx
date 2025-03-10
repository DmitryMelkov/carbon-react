import BtnDefault from '../BtnDefault/BtnDefault';

interface TabBtnsProps {
  active: string;
  onChange: (value: string) => void;
}

const TabBtns: React.FC<TabBtnsProps> = ({ active, onChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <BtnDefault isActive={active === 'ПК1'} onClick={() => onChange('ПК1')}>
        ПК1
      </BtnDefault>
      <BtnDefault isActive={active === 'ПК2'} onClick={() => onChange('ПК2')}>
        ПК2
      </BtnDefault>
      <BtnDefault isActive={active === 'Сушилка1'} onClick={() => onChange('Сушилка1')}>
        Сушилка1
      </BtnDefault>
      <BtnDefault isActive={active === 'Сушилка2'} onClick={() => onChange('Сушилка2')}>
        Сушилка2
      </BtnDefault>
    </div>
  );
};

export default TabBtns;
