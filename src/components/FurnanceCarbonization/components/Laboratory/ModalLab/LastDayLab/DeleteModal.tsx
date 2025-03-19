import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


import { FaTrash } from 'react-icons/fa';
import { MdOutlineUndo } from 'react-icons/md';
import styles from './LastDayLab.module.scss';
import BtnDefault from '../../../../../../ui/BtnDefault/BtnDefault';
import CustomModal from '../../../../../../ui/CustomModal/CustomModal';
import CustomInput from '../../../../../../ui/CustomInput/CustomInput';

const deleteSchema = z.object({
  password: z.string().min(1, 'Введите пароль'),
});

type DeleteFormData = z.infer<typeof deleteSchema>;

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (password: string) => void;
  isDeleting: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ open, onClose, onSuccess, isDeleting }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<DeleteFormData>({
    resolver: zodResolver(deleteSchema),
    mode: 'all',
  });

  const onSubmit = (data: DeleteFormData) => {
    if (data.password !== '123') {
      setError('password', { type: 'manual', message: 'Неверный пароль' });
      return;
    }
    onSuccess(data.password);
    reset();
  };

  return (
    <CustomModal open={open} onClose={onClose} title="Подтверждение удаления" width="400px">
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles['delete__form']}`}>
        <CustomInput
          label="Пароль для удаления"
          type="password"
          style={{ width: '200px' }}
          {...register('password')}
          error={errors.password?.message}
          onChange={() => {
            clearErrors('password');
          }}
        />
        <div className={`${styles['delete__btns']}`}>
          <BtnDefault onClick={onClose}>
            <MdOutlineUndo />
            Отмена
          </BtnDefault>
          <BtnDefault disabled={isDeleting}>
            <FaTrash />
            <span>{isDeleting ? 'Проверка...' : 'Удалить'}</span>
          </BtnDefault>
        </div>
      </form>
    </CustomModal>
  );
};

export default DeleteModal;
