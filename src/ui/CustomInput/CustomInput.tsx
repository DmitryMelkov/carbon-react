import styles from './CustomInput.module.scss';
import { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function CustomInput({ label, error, ...rest }: CustomInputProps) {
  return (
    <div className={styles['custom-input']}>
      <label>{label}</label>
      <input {...rest} className={error ? styles['input-error'] : ''} />
      {error && <span className={styles['error-message']}>{error}</span>}
    </div>
  );
}
