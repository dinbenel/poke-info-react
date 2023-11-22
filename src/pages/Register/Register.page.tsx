import { FormInput, Logister } from '@/components';

const Register = () => {
  return (
    <div>
      <Logister initialValues={{ email: '', password: '', userName: '' }}>
        <FormInput name='email' />
        <FormInput name='password' />
        <FormInput name='userName' />
      </Logister>
    </div>
  );
};

export default Register;
