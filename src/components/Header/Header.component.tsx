import { NavLink } from 'react-router-dom';
import { routeName } from '@/constants/routeNames';
import { TbPokeball } from 'react-icons/tb';
import UserMenu from '../UserPopUpMenu/UserMenu.component';

const Header = () => {
  const getLinkTitle = (routeName: string) => {
    const title = routeName.replace('/', '').trim();

    return title || 'home';
  };

  return (
    <header className='text-background text-2xl capitalize bg-foreground p-5 border-background/40 border-b-[1px]'>
      <nav className='flex items-center justify-between container'>
        <section className='flex items-center justify-center'>
          <div>
            <TbPokeball className='text-background fill-rose-600 text-6xl me-2' />
          </div>
          <span>poke-info</span>
        </section>
        <section className='flex items-center justify-center gap-4 me-20'>
          <NavLink to={routeName.home}>{getLinkTitle(routeName.home)}</NavLink>
          <NavLink to={routeName.pokemon}>
            {getLinkTitle(routeName.pokemon)}
          </NavLink>
        </section>
        <section className='bg-background p-1 rounded-full flex items-center justify-center gap-2'>
          <UserMenu />
        </section>
      </nav>
    </header>
  );
};

export default Header;
