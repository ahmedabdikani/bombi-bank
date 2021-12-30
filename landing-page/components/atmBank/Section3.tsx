import { HStack } from '@chakra-ui/react';
import React from 'react';
import Image from '../shared/Image';

import Section from '../shared/Section';
import Stack, { VStack } from '../shared/Stack';
import { Body1, Body2, LargeHeading } from '../shared/typography';
import Wrapper from '../shared/Wrapper';

const points = [
  {
    title: 'ATM',
    description:
      'Taking money from atm with phone BBTC code or with debit card',
  },
  {
    title: 'Advertise',
    description: 'Dynamic video advertisement with atm inactive',
  },
  {
    title: 'Free Wifi',
    description: 'All atm have free wifi',
  },
  {
    title: 'Biometric',
    description: 'Finger print to take money from cash machine',
  },
];

interface Section3Props {}

const Section3: React.FC<Section3Props> = ({}) => {
  return (
    <Section my='12'>
      <Wrapper>
        <Stack align='stretch' justify='space-between'>
          <Image
            objectFit='contain'
            src='/images/service-details.png'
            alt='ATM Bank'
            width={345}
            height={603}
          />
          <VStack flex={1} align='stretch' maxW='615px'>
            {points.map(({ description, title }, index) => (
              <VStack align='stretch' key={index}>
                <LargeHeading>{title}</LargeHeading>
                <HStack justify='space-between' color='gray'>
                  <Body2>Lorem Ipsum</Body2>
                  <Body1 w='256px'>{description}</Body1>
                </HStack>
              </VStack>
            ))}
          </VStack>
        </Stack>
      </Wrapper>
    </Section>
  );
};
export default Section3;
