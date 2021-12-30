import React from 'react';
import { chakra, useTheme, Wrap, WrapItem } from '@chakra-ui/react';

import PrimaryButton from './shared/button/PrimaryButton';
import { LargeHeading, Body1, Body2 } from './shared/typography';
import Wrapper from './shared/Wrapper';
import Stack, { HStack, VStack } from './shared/Stack';
import Section from './shared/Section';
import Image from './shared/Image';

const points = [
  {
    title: 'Guaranteed Safety',
    description:
      'We are committed to protecting your personal information and your financial security.',
    image: '/images/safety.png',
  },
  {
    title: 'All in one App',
    description: 'You can use all types of banks in one Bombi App',
    image: '/images/grid.png',
  },
  {
    title: 'Keeping secrecy',
    description: 'Don’t worry, we use AI technology to keep user data private',
    image: '/images/lock.png',
  },
];

const Svg = chakra('svg', {});

const Hero: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const primaryColor = colors?.brand['1'];

  return (
    <Section bgGradient='linear(to-b, #F4F6F9, transparent)'>
      <Wrapper py={['4', '12']}>
        <Stack justify='space-between'>
          <VStack pb='8'>
            <VStack spacing='0'>
              <LargeHeading fontWeight='regular'>High Street</LargeHeading>
              <LargeHeading>Cryptocurrency</LargeHeading>
              <Svg maxW='480px' h='27px' fill='transparent'>
                <path
                  strokeWidth={4}
                  strokeLinecap='round'
                  stroke={primaryColor}
                  d='M2.5 17C49 0.805939 239.5 -8 405.5 24.5'
                />
              </Svg>
              <LargeHeading fontWeight='regular'>Bank</LargeHeading>
            </VStack>
            <Body1 maxW='40ch' color='gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              bibendum augue in arcu id. Sed a viverra suspendisse sed imperdiet
              felis.
            </Body1>
            <PrimaryButton>Get started</PrimaryButton>
          </VStack>
          <Image width={588} height={509} src='/images/hero.png' alt='hero' />
        </Stack>
        <Wrap mt='8' justify='space-around' align='flex-start' spacing={4}>
          {points.map(({ title, description, image }, index) => (
            <WrapItem key={index}>
              <HStack align='flex-start'>
                <Image
                  src={image}
                  alt={title}
                  height={36}
                  width={36}
                  loading='eager'
                />
                <VStack align='flex-start' spacing='2'>
                  <Body2 fontWeight='bold' size='xs'>
                    {title}
                  </Body2>
                  <Body1 color='gray' maxW='290px'>
                    {description}
                  </Body1>
                </VStack>
              </HStack>
            </WrapItem>
          ))}
        </Wrap>
      </Wrapper>
    </Section>
  );
};
export default Hero;
