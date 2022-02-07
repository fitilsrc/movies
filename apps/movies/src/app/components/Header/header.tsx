import React from 'react';
import { chakra, Flex, Container } from '@chakra-ui/react';

import { MoleculeLogo } from '@movies/molecule/logo';
import { MoleculeMenu } from '@movies/molecule/menu'

const Header = () => {
  return (
    <chakra.div
      bg='main'
    >
      <Container
        maxW='1280px'
      >
        <Flex
          justify='space-between'
          align='center'
          h='64px'
        >
          <MoleculeLogo />
          <MoleculeMenu />
        </Flex>
      </Container>
    </chakra.div>
  );
};

export default Header;
