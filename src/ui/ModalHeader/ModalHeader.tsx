import React from 'react';
import styles from './ModalHeader.module.scss';
import { MdClose } from 'react-icons/md';
import BtnDefault from '../BtnDefault/BtnDefault';

interface ModalHeaderProps {
  title: string;
  onRequestClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onRequestClose }) => {
  return (
    <div className={`${styles['modal__header']}`}>
      {/* Заголовок модального окна */}
      <h2 className={`${styles['modal__title']} title-reset`}>{title}</h2>

      {/* Кнопка закрытия модального окна */}
      <BtnDefault
        icon={<MdClose />}
        onClick={onRequestClose}
        className={styles.closeButton}
        iconSize="25px"
      />
    </div>
  );
};

export default ModalHeader;