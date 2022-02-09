import React from 'react';
import { chakra, Flex, Container } from '@chakra-ui/react';

import { Logo } from '@movies/components';
import { Menu } from '@movies/components';

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
          <Logo />
          <Menu />
        </Flex>
      </Container>
    </chakra.div>
  );
};

export default Header;
