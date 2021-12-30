import React from 'react';
import { HStack } from '@chakra-ui/react';

import { Body2 } from './typography';
import Image from './Image';

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <HStack>
      <Image
        src='/images/logo.png'
        alt='logo'
        height={26}
        width={26}
        objectFit='contain'
      />
      <Body2 color='brand.2' fontWeight='bold'>
        Bombi Bank
      </Body2>
    </HStack>
  );
};
export default Logo;
