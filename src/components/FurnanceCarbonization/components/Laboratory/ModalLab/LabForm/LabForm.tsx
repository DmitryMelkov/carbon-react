import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { labSchema } from './labValidation';
import { FaSave } from 'react-icons/fa';
import { toast } from 'react-toastify';
import styles from './LabForm.module.scss';
import CustomInput from '../../../../../../ui/CustomInput/CustomInput';
import BtnDefault from '../../../../../../ui/BtnDefault/BtnDefault';

export type LabFormData = z.infer<typeof labSchema>;

interface LabFormProps {
  onSuccess: (data: LabFormData) => void;
  url: string;
}

const LabForm: React.FC<LabFormProps> = ({ onSuccess, url }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<LabFormData>({
    resolver: zodResolver(labSchema),
    mode: 'all',
    defaultValues: {
      volatile: undefined,
      ph: undefined,
      summarka: undefined,
      password: '',
      time: undefined,
    },
  });

  const onSubmit = async (data: LabFormData) => {
    if (data.password !== '123') {
      setError('password', { type: 'manual', message: 'Неверный пароль' });
      return;
    }
    const timeDate = data.time as Date;
    const formattedTime = `${timeDate.getHours().toString().padStart(2, '0')}:${timeDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

    const payload = {
      value: data.volatile,
      valuePH: data.ph,
      valueSUM: data.summarka,
      time: formattedTime,
    };
    try {
      const address = `http://localhost:3002/api/lab/pechVr${url}/submit`;
      const response = await fetch(address, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success('Данные успешно отправлены');
        onSuccess(data);
      } else {
        toast.error('Ошибка при отправке данных');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      toast.error('Ошибка при отправке данных');
    } finally {
      reset();
    }
  };

  return (
    <form className={`${styles['form__lab']}`} onSubmit={handleSubmit(onSubmit)}>
      <div>Введите значение, которое хотите записать и нажмите кнопку Принять.</div>
      <div className={`${styles['form__inputs']}`}>
        <CustomInput label="Летучие в-ва" {...register('volatile')} error={errors.volatile?.message} />
        <CustomInput label="pH" {...register('ph')} error={errors.ph?.message} />
        <CustomInput label="Суммарка" {...register('summarka')} error={errors.summarka?.message} />
        <span className={`${styles['form__error-global']}`}></span>
        <CustomInput
          label="Время"
          type="time"
          {...register('time')}
          error={errors.time?.message}
          style={{ width: 110 }}
        />
        <CustomInput
          label="Пароль"
          type="password"
          {...register('password', { onChange: () => clearErrors('password') })}
          error={errors.password?.message}
        />
        <BtnDefault disabled={!isValid}>
          <FaSave />
          Принять
        </BtnDefault>
      </div>
    </form>
  );
};

export default LabForm;
