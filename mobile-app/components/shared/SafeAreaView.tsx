import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Sizes } from '../../constants/Styles';

const { s } = Sizes.spacing;

import View from './View';

const SafeAreaView: React.FC<any> = ({ style, ...props }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = Math.max(top + s, 60);
  return <View style={[{ paddingTop }, style]} {...props} />;
};
export default SafeAreaView;
