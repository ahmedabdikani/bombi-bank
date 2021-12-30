import React from 'react';
import Svg, { Polygon, Text } from 'react-native-svg';
import { useThemeColors } from '../hooks/useThemeColor';
import Button from './shared/button/Button';
import { LargeTitleEmphasized } from './shared/typography';
import View from './shared/View';

const numbers = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  '0',
  'clear',
];

interface NumpadProps {
  onPress?: (value: string) => void;
  showDot?: boolean;
}

const Numpad: React.FC<NumpadProps> = ({ onPress, showDot = false }) => {
  const {
    tint: { primary },
  } = useThemeColors();

  return (
    <View direction='row' wrap='wrap' mt='l' align='center'>
      {numbers.map((number, index) => (
        <Button
          onPress={() => onPress?.(number)}
          basis='33%'
          h={36}
          place='center'
          mb='l'
          key={index}
        >
          {index === numbers.length - 1 ? (
            <Svg height={24} width={32}>
              <Polygon points='32,24 32,0 10,0 0,12 10,24' fill={primary} />
              <Text x={16} y={12 + 4} fill='white' fontSize='16'>
                x
              </Text>
            </Svg>
          ) : (
            <LargeTitleEmphasized>{number}</LargeTitleEmphasized>
          )}
        </Button>
      ))}
    </View>
  );
};
export default Numpad;
