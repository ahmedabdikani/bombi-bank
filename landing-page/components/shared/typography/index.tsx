import { chakra, Text as DefaultText } from '@chakra-ui/react';

const Text = chakra(DefaultText, {
  baseStyle: {
    // textAlign: ['center', 'center', 'left'],
  },
});

const LargeHeading = chakra(Text, {
  baseStyle: {
    fontSize: ['4xl', '4xl', '5xl'],
    fontWeight: 'bold',
    lineHeight: 1.2,
  },
});

const Heading = chakra(Text, {
  baseStyle: {
    fontSize: ['3xl', '3xl', '4xl'],
    fontWeight: 'bold',
    lineHeight: 1.2,
  },
});

const SubHeading = chakra(Text, {
  baseStyle: {
    fontSize: ['lg', 'lg', 'xl'], //20px
    fontWeight: 'medium',
  },
});

const Caption = chakra(Text, {
  baseStyle: {
    fontSize: 'xs',
  },
});

const Body1 = chakra(Text, {
  baseStyle: {
    fontSize: ['xs', 'xs', 'sm'],
  },
});

const Body2 = chakra(Text, {
  baseStyle: {
    fontSize: ['sm', 'sm', 'md'],
  },
});

export { Caption, Body1, Body2, LargeHeading, Heading, SubHeading };
