import { ILoginFormValue, IRegisterFormValue } from '@/types/auth.type';
import { Children, cloneElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/validations/login.schema';
import { registerSchema } from '@/validations/register.schema';
import { observer } from 'mobx-react';
import { useAppContext } from '@/providers/RootStore.provider';
import SocialButton from '../SocialButton/SocialButton.component';
import { Separator } from '../ui/separator';

type Props = {
  initialValues: IRegisterFormValue | ILoginFormValue;
  children: JSX.Element[];
};

const Logister = ({ initialValues, children }: Props) => {
  const { authStore } = useAppContext();
  const schema =
    'userName' in initialValues
      ? zodResolver(registerSchema)
      : zodResolver(loginSchema);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm({
    defaultValues: initialValues,
    resolver: schema,
  });

  const onSubmit: SubmitHandler<typeof initialValues> = async (values) => {
    if ('userName' in values) {
      await authStore.register(values);
      resetForm();
      return;
    }
    await authStore.login(values);
    resetForm();
  };

  const resetForm = () => {
    reset();
    clearErrors();
  };

  return (
    <form
      className='flex flex-col w-[25%] gap-6 bg-gray-900 p-4 capitalize'
      onSubmit={handleSubmit(onSubmit)}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, {
          ...child.props,
          ...register(child.props.name),
          errors,
        });
      })}
      <Button className='w-full capitalize font-medium text-base'>
        submit
      </Button>
      <div className='flex items-center gap-2 w-full'>
        <Separator className='bg-white' />
        <span className='text-lg'>or</span>
        <Separator className='bg-white' />
      </div>
      <SocialButton title='github' />
      <SocialButton title='google' />
    </form>
  );
};

export default observer(Logister);
