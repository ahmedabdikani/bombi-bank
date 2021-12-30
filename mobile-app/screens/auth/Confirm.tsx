import React from 'react';
import BendingLine from '../../components/shared/BendingLine';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import { Image } from '../../components/shared/image';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import {
  LargeTitleEmphasized,
  Subheading,
} from '../../components/shared/typography';
import View from '../../components/shared/View';
import { useAuthContext } from '../../hooks/useContext';

interface ConfirmProps {}

const Confirm: React.FC<ConfirmProps> = ({}) => {
  const { login } = useAuthContext();
  return (
    <SafeAreaView px='m' flex={1} pb='m'>
      <Image
        h={178}
        w={147}
        source={require('.././../assets/images/cards.png')}
      />
      <View mt='xl' align='flex-start'>
        <View>
          <LargeTitleEmphasized>Monthly Payment</LargeTitleEmphasized>
          <BendingLine />
        </View>
        <Subheading color='gray' mt='m'>
          Monthly payment subscription to sketch lorem ipsum dolor sit amet
          conectetur quote sumonere.
        </Subheading>
      </View>
      <Spacer />
      <View
        borderRadius='s'
        bg='primary'
        alpha={0.2}
        alignS='center'
        p='s'
        px='m'
      >
        <LargeTitleEmphasized color='primary'>-$200</LargeTitleEmphasized>
      </View>
      <Spacer />
      <ButtonWithText onPress={login} label='Confirm' bg='primary' />
    </SafeAreaView>
  );
};
export default Confirm;
