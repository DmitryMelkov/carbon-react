import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ModalHeader from '../../../../ui/ModalHeader/ModalHeader';
import styles from './TroubleshootingModal.module.scss';

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
      open={isOpen}
      onClose={onRequestClose}
      aria-labelledby="troubleshooting-modal-title"
      aria-describedby="troubleshooting-modal-description"
    >
      <Box className={styles.modal}>
        {/* Заголовок модального окна */}
        <ModalHeader title={data.title} onRequestClose={onRequestClose} />

        {/* Основное содержимое модального окна */}
        <Box className={styles.modal__body}>
          <Typography variant="h6" className={styles.modal__title}>
            Возможные причины и действия по устранению неполадок
          </Typography>
          <Typography variant="body1" className={styles.modal__description}>
            Нажмите на причину, чтобы прочитать пошаговые действия
          </Typography>

          {/* Список причин и действий */}
          {data.troubleshootingItems.map((item, index) => (
            <Box key={index} className={styles.modal__item}>
              {/* Причина */}
              <Box
                className={`${styles.modal__cause} ${activeItemIndex === index ? styles.modal__cause_active : ''}`}
                onClick={() => toggleItem(index)}
                sx={{ cursor: 'pointer' }}
              >
                <Typography variant="body1">
                  <span className={styles.modal__label}>Причина:</span> {item.cause}
                </Typography>
              </Box>

              {/* Действие (показывается только для активного элемента) */}
              {activeItemIndex === index && (
                <Box
                  className={styles.modal__action}
                  dangerouslySetInnerHTML={{ __html: formatActionText(item.action) }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default TroubleshootingModal;