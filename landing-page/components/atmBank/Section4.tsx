import { Box, Spacer, VStack } from '@chakra-ui/react';
import React from 'react';
import PrimaryButton from '../shared/button/PrimaryButton';
import Image from '../shared/Image';

import Section from '../shared/Section';
import Stack, { HStack } from '../shared/Stack';
import { Body1, LargeHeading } from '../shared/typography';
import Wrapper from '../shared/Wrapper';

const points = [
  'A support message to you mobile device when cash is withdrawal',
  'Buy BBTC / Bitcoin then convert to Ethereum / Furtcoin/ ETH / LTC / Zuzubecoin',
  'Free cash withdrawal',
  'Franchise ATM',
];

interface Section4Props {}

const Section4: React.FC<Section4Props> = ({}) => {
  return (
    <Wrapper
      my='12'
      bg='brand.3'
      pt='4'
      borderLeftRadius={{
        md: '0',
        lg: 'full',
      }}
      mr='0'
      pos='relative'
    >
      <Section>
        <Stack align='center'>
          <Image
            pos={{
              md: 'relative',
              lg: 'absolute',
            }}
            left={{
              md: 0,
              lg: '-10%',
            }}
            src='/images/phone-leaning-left.png'
            alt='phone leaning left'
            width={428}
            height={482}
          />
          <Spacer />
          <VStack align='flex-start' spacing={8}>
            <LargeHeading>Lorem Ipsum</LargeHeading>
            <VStack align='flex-start'>
              {points.map((point, index) => (
                <HStack key={point}>
                  <Box bg='brand.1' w='16px' h='4px' />
                  <Body1 maxW='462px' color='gray'>
                    {point}
                  </Body1>
                </HStack>
              ))}
            </VStack>
            <PrimaryButton>Learn More</PrimaryButton>
          </VStack>
          <Spacer flex={0.5} />
        </Stack>
        <Image
          pos='absolute'
          right='10%'
          bottom='0'
          transform='auto'
          translateY='30%'
          src='/images/folded-paper.png'
          alt='folded paper'
          width={213}
          height={149}
        />
      </Section>
    </Wrapper>
  );
};
export default Section4;
