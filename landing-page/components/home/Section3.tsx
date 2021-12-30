import React from 'react';
import { Spacer, Wrap, WrapItem } from '@chakra-ui/react';
import Color from 'color';

import PrimaryButton from '../shared/button/PrimaryButton';
import Stack, { VStack } from '../shared/Stack';
import { LargeHeading, Body1 } from '../shared/typography';
import Image from '../shared/Image';

const cards = [
  {
    name: 'Visa',
    image: '/images/visa.png',
  },
  {
    name: 'Mastercard',
    image: '/images/mastercard.png',
  },
  {
    name: 'American Express',
    image: '/images/american-express.png',
  },

  {
    name: 'Discover',
    image: '/images/discover.png',
  },
  {
    name: 'Payoneer',
    image: '/images/payoneer.png',
  },
  {
    name: 'Wise',
    image: '/images/wise.png',
  },
];

interface Section3Props {}

const Section3: React.FC<Section3Props> = ({}) => {
  return (
    <VStack
      p='2'
      align='stretch'
      justify='center'
      bgGradient={`linear(to-r, #F4F6F9,${Color('#F4F6F9').alpha(0.4).rgb()})`}
      maxW='container.xl'
      my='12'
      minH='600px'
      borderTopLeftRadius={['0', '0', '0', 'full']}
      borderBottomLeftRadius={['0', '0', '0', 'full']}
      ml='auto'
      pos='relative'
    >
      <Stack align='center'>
        <Spacer flex={3} />
        <Image
          left={{
            md: 0,
            lg: '-10%',
          }}
          bottom='0%'
          pos={['relative', 'relative', 'relative', 'absolute']}
          src='/images/bambi-cards.png'
          alt='bambi cards'
          width={519}
          height={444}
        />
        <VStack>
          <LargeHeading maxW='550px' textAlign={['center', 'left']}>
            Get Bombi Bank Card for More Benefits!
          </LargeHeading>
          <Wrap spacing='4' maxW='460px' justify='center'>
            {cards.map(({ name, image }) => (
              <WrapItem key={name}>
                <VStack
                  borderRadius='md'
                  placeItems='center'
                  bg='white'
                  w='140px'
                  h='60px'
                  pos='relative'
                >
                  <Image
                    objectFit='scale-down'
                    src={image}
                    m='auto'
                    alt={name}
                  />
                </VStack>
              </WrapItem>
            ))}
          </Wrap>
          <Body1 color='gray' maxW='590px'>
            Only $10 to get Debit Card Immediately or Post ti Billing Address.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sed
            mauris amet enim, hac. Ultrices sed arcu cursus justo maecenas
            malesuada ac cras ultricies.
          </Body1>
          <PrimaryButton>Join Now</PrimaryButton>
        </VStack>
        <Spacer flex={1} />
      </Stack>
    </VStack>
  );
};
export default Section3;
