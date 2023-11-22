import { FormInput } from '@/components';
import Logister from '@/components/Logister/Logister.component';

const Login = () => {
  return (
    <div className='flex items-center justify-center mt-6'>
      <Logister initialValues={{ email: '', password: '' }}>
        <FormInput name='email' />
        <FormInput name='password' />
      </Logister>
    </div>
  );
};

export default Login;
