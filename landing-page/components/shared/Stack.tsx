import React from 'react';
import { Stack as DefaultStack, StackProps } from '@chakra-ui/react';

const Stack: React.FC<StackProps> = (props) => (
  <DefaultStack
    direction={['column', 'column', 'column', 'row']}
    align={['center', 'center', 'center', 'flex-start']}
    spacing={['4', '4', '8', '8']}
    justify={['center', 'center', 'center', 'flex-start']}
    {...props}
  />
);

const HStack: React.FC<StackProps> = (props) => (
  <Stack direction='row' align='center' {...props} />
);

const VStack: React.FC<StackProps> = (props) => (
  <Stack direction='column' {...props} />
);

export default Stack;
export { HStack, VStack };
