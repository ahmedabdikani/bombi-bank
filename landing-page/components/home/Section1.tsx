import React from 'react';

import PrimaryButton from '../shared/button/PrimaryButton';
import Image from '../shared/Image';
import Section from '../shared/Section';
import Stack, { VStack } from '../shared/Stack';
import { LargeHeading, Body2, Body1 } from '../shared/typography';
import Wrapper from '../shared/Wrapper';

const ICON_SIZE = 56;
const points = [
  {
    title: 'Automation on Transactional',
    image: '/images/automation.png',
  },
  {
    title: 'Reduction on Complexity',
    image: '/images/complexity.png',
  },
  {
    title: 'The Future on Banking',
    image: '/images/rocket.png',
  },
];

const Section1: React.FC = () => (
  <Section>
    <Wrapper>
      <Stack align='center' justify='space-around'>
        <Image
          src='/images/hand-holding-home-screen.png'
          alt='hand holding home screen'
          width={365}
          height={481}
        />
        <VStack textAlign={['center', 'center', 'left']} align='stretch'>
          <LargeHeading fontWeight='semibold'>The New Reality</LargeHeading>
          <Stack spacing='4'>
            {points.map(({ image, title }) => (
              <VStack
                bg='gray.100'
                borderRadius='md'
                boxSize='100%'
                justify='space-around'
                p='4'
                key={title}
              >
                <Image
                  src={image}
                  alt={title}
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                />
                <Body2 fontWeight='bold' maxW='154px'>
                  {title}
                </Body2>
              </VStack>
            ))}
          </Stack>
          <VStack>
            <Body1 maxW='60ch'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sed
              mauris amet enim, hac. Ultrices sed arcu cursus justo maecenas
              malesuada ac cras ultricies. Aliquam id dolor congue turpis
              praesent massa phasellus ultrices nisl. Sed feugiat vel amet nulla
              molestie.
            </Body1>
            <PrimaryButton>Learn More</PrimaryButton>
          </VStack>
        </VStack>
      </Stack>
    </Wrapper>
  </Section>
);

export default Section1;
