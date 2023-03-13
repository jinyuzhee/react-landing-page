import React from 'react';
import { Box, Button, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      id="home"
      bgImage="url(https://i.imgur.com/NdA8gJ2.gif)"
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        maxW="600px"
        mx="auto"
        px={[4, 8, 9]}
        py={10} 
        textAlign="center"
        backgroundColor="rgba(0, 0, 0, 0.8)"
        borderRadius="10px"
        mb="4rem"
      >
        <Heading
          as="h3"
          size="2xl"
          mb={3}
          fontFamily="Consolas, monospace"
          letterSpacing="tight"
        >
          WELCOME TO CYBERPUNK UNIVERSE
        </Heading>

        <Text
          fontSize="lg"
          mb={3}
          fontFamily="Consolas, monospace"
          letterSpacing="tight"
        >
          Get ready for the next level of experience
        </Text>
        <Flex justifyContent="center">
          <Button
            size="lg"
            colorScheme="pink"
            fontFamily="Consolas, monospace"
            letterSpacing="tight"
            _hover={{ bg: '#FC4775' }}
          >
            JOIN NOW
          </Button>
        </Flex>
      </Box>
      <Box mb="5rem" style={{ marginBottom: "0" }}>
        <ScrollLink
          to="features"
          smooth={true}
          duration={500}
          isDynamic={true}
        >
          <Link display="flex" justifyContent="center">
            <Box
              as={FaAngleDown}
              size="40px"
              color="white"
              cursor="pointer"
            />
          </Link>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default Hero;
