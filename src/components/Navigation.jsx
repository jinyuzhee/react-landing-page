import React, { useState, useEffect } from 'react';
import { Box, Flex, IconButton, Spacer, Stack, Text } from '@chakra-ui/react';
import { FaComment, FaUser, FaSearch } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolled = currentScrollPos > 0;
      setIsScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isScrolled ? 'rgba(13,13,13,0.5)' : 'transparent';

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg={navBackground}
      color="white"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      transition="background-color 0.5s ease-out"
    >
      <Flex align="center" mr={5}>
        <Box p={2} bg="gray.800" rounded="full">
          <Text fontSize="lg" fontWeight="bold" textAlign="center">
            CYBERSPACE
          </Text>
        </Box>

        <Box
          ml={20}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <Stack
            spacing={8}
            direction="row"
            align="center"
            justifyContent="flex-end"
            flexGrow={1}
            mr="auto"
          >
            <Link to="home" smooth={true} duration={500}>
              <Text fontWeight="bold" fontSize="lg">
                Home
              </Text>
            </Link>
            <Link to="features" smooth={true} duration={500}>
              <Text fontWeight="bold" fontSize="lg">
                Features
              </Text>
            </Link>
            <Link to="pricing" smooth={true} duration={500}>
              <Text fontWeight="bold" fontSize="lg">
                Pricing
              </Text>
            </Link>
            <Link to="testimonials" smooth={true} duration={500}>
              <Text fontWeight="bold" fontSize="lg">
                Testimonials
              </Text>
            </Link>
          </Stack>
        </Box>
      </Flex>

      <Spacer />

      <Box
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <Stack spacing={8} direction="row" align="center">
          <IconButton icon={<FaSearch />} variant="ghost" aria-label="Search"               _hover={{ bg: 'white', color: 'gray.800' }}
              _active={{ bg: 'white', color: 'gray.800' }} />

          <IconButton icon={<FaComment />} variant="ghost" aria-label="Cart"               _hover={{ bg: 'white', color: 'gray.800' }}
              _active={{ bg: 'white', color: 'gray.800' }} />

          <IconButton icon={<FaUser />} variant="ghost" aria-label="Profile"               _hover={{ bg: 'white', color: 'gray.800' }}
              _active={{ bg: 'white', color: 'gray.800' }}/>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Navigation;
