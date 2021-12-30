import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Button from '../../components/shared/button/Button';
import Card from '../../components/shared/Card';
import Header from '../../components/shared/Header';
import SafeAreaView from '../../components/shared/SafeAreaView';
import Separator from '../../components/shared/spacer/Divider';
import {
  BodyEmphasized,
  LargeTitleEmphasized,
  Subheading,
  SubheadingEmphasized,
} from '../../components/shared/typography';
import View from '../../components/shared/View';
import { useThemeColors } from '../../hooks/useThemeColor';
import { WalletStackScreenProps } from '../../types/navigation';
import { useHideBottomTab } from '../../hooks/useHideBottomTab';
import TransactionList from '../../components/transaction/TransactionList';
import { transactions } from '../../data/mock';

interface OtherWalletProps extends WalletStackScreenProps<'Other'> {}

const OtherWallet: React.FC<OtherWalletProps> = ({ route, navigation }) => {
  useHideBottomTab(navigation.getParent());

  const { card } = useThemeColors();
  const { wallet } = route.params;

  return (
    <View flex={1}>
      <SafeAreaView bg={card} />
      <Card align='center' p='m' pt={0} borderRadius={[0, 's']}>
        <Header title={wallet.description} />

        <LargeTitleEmphasized>
          {wallet.balance + ' '}
          <SubheadingEmphasized>{wallet.currency}</SubheadingEmphasized>
        </LargeTitleEmphasized>
        <Separator my='l' w={200} />
        <View direction='row'>
          <Button mr='xl' place='center'>
            <View mb='s' p='m' bg='primary' alpha={0.3} isRound>
              <Ionicons name='cash' size={30} color={'#5ABEC4'} />
            </View>
            <BodyEmphasized color='primary'>Add funds</BodyEmphasized>
          </Button>
          <Button place='center'>
            <View mb='s' p='m' bg='primary' alpha={0.3} isRound>
              <Ionicons name='cash' size={30} color={'#5ABEC4'} />
            </View>
            <BodyEmphasized color='primary'>Withdraw</BodyEmphasized>
          </Button>
        </View>
      </Card>
      <View mx='m' flex={1}>
        <TransactionList transactions={transactions} />
      </View>
    </View>
  );
};
export default OtherWallet;
