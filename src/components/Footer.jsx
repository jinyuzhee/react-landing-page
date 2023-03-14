import React from 'react';
import { Box, Flex, IconButton, Stack } from '@chakra-ui/react';
import { FaLink, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="#111" py={16}>
      <Box maxW="900px" mx="auto">
        <Stack
          direction={['column', 'row']}
          justify="space-between"
          align={['center', 'flex-start']}
          spacing={8}
        >
          <Box>
            <Flex align="center" mb={4}>
              <Box
                bg="url('https://img.itch.zone/aW1hZ2UvMzkyOTc3LzE5NDYyMTAuanBn/original/j1VqmU.jpg')"
                w={10}
                h={10}
                borderRadius="full"
                mr={4}
                backgroundSize="cover"
              ></Box>

              <Box>
                <Box fontWeight="bold" color="white" mb={1}>
                  CYBERSPACE
                </Box>
                <Box color="gray.400" fontSize="sm">
                  A platform for your CyberDream.
                </Box>
              </Box>
            </Flex>
            <Box color="gray.400" fontSize="sm">
              &copy; 2023 Yuzhe Jin. All rights reserved.
            </Box>
          </Box>
          <Flex>
            <IconButton
              as="a"
              href="https://yuzhe-jin.vercel.app/"
              aria-label="Link"
              icon={<FaLink />}
              variant="ghost"
              color="white"
              _hover={{ink bg: 'white', color: 'gray.800' }}
              _active={{ bg: 'white', color: 'gray.800' }}
              mr={4}
            />
            <IconButton
              as="a"
              href="https://github.com/jinyuzhee"
              aria-label="Github"
              icon={<FaGithub />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'white', color: 'gray.800' }}
              _active={{ bg: 'white', color: 'gray.800' }}
              mr={4}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/yuzhe-j-6777a5121/"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'white', color: 'gray.800' }}
              _active={{ bg: 'white', color: 'gray.800' }}
            />
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
