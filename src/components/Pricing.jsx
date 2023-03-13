import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: 19,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Pro',
      price: 49,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      title: 'Business',
      price: 99,
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ],
    },
  ];

  const Plan = ({ plan }) => (
    <Box
      bg="#26262D"
      border="1px solid #383842"
      borderRadius="md"
      p={4}
      textAlign="center"
      transition="all 0.3s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '0px 0px 0px 2px rgba(147, 245, 236, 1)',
      }}
    >
      <Heading as="h3" fontSize="2xl" mb={4} color="#D9D9D9">
        {plan.title}
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" mb={8} color="#D9D9D9">
        ${plan.price}/mo
      </Text>
      <Stack spacing={2}>
        {plan.features.map((feature, i) => (
          <Text key={i} color="#D9D9D9">
            {feature}
          </Text>
        ))}
      </Stack>
      <Button
        mt={8}
        colorScheme="pink"
        fontFamily="Consolas, monospace"
        letterSpacing="tight"
        _hover={{ bg: '#FC4775' }}
      >
        Get started
      </Button>
    </Box>
  );

  return (
    <Box
      id="pricing"
      bg="#191922"
      backgroundImage="url('https://www.transparenttextures.com/patterns/dark-mosaic.png')"
      backgroundRepeat="repeat"
      py={20}
    >
      <Box maxW="900px" mx="auto" textAlign="center">
        <Heading as="h2" fontSize="4xl" mb={8} color="#D9D9D9">
          Pricing
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} spacing={8}>
          {plans.map((plan, i) => (
            <Plan key={i} plan={plan} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Pricing;
