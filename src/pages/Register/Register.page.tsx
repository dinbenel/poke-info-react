import { FormInput, Logister } from '@/components';

const Register = () => {
  return (
    <div className='flex items-center justify-center mt-6'>
      <Logister initialValues={{ email: '', password: '', userName: '' }}>
        <FormInput name='email' />
        <FormInput name='password' />
        <FormInput name='userName' />
      </Logister>
    </div>
  );
};

export default Register;
