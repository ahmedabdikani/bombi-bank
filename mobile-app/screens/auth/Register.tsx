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
import { AuthStackScreenProps } from '../../types/navigation';
import BendingLine from '../../components/shared/BendingLine';

interface RegisterProps extends AuthStackScreenProps<'Register'> {}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  return (
    <SafeAreaView flex={1} px='m' pb='m'>
      <View>
        <LargeTitle mb='m'>High Street</LargeTitle>
        <LargeTitleEmphasized>Cryptocurrency</LargeTitleEmphasized>
        <BendingLine />
        <LargeTitle>Bank</LargeTitle>
      </View>
      <Spacer />
      <View>
        <FormField
          leftIcon={
            <Ionicons name='person' size={24} color={PRIMARY_TINT_COLOR} />
          }
          placeholder='Your name'
        />
        <FormField
          leftIcon={
            <Ionicons name='call' size={24} color={PRIMARY_TINT_COLOR} />
          }
          placeholder='Phone number'
        />
        <FormField
          leftIcon={
            <Ionicons name='mail' size={24} color={PRIMARY_TINT_COLOR} />
          }
          placeholder='Email'
        />
        <FormField
          leftIcon={
            <Ionicons name='lock-closed' size={24} color={PRIMARY_TINT_COLOR} />
          }
          rightIcon={<Ionicons name='eye' size={24} color='gray' />}
          placeholder='Password'
        />
      </View>

      <Spacer />
      <ButtonWithText
        onPress={() => navigation.navigate('Verify')}
        bg='primary'
        label='Register'
      />
      <View direction='row' mt='l' alignS='center'>
        <Body>Already have an account?</Body>
        <Button ml='s' onPress={() => navigation.navigate('Login')}>
          <BodyEmphasized>Login</BodyEmphasized>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default Register;
