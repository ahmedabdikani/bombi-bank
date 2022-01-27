import React from 'react';
import { StackProps, VStack } from '@chakra-ui/react';

import FadeInWhenVisible from './FadeInWhenVisible';

const Section: React.FC<StackProps> = (props) => {
  return (
    <FadeInWhenVisible>
      <VStack
        align='stretch'
        justify='center'
        as='section'
        minH={['max-content', 'max-content', 'max-content', '80vh']}
        {...props}
      />
    </FadeInWhenVisible>
  );
};

export default Section;
