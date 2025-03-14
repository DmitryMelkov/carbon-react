import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './TroubleshootingModal.module.scss'; 
import ModalHeader from '../../../../ui/ModalHeader/ModalHeader';

Modal.setAppElement('#root'); // Указываем корневой элемент приложения

interface TroubleshootingItem {
  cause: string;
  action: string;
}

interface TroubleshootingModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  data: {
    title: string;
    troubleshootingItems: TroubleshootingItem[];
  };
}

const TroubleshootingModal: React.FC<TroubleshootingModalProps> = ({ isOpen, onRequestClose, data }) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Функция для переключения активного элемента
  const toggleItem = (index: number) => {
    setActiveItemIndex(activeItemIndex === index ? null : index);
  };

  // Функция для форматирования текста действия
  const formatActionText = (text: string): string => {
    if (text.includes('\\l')) {
      const firstMarkerIndex = text.indexOf('\\l');
      const prefix = text.substring(0, firstMarkerIndex).trim();
      const listPart = text.substring(firstMarkerIndex);

      const listItems = listPart.split('\\l').filter((item) => item.trim() !== '');

      let formatted = '';
      if (prefix) {
        formatted += prefix.replace(/\n/g, '<br>') + '<br>';
      }
      formatted += `<ul>${listItems.map((item) => `<li>${item.trim()}</li>`).join('')}</ul>`;
      return formatted;
    }
    return text.replace(/\n/g, '<br>');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={data.title}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {/* Заголовок модального окна */}
      <ModalHeader title={data.title} onRequestClose={onRequestClose} />

      {/* Основное содержимое модального окна */}
      <div className={styles.body}>
        <h3 className={styles.troubleshootingTitle}>Возможные причины и действия по устранению неполадок</h3>
        <p className={styles.troubleshootingDescription}>Нажмите на причину, чтобы прочитать пошаговые действия</p>

        {/* Список причин и действий */}
        {data.troubleshootingItems.map((item, index) => (
          <div key={index}>
            {/* Причина */}
            <div className={`${styles.troubleshootingItem} ${styles.cause}`} onClick={() => toggleItem(index)}>
              <span className={styles.label}>Причина:</span> {item.cause}
            </div>

            {/* Действие (показывается только для активного элемента) */}
            {activeItemIndex === index && (
              <div
                className={`${styles.troubleshootingItem} ${styles.action}`}
                dangerouslySetInnerHTML={{ __html: formatActionText(item.action) }}
              />
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default TroubleshootingModal;
