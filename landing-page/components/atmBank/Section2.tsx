import React from 'react';
import { Wrap } from '@chakra-ui/react';

import Section from '../shared/Section';
import { VStack } from '../shared/Stack';
import { Body2, Caption, LargeHeading } from '../shared/typography';
import Wrapper from '../shared/Wrapper';
import Image from '../shared/Image';

const points = [
  {
    title: 'Message',
    icon: '/images/message.png',
  },
  {
    title: 'Debit Card',
    icon: '/images/bank-card.png',
  },
  {
    title: 'Geo Locations',
    icon: '/images/location.png',
  },
  {
    title: 'Phone (BBTC Code)',
    icon: '/images/bbtc-code.png',
  },
  {
    title: 'Finger & Touch screen',
    icon: '/images/touchandscan.png',
  },
];

interface Section2Props {}

const Section2: React.FC<Section2Props> = ({}) => {
  return (
    <Section my='12'>
      <Wrapper>
        <VStack>
          <LargeHeading>BOMBI Bank ATM</LargeHeading>
          <Caption color='gray' maxW='600px'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sed
            mauris amet enim, hac. Ultrices sed arcu cursus justo maecenas
            malesuada ac cras ultricies. Aliquam id dolor congue turpis praesent
            massa phasellus ultrices nisl. Sed feugiat vel amet nulla molestie.
          </Caption>
          <Wrap justify={['center', 'center', 'space-between']} w='full'>
            {points.map((point, index) => (
              <VStack
                px='4'
                borderRadius='md'
                bg='gray.100'
                boxSize='200px'
                key={index}
                align='center'
                justify='center'
              >
                <Image
                  src={point.icon}
                  alt={point.title}
                  height={56}
                  width={56}
                  objectFit='scale-down'
                />
                <Body2 fontWeight='bold'>{point.title}</Body2>
              </VStack>
            ))}
          </Wrap>
        </VStack>
      </Wrapper>
    </Section>
  );
};
export default Section2;
