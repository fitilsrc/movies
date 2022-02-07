import './menu.module.scss';

import { Link } from 'react-router-dom';
import { chakra } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu(props: MenuProps) {
  return (
    <>
      <nav>
        <ul className='flex justify-center items-center gap-4 font-semibold text-white font-sans'>
          <Link className='p-2' to='/'>
            <chakra.span
              color={'white'}
              p={'0.5rem'}
            >Home</chakra.span>
          </Link>
          <Link className='p-2' to='/dashboard'>
            <chakra.span
              color={'white'}
              p={'0.5rem'}
            >Dashbord</chakra.span>
          </Link>
          <Link className='p-2' to='/add'>
            <chakra.span
              color={'white'}
              p={'0.5rem'}
            >Add Movie</chakra.span>
          </Link>         
        </ul>
      </nav>
    </>
  );
}

export default Menu;
