import { Button } from '../ui/button';
import { VscGithubInverted } from 'react-icons/vsc';
import { FcGoogle } from 'react-icons/fc';

type Props = {
  title: 'github' | 'google';
};

type SocialOptions = Record<Props['title'], JSX.Element>;

const SocialButton = ({ title }: Props) => {
  const SocialOptions: SocialOptions = {
    github: <VscGithubInverted className='me-2' size={20} />,
    google: <FcGoogle className='me-2' size={20} />,
  };

  return (
    <div className=''>
      <Button className='w-full capitalize font-medium text-base'>
        {SocialOptions[title]}
        {title}
      </Button>
    </div>
  );
};

export default SocialButton;
