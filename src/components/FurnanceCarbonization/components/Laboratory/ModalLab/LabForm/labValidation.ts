import * as z from 'zod';

const numberInRange = () =>
  z.preprocess((val) => {
    if (typeof val === 'string' && val.trim() === '') return undefined;
    return Number(val);
  }, z.number({ invalid_type_error: 'Введите число' }).min(0, 'от 0 до 30').max(30, 'от 0 до 30').optional());

export const labSchema = z
  .object({
    volatile: numberInRange(),
    ph: numberInRange(),
    summarka: numberInRange(),
    password: z.string().min(1, 'Введите пароль'),
    time: z.preprocess(
      (val: unknown) => {
        if (typeof val !== 'string' || val.trim() === '') return undefined;
        const [hours, minutes] = val.split(':');
        const date = new Date();
        date.setHours(Number(hours), Number(minutes), 0, 0);
        return date;
      },
      z.date({
        required_error: 'Введите время',
        invalid_type_error: 'Введите время',
      })
    ),
  })
  .refine(
    (data) => {
      return data.volatile || data.ph || data.summarka;
    },
    {
      message: 'Заполните хотя бы одно поле',
      path: [],
    }
  );
