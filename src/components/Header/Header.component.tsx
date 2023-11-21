import { routeName } from '@/constants/routeNames';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const getLinkTitle = (routeName: string) => {
    const title = routeName.replace('/', '').trim();

    return title || 'home';
  };

  return (
    <header className='bg-foreground text-background text-xl'>
      <nav className='flex items-center justify-center gap-4 p-6 max-w-7xl mx-auto'>
        <NavLink to={routeName.home}>{getLinkTitle(routeName.home)}</NavLink>
        <NavLink to={routeName.login}>{getLinkTitle(routeName.login)}</NavLink>
        <NavLink to={routeName.register}>
          {getLinkTitle(routeName.register)}
        </NavLink>
        <NavLink to={routeName.pokemon}>
          {getLinkTitle(routeName.pokemon)}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
