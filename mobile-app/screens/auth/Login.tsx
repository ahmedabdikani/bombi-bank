import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Button from '../../components/shared/button/Button';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import FormField from '../../components/shared/input/FormField';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import {
  Body,
  BodyEmphasized,
  LargeTitle,
  LargeTitleEmphasized,
} from '../../components/shared/typography';
import View from '../../components/shared/View';
import { PRIMARY_TINT_COLOR } from '../../constants/Colors';
import { useAuthContext } from '../../hooks/useContext';
import { AuthStackScreenProps } from '../../types/navigation';
import BendingLine from '../../components/shared/BendingLine';

interface LoginProps extends AuthStackScreenProps<'Login'> {}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const { login } = useAuthContext();
  return (
    <SafeAreaView flex={1} px='m' pb='m'>
      <View>
        <LargeTitle mb='m'>High Street</LargeTitle>
        <LargeTitleEmphasized>Cryptocurrency</LargeTitleEmphasized>
        <BendingLine />
        <LargeTitle>Bank</LargeTitle>
      </View>
      <Spacer flex={0.5} />
      <View>
        <FormField
          leftIcon={
            <Ionicons name='mail' size={24} color={PRIMARY_TINT_COLOR} />
          }
          placeholder='Phone or email'
        />
        <FormField
          leftIcon={
            <Ionicons name='lock-closed' size={24} color={PRIMARY_TINT_COLOR} />
          }
          rightIcon={<Ionicons name='eye' size={24} color='gray' />}
          placeholder='Password'
        />
      </View>
      <Button align='flex-end'>
        <BodyEmphasized color='gray' textDecorationLine='underline'>
          Forgot password?
        </BodyEmphasized>
      </Button>
      <Spacer />
      <ButtonWithText onPress={login} bg='primary' label='Login' />
      <View direction='row' mt='l' alignS='center'>
        <Body>Don’t have an account?</Body>
        <Button ml='s' onPress={() => navigation.navigate('Register')}>
          <BodyEmphasized>Sign up</BodyEmphasized>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default Login;
