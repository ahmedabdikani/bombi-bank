import { Box } from '@chakra-ui/react';

import Hero from '../components/Hero';
import React from 'react';
import Section1 from '../components/atmBank/Section1';
import Section2 from '../components/atmBank/Section2';
import Section3 from '../components/atmBank/Section3';
import Section4 from '../components/atmBank/Section4';

interface ATMBankProps {}

const ATMBank: React.FC<ATMBankProps> = ({}) => {
  return (
    <Box>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Box>
  );
};
export default ATMBank;
