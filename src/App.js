import React from 'react';

import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Navigation from './components/Navigation';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
     <Layout>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </Layout>
  </ChakraProvider>
   
  );
};

export default App;
