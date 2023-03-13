import React from 'react';
import { Box, Heading, SimpleGrid, Text, Avatar } from '@chakra-ui/react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      avatar:
        'https://64.media.tumblr.com/5e30d3f61022273a10f2c55f952cf3e9/tumblr_prhwgft5iZ1s5y1z0o1_500.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique enim et quam aliquam, non faucibus ipsum commodo. Duis dictum nec lorem eu maximus. Nunc sit amet massa commodo, efficitur justo vel, auctor metus.',
    },
    {
      name: 'Jane Doe',
      avatar:
        'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/263327513/original/05e881507674a399409de14afd94031323995348/pixel-art-assets-for-games-and-others.png',
      text:
        'Donec vel orci vitae justo sollicitudin venenatis. Sed vitae nibh ut turpis aliquam sollicitudin sit amet eget orci. Etiam commodo euismod dolor ut commodo. Praesent luctus sem eget ante dignissim, at varius urna imperdiet.',
    },
    {
      name: 'Bob Smith',
      avatar:
        'https://i.pinimg.com/474x/06/a2/cd/06a2cd7b6e37af4accb610388621da19.jpg',
      text:
        'Phasellus gravida pharetra vehicula. Nulla malesuada, nisi ut luctus fermentum, velit lacus tempor ante, nec efficitur sapien nibh vel leo. In mollis sapien a nisl ullamcorper posuere. Nam feugiat neque nec augue feugiat, sed blandit tellus feugiat. In hac habitasse platea dictumst.',
    },
  ];

  return (
    <Box
    id='testimonials'
      bgGradient="linear(to-b, #26262D, #1C1C21)"
      py={20}
      px={{ base: 4, md: 8 }}
    >
      <Box maxW="900px" mx="auto" textAlign="center">
        <Heading as="h2" fontSize="4xl" mb={8} color="#fff">
          Testimonials
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} spacing={8}>
          {testimonials.map((testimonial, i) => (
            <Box
              key={i}
              bg="#2B2D36"
              color="#fff"
              borderRadius="md"
              boxShadow="md"
              p={8}
              textAlign="left"
            >
              <Avatar
                src={testimonial.avatar}
                name={testimonial.name}
                mb={4}
              />
              <Text mb={4}>{testimonial.text}</Text>
              <Text fontWeight="bold">{testimonial.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
