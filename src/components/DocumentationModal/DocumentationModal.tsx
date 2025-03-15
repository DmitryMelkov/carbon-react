import React from 'react';
import Modal from '@mui/material/Modal';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from 'react-icons/md';
import styles from './DocumentationModal.module.scss';
import ModalHeader from '../../ui/ModalHeader/ModalHeader';

interface DocumentationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const DocumentationModal: React.FC<DocumentationModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onRequestClose}
      aria-labelledby="documentation-modal-title"
      aria-describedby="documentation-modal-description"
    >
      <div className={styles.modalContent}>
        <ModalHeader title="Документация объекта" onRequestClose={onRequestClose} />

        {/* Аккордеон */}
        <div className={styles.accordion}>
          <Accordion className={styles.accordion__item}>
            <AccordionSummary
              expandIcon={<MdExpandMore className={styles.accordion__icon} />}
              aria-controls="schemas-content"
              id="schemas-header"
            >
              <Typography className={styles.accordion__title}>Схемы проекта</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.accordion__content}>
                Здесь будет содержимое для схем проекта.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion__item}>
            <AccordionSummary
              expandIcon={<MdExpandMore className={styles.accordion__icon} />}
              aria-controls="manuals-content"
              id="manuals-header"
            >
              <Typography className={styles.accordion__title}>Руководства по эксплуатации</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.accordion__content}>
                Здесь будет содержимое для руководств по эксплуатации.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion__item}>
            <AccordionSummary
              expandIcon={<MdExpandMore className={styles.accordion__icon} />}
              aria-controls="user-guides-content"
              id="user-guides-header"
            >
              <Typography className={styles.accordion__title}>Руководства пользователя</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.accordion__content}>
                Здесь будет содержимое для руководств пользователя.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Modal>
  );
};

export default DocumentationModal;