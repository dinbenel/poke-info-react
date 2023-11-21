import { NavLink } from 'react-router-dom';
import PokeBallSvg from '../Svg/PokeBall.svg';
import { routeName } from '@/constants/routeNames';
import Avatr from '../Svg/Avatr.svg';
import Bars from '../Svg/Bars.svg';

const Header = () => {
  const getLinkTitle = (routeName: string) => {
    const title = routeName.replace('/', '').trim();

    return title || 'home';
  };

  return (
    <header className='text-background text-2xl capitalize bg-foreground p-4'>
      <nav className='flex items-center justify-between container'>
        <section className='flex items-center justify-center'>
          <div>
            <PokeBallSvg className='h-20' />
          </div>
          <span>poke-info</span>
        </section>
        <section className='flex items-center justify-center gap-4 me-20'>
          <NavLink to={routeName.home}>{getLinkTitle(routeName.home)}</NavLink>
          <NavLink to={routeName.login}>
            {getLinkTitle(routeName.login)}
          </NavLink>
          <NavLink to={routeName.register}>
            {getLinkTitle(routeName.register)}
          </NavLink>
          <NavLink to={routeName.pokemon}>
            {getLinkTitle(routeName.pokemon)}
          </NavLink>
        </section>
        <section className='bg-background p-1 rounded-full flex items-center justify-center gap-2'>
          <Avatr className='h-8 w-8 text-foreground' />
          <Bars className='h-6 w-6 text-foreground' />
        </section>
      </nav>
    </header>
  );
};

export default Header;
