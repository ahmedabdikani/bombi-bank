import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useThemeColors } from '../../hooks/useThemeColor';
import View from './View';

interface BendingLineProps {}

const BendingLine: React.FC<BendingLineProps> = () => {
  const {
    tint: { primary },
  } = useThemeColors();
  return (
    <View>
      <Svg width={'100%'} height={13}>
        <Path
          d='M2 7.93372C30.2692 1.31294 146.082 -2.28728 247 11'
          stroke={primary}
          strokeWidth={4}
          strokeLinecap='round'
        />
      </Svg>
    </View>
  );
};
export default BendingLine;
