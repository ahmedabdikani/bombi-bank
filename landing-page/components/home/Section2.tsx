import React from 'react';

import PrimaryButton from '../shared/button/PrimaryButton';
import Image from '../shared/Image';
import Section from '../shared/Section';
import Stack, { HStack, VStack } from '../shared/Stack';
import { Body1, Heading, SubHeading } from '../shared/typography';
import Wrapper from '../shared/Wrapper';

interface Section2Props {}

const Section2: React.FC<Section2Props> = ({}) => {
  return (
    <Section my='12'>
      <Wrapper>
        <Stack justify='space-between' spacing='4'>
          <VStack
            overflow='hidden'
            pos='relative'
            justify='space-between'
            p='8'
            h='450px'
            bg='brand.2'
            w={['100%', '100%', '100%', '65%']}
            bgGradient='linear(to-r, brand.2, transparent)'
            borderRadius='3xl'
            color='white'
          >
            <Heading maxW='520px' zIndex={1}>
              Kiosk - Everywhere You Live, Open Bombi Account Very Easy.
            </Heading>
            <HStack justify='center'>
              <VStack align='flex-start'>
                <SubHeading>Free</SubHeading>
                <Body1 color='gray' maxW='100px'>
                  No admin fee needed
                </Body1>
              </VStack>
              <VStack align='flex-start'>
                <SubHeading>Free</SubHeading>
                <Body1 color='gray' maxW='100px'>
                  No admin fee needed
                </Body1>
              </VStack>
            </HStack>
            <PrimaryButton>Join Now</PrimaryButton>
            {/* <Image
              display={['none', 'none']}
              src='/images/bombi-card-blue.png'
              alt='bombi card blue'
              position='absolute'
              right='-20px'
              transform='auto'
            /> */}
          </VStack>
          <Stack
            w={['100%', '100%', '100%', '35%']}
            minH='450px'
            borderRadius='3xl'
            p='8'
            align='flex-start'
            bg='brand.1'
            borderBottomRightRadius='0'
            bgGradient='linear(to-r, brand.1, brand.1)'
            color='white'
            pos='relative'
            pb='0'
            overflow='hidden'
          >
            <Heading maxW='315px'>
              In House - Open Bombi Account In Branch
            </Heading>
            <Image
              pos={['relative', 'absolute']}
              top='35%'
              right='0'
              src='/images/atm.png'
              alt='atm'
              width={223}
              height={372}
            />
          </Stack>
        </Stack>
      </Wrapper>
    </Section>
  );
};
export default Section2;
