import React, { useState } from 'react';

import Button from '../../components/shared/button/Button';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import Header from '../../components/shared/Header';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import Separator from '../../components/shared/spacer/Divider';
import Switch from '../../components/shared/Switch';
import { Body, BodyEmphasized } from '../../components/shared/typography';
import View from '../../components/shared/View';
import { useAuthContext } from '../../hooks/useContext';
import { useHideBottomTab } from '../../hooks/useHideBottomTab';
import { ProfileScreenProps } from '../../types/navigation';

interface AccountAndSecurityProps
  extends ProfileScreenProps<'AccountAndSecurity'> {}

const AccountAndSecurity: React.FC<AccountAndSecurityProps> = ({
  navigation,
}) => {
  const [isLocked, setIsLocked] = useState(false);
  const [isPinEnabled, setIsPinEnabled] = useState(true);
  const { logout } = useAuthContext();

  useHideBottomTab(navigation.getParent());

  return (
    <SafeAreaView px='m' flex={1} pb='m'>
      <Header title='Account' />
      <View mt='xl'>
        <View direction='row' justify='space-between'>
          <BodyEmphasized>App Lock</BodyEmphasized>
          <Switch value={isLocked} onValueChange={setIsLocked} />
        </View>
        <View direction='row' justify='space-between'>
          <BodyEmphasized>Hide Account</BodyEmphasized>
          <Switch value={isPinEnabled} onValueChange={setIsPinEnabled} />
        </View>
        <Separator my='m' />
      </View>
      <Spacer flex={0.4} />
      <View align='center'>
        <Body textAlign='center'>
          Make sure you can remember you password, as you’ll need it to sign
          back in
        </Body>
        <Body mt='xl'>ko******@gmail.com</Body>
      </View>
      <Spacer />
      <View align='center'>
        <ButtonWithText alignS='stretch' bg='primary' label='Change Password' />
        <Button onPress={logout} mt='l'>
          <BodyEmphasized>Log Out</BodyEmphasized>
        </Button>
        <Button mt='l'>
          <Body color='gray' textDecorationLine='underline'>
            Delete Account
          </Body>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default AccountAndSecurity;
