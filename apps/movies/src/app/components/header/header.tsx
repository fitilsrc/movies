import React from 'react';
import { chakra } from '@chakra-ui/react';

import { MoleculeLogo } from '@movies/molecule/logo';
import { MoleculeMenu } from '@movies/molecule/menu'

const Header = () => {
  return (
    <chakra.div
      bg='main'
    >
      <div className='max-w-7xl w-full flex justify-between items-center mx-auto h-16 px-10'>
        <MoleculeLogo />
        <MoleculeMenu />
      </div>
    </chakra.div>
  );
};

export default Header;
