import { FaRegUserCircle } from 'react-icons/fa';
import { HiMiniBarsArrowDown } from 'react-icons/hi2';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { routeName } from '@/constants/routeNames';
import { Link } from 'react-router-dom';

type Props = {};

const UserMenu = ({}: Props) => {
  return (
    <Popover>
      <PopoverTrigger className='flex'>
        <FaRegUserCircle className='text-foreground text-4xl me-1' />
        <HiMiniBarsArrowDown className='text-foreground text-4xl' />
      </PopoverTrigger>
      <PopoverContent className='mt-6 w-48'>
        <div className='flex flex-col gap-2 font-medium text-lg'>
          <Link
            className='border-background border-b-[1px] w-full'
            to={routeName.register}
          >
            register
          </Link>
          <Link to={routeName.login}>login</Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
