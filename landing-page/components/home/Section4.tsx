import { Spacer } from '@chakra-ui/react';
import React from 'react';

import MobileAppLinks from '../MobileAppLinks';
import Image from '../shared/Image';
import Section from '../shared/Section';
import Stack, { VStack } from '../shared/Stack';
import { LargeHeading } from '../shared/typography';
import Wrapper from '../shared/Wrapper';

interface Section4Props {}

const Section4: React.FC<Section4Props> = ({}) => {
  return (
    <Section my='12'>
      <Wrapper p='0'>
        <VStack minH='512px' align='stretch' justify='flex-end'>
          <Stack
            pos='relative'
            bottom='0'
            mt='auto'
            align='center'
            borderRadius={{
              md: '0',
              lg: '3xl',
            }}
            bg='brand.2'
            minH='362px'
            color='white'
            pt='4'
          >
            <Spacer flex={0.1} />
            <VStack px='8'>
              <LargeHeading
                maxW='466px'
                textAlign={{
                  md: 'center',
                  lg: 'left',
                }}
              >
                Bombi Bank on your Mobile Phone
              </LargeHeading>
              <MobileAppLinks size='lg' />
            </VStack>
            <Spacer flex={1} />
            <Image
              bottom='0'
              right={{
                md: 0,
                lg: '8',
              }}
              pos={{
                md: 'relative',
                lg: 'absolute',
              }}
              src='/images/home-screen.png'
              alt='phone'
              width={337}
              height={511}
            />
          </Stack>
        </VStack>
      </Wrapper>
    </Section>
  );
};
export default Section4;
