import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import Svg, {
  Defs,
  Stop,
  LinearGradient as LG,
  Rect,
  LinearGradientProps,
} from 'react-native-svg';

import View from '../View';

// export { themes }

interface Props
  extends Exclude<LinearGradientProps, LinearGradientProps['id']> {
  colors: [string, string, ...string[]];
  opacity?: number;
  offset?: number;
  style?: ViewProps['style'];
}

const LinearGradient: React.FC<Props> = ({
  children,
  colors,
  opacity = 0.9,
  offset,
  style,
  ...props
}) => {
  return (
    <View w='100%' h='100%'>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <LG id='myGradient' {...props}>
            {colors.map((color, index) => {
              const _offset =
                offset || Math.floor((index + 1 / colors.length) * 100) + '%';
              return (
                <Stop
                  stopOpacity={opacity}
                  stopColor={color}
                  key={index}
                  offset={_offset}
                />
              );
            })}
          </LG>
        </Defs>
        <Rect
          x={0}
          y={0}
          width={'100%'}
          height={'100%'}
          fill='url(#myGradient)'
        />
      </Svg>
      {children}
    </View>
  );
};

export default LinearGradient;
