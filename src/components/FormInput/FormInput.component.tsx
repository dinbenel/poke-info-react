import { InputHTMLAttributes, forwardRef } from 'react';
import { Input } from '../ui/input';
import { FieldErrors } from 'react-hook-form';

type Props = {
  errors?: FieldErrors;
} & InputHTMLAttributes<HTMLInputElement>;
type Ref = any;

const FormInput = forwardRef<Ref, Props>((props, ref) => {
  const { errors } = props;
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={props.name}>{props.name}</label>
      <Input {...props} ref={ref} />
      {errors?.[props.name!] && (
        <p>{errors?.[props.name!]?.message as string}</p>
      )}
    </div>
  );
});

export default FormInput;
