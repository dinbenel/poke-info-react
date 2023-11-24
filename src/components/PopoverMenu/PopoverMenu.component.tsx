import { ReactNode } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type Props = {
  children: ReactNode;
  title: string;
};

const PopoverMenu = ({ children, title }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{title}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};

export default PopoverMenu;
