import styled from '@emotion/native';
import React from 'react';
import { ImageProps } from 'react-native';

import { Sizes } from '../../constants/Styles';
import { Image } from './image';

const { icon } = Sizes;

interface IconProps extends ImageProps {
  size?: keyof typeof icon;
}

// const Icon = styled(Image).attrs(({ source }) => ({
//   source,
//   resizeMode: 'contain',
// }))<IconProps>(({ size = 'm' }) => {
//   const height = icon[size];
//   const width = icon[size];
//   return { height, width };
// });

const Icon: React.FC<IconProps> = ({ size = 'm', style, ...props }) => {
  const height = icon[size];
  const width = icon[size];

  return <Image {...props} style={[{ height, width }, style]} />;
};

export default Icon;
