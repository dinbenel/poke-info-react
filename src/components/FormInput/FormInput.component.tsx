import { InputHTMLAttributes, forwardRef } from 'react';
import { Input } from '../ui/input';
import { FieldErrors } from 'react-hook-form';

type Props = {
  errors?: FieldErrors;
} & InputHTMLAttributes<HTMLInputElement>;
type Ref = any;

const FormInput = forwardRef<Ref, Props>((props, ref) => {
  const { errors } = props;
  const isError = !!errors?.[props.name!];
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={props.name} className='font-medium text-lg'>
        {props.name}
      </label>
      <Input {...props} ref={ref} aria-invalid={isError} id={props.name} />
      {isError && <p>{errors?.[props.name!]?.message as string}</p>}
    </div>
  );
});

export default FormInput;
