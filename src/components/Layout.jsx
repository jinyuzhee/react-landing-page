import React from 'react';
import { Box } from '@chakra-ui/react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Box
        bg="#0D0D0D"
        color="white"
        minH="100vh"
        w="100%"
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
