import React from 'react';
import { Link } from 'react-router-dom';
import { chakra } from '@chakra-ui/react';

const Header = () => {
  return (
    <chakra.div
      bg='main'
    >
      <div className='max-w-7xl w-full flex justify-between items-center mx-auto h-16 px-10'>
        <Link to='/'>
          <img width="154" height="20" src="/assets/logo.svg" alt="The Best Movie Site" />
        </Link>
        <nav>
          <ul className='flex justify-center items-center gap-4 font-semibold text-white font-sans'>
            <li><Link className='p-2' to="/">Home</Link></li>
            <li><Link className='p-2' to="/dashboard">Dashboard</Link></li>
            <li><Link className='p-2' to="/add">Add Movie</Link></li>
          </ul>
        </nav>
      </div>
    </chakra.div>
  );
};

export default Header;
