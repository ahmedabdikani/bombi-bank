import { chakra, Container } from '@chakra-ui/react';

const Wrapper = chakra(Container, {
  baseStyle: {
    maxW: 'container.xl',
  },
});

export default Wrapper;
