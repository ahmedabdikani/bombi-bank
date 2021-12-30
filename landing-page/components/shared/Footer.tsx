import React from 'react';
import { Center } from '@chakra-ui/react';

import { Body1, Body2, Caption, SubHeading } from './typography';
import Wrapper from './Wrapper';
import MobileAppLinks from '../MobileAppLinks';
import Stack, { HStack, VStack } from './Stack';
import Image from './Image';

const privacyPolicy = [
  { title: 'Privacy', items: ['Community Policy', 'Safety', 'Report'] },
  {
    title: 'Policy',
    items: ['Terms and  Conditions', 'Cookie Policy'],
  },
];

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <VStack
      bg='brand.2'
      w='full'
      minH='352px'
      color='white'
      pt='10'
      align='stretch'
    >
      <Wrapper flex={1}>
        <Stack justify='space-between'>
          <VStack align='flex-start'>
            <HStack justify='flex-start' spacing={8}>
              <Image
                src='/images/logo.png'
                alt='logo'
                height={48}
                width={30}
                objectFit='contain'
              />
              <SubHeading fontWeight='bold'>Bombi Bank</SubHeading>
            </HStack>
            <Caption color='gray' maxW='270px'>
              Bombi Bank is the Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Magna sed mauris amet enim, hac. Ultrices sed
              arcu cursus justo maecenas malesuada
            </Caption>
          </VStack>
          <HStack align='flex-start'>
            {privacyPolicy.map(({ items, title }, index) => (
              <VStack flexBasis={'30%'} key={title} align='flex-start'>
                <Body2 fontWeight='semibold'>{title}</Body2>
                {items.map((item, index) => (
                  <Body1 color='gray' key={index}>
                    {item}
                  </Body1>
                ))}
              </VStack>
            ))}
            <VStack align='flex-start'>
              <Body2 fontWeight='semibold'>Partner</Body2>
              <HStack spacing='2' py='2' px='4' bg='yellow' borderRadius='full'>
                <Image
                  height={20}
                  width={20}
                  src='/images/pupipay.png'
                  alt='pupipay app logo'
                />
                <Caption color='black' fontWeight='bold'>
                  PUPIPAY
                </Caption>
              </HStack>
              <HStack spacing='2'>
                <Image
                  height={20}
                  width={20}
                  src='/images/zupapp.png'
                  alt='zup app logo'
                />
                <Caption fontWeight='bold'>Zup App</Caption>
              </HStack>
            </VStack>
          </HStack>
          <VStack>
            <Body2 fontWeight='semibold'>Download the Apps</Body2>
            <MobileAppLinks />
          </VStack>
        </Stack>
      </Wrapper>
      <Center w='full' h='68' bg='blackAlpha.400'>
        <Caption color='gray' m='auto'>
          ©Copyright 2021 All Right Reserves
        </Caption>
      </Center>
    </VStack>
  );
};
export default Footer;
