import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@chakra-ui/react';
import Header from '../Header/header';

const Layout = () => {
  return (
    <>
        <Header />
        <Container
          maxW='1280px'
        >
          <Outlet />
        </Container>
    </>
  );
};

export default Layout;
