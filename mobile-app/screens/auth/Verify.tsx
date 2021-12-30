import React, { useState } from 'react';
import Svg, { Polygon, Text } from 'react-native-svg';
import Numpad from '../../components/Numpad';
import BendingLine from '../../components/shared/BendingLine';

import Button from '../../components/shared/button/Button';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import {
  Body,
  BodyEmphasized,
  LargeTitleEmphasized,
  Subheading,
  TitleEmphasized,
} from '../../components/shared/typography';
import View from '../../components/shared/View';
import { PRIMARY_TINT_COLOR } from '../../constants/Colors';
import { useThemeColors } from '../../hooks/useThemeColor';
import { AuthStackScreenProps } from '../../types/navigation';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'X'];

interface VerifyProps extends AuthStackScreenProps<'Verify'> {}

const Verify: React.FC<VerifyProps> = ({ navigation }) => {
  const [code, setCode] = useState<string[]>([]);

  const { background, text, secondaryText } = useThemeColors();

  return (
    <SafeAreaView flex={1} px='m' pb='m' bg={background}>
      <View align='flex-start'>
        <View>
          <LargeTitleEmphasized>Verifications</LargeTitleEmphasized>
          <BendingLine />
        </View>
        <Subheading color='gray' mt='m'>
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
        </Subheading>
        <Body color='gray' mt='m'>
          +1 1234 *** ***
        </Body>
      </View>
      <Spacer />
      <View h={44} my='m' direction='row' justify='center'>
        {Array.from({ length: 4 }).map((_, index) => {
          const value = code[index] || '';
          return (
            <View
              key={index}
              borderWidth={[0, 0, 0, 2]}
              w={32}
              mx='m'
              borderColor={value === '' ? secondaryText : text}
              place='center'
            >
              <TitleEmphasized>{value}</TitleEmphasized>
            </View>
          );
        })}
      </View>
      <Spacer />
      <Numpad
        onPress={(value) => {
          if (value === '.') {
            return;
          }
          if (value === 'clear') {
            setCode([]);
            return;
          }
          code.length < 4 ? setCode([...code, value]) : setCode([value]);
        }}
      />
      <Spacer />
      <Button
        onPress={() => navigation.navigate('Confirm')}
        bg='primary'
        alpha={0.2}
        py='m'
        borderRadius='s'
        place='center'
      >
        <BodyEmphasized color='primary'>
          Verify and Create Account
        </BodyEmphasized>
      </Button>
      <View direction='row' mt='l' alignS='center'>
        <Body>Already have an account?</Body>
        <Button ml='s' onPress={() => navigation.navigate('Login')}>
          <BodyEmphasized>Login</BodyEmphasized>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default Verify;
