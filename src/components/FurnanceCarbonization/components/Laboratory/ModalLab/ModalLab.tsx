import React from 'react';
import CustomModal from '../../../../../ui/CustomModal/CustomModal';
import LastDayLab from './LastDayLab/LastDayLab';
import LabForm, { LabFormData } from './LabForm/LabForm';

interface ModalLabProps {
  open: boolean;
  onClose: () => void;
  url: string;
}

const ModalLab: React.FC<ModalLabProps> = ({ open, onClose, url }) => {
  const handleSuccess = (data: LabFormData) => {
    console.log('Данные успешно отправлены:', data);
  };

  return (
    <CustomModal open={open} onClose={onClose} title="Лаборатория" width="900px">
      <LabForm onSuccess={handleSuccess} url={url} />
      <LastDayLab url={url} />
    </CustomModal>
  );
};

export default ModalLab;
