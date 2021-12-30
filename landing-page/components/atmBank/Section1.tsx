import React from 'react';
import Image from '../shared/Image';
import Section from '../shared/Section';

interface Section1Props {}

const Section1: React.FC<Section1Props> = ({}) => {
  return (
    <Section alignItems='center' my='12'>
      <Image
        height={591}
        width={1106}
        src='/images/atm-details.png'
        alt='atm details'
      />
    </Section>
  );
};
export default Section1;
