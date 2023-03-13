import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { MdDeveloperMode, MdSecurity, MdTimeline } from 'react-icons/md';

const Features = () => {
  return (
    <Box
      id="features"
      bgGradient="linear(to-b, #26262D, #1C1C21)"
      color="#fff"
      py={[16, 24]}
      textAlign="center"
    >
      <Box
        maxW="800px"
        mx="auto"
        px={[4, 8]}
        mb={[12, 16]}
      
      >
        <Heading as="h2" fontSize={['3xl', '4xl']} mb={8}>
          Our Features
        </Heading>
        <Text fontSize={['lg', 'xl']} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          ipsum quis libero aliquam posuere sit amet quis magna. Donec et
          vestibulum lectus. Sed sit amet nulla bibendum, venenatis nulla
          rhoncus, laoreet est. Nulla vel commodo sapien. Nullam non ornare
          nibh.
        </Text>
      </Box>
 
      <Box px={[4, 8, 16]}>
  <SimpleGrid
    columns={[1, 2, 3]}
    spacing={[8, 12, 16]}
    alignItems="center"
    justifyContent="center"
  >
    <Flex
      flexDirection="column"
      alignItems="center"
      border="1px solid #444"
      borderRadius="md"
      p={[8, 12]}
      transition="all 0.3s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: 'lg',
        background: 'linear-gradient(135deg, var(--mktg-accent-primary) 0%, var(--mktg-accent-secondary) 100%)',
      }}
      minHeight="320px"
    >
      <Box as={MdDeveloperMode} size="64px" mb={8} color="#f76d6d" />
      <Heading as="h3" fontSize={['xl', '2xl']} mb={4}>
        Customizable Design
      </Heading>
      <Text fontSize={['md', 'lg']} textAlign="center">
        Our templates are fully customizable, so you can create a design
        that fits your brand.
      </Text>
    </Flex>
    <Flex
      flexDirection="column"
      alignItems="center"
      border="1px solid #444"
      borderRadius="md"
      p={[8, 12]}
      transition="all 0.3s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: 'lg',
        background: 'linear-gradient(135deg, var(--mktg-accent-primary) 0%, var(--mktg-accent-secondary) 100%)',
      }}
      minHeight="320px"
    >
      <Box as={MdSecurity} size="64px" mb={8} color="#7dd3fc" />
      <Heading as="h3" fontSize={['xl', '2xl']} mb={4}>
        Secure &amp; Reliable
      </Heading>
      <Text fontSize={['md', 'lg']} textAlign="center">
        Our servers are secure and reliable, so you can rest easy knowing
        that your data is safe.
      </Text>
    </Flex>
    <Flex
      flexDirection="column"
      alignItems="center"
      border="1px solid #444"
      borderRadius="md"
      p={[8, 12]}
      transition="all 0.3s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: 'lg'
      }}
      minHeight="320px"
    >
      <Box as={MdTimeline} size="64px" mb={8} color="#ffb35d" />
      <Heading as="h3" fontSize={['xl', '2xl']} mb={4}>
        Analytics & Insights
      </Heading>
      <Text fontSize={['md', 'lg']} textAlign="center">
        Get detailed analytics and insights into your website's performance
        to make informed decisions and improve user experience.
      </Text>
    </Flex>
  </SimpleGrid>
</Box>


</Box>
);
};

export default Features;
