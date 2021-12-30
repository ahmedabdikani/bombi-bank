import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Button from '../../components/shared/button/Button';
import Card from '../../components/shared/Card';
import { Image } from '../../components/shared/image';
import { FlatList } from '../../components/shared/list';
import SafeAreaView from '../../components/shared/SafeAreaView';
import Separator from '../../components/shared/spacer/Divider';
import {
  BodyEmphasized,
  Caption,
  CaptionEmphasized,
  Heading,
  LargeTitleEmphasized,
  Subheading,
  SubheadingEmphasized,
} from '../../components/shared/typography';
import View from '../../components/shared/View';
import { useThemeColors } from '../../hooks/useThemeColor';
import Wallet from '../../types/wallet';
import { WalletStackScreenProps } from '../../types/navigation';
import { wallets } from '../../data/mock';

interface MainWalletProps extends WalletStackScreenProps<'Main'> {}

const MainWallet: React.FC<MainWalletProps> = ({ navigation }) => {
  const handleNavigation = (wallet: Wallet) => {
    navigation.navigate('Other', { wallet });
  };

  const { card } = useThemeColors();
  return (
    <View flex={1}>
      <SafeAreaView bg={card} />
      <Card align='center' p='m' pt={0} borderRadius={[0, 's']}>
        <SubheadingEmphasized mb='m'>Main Wallet</SubheadingEmphasized>
        <View direction='row' align='flex-end' mb='m'>
          <Subheading>£</Subheading>
          <LargeTitleEmphasized>1.992.34</LargeTitleEmphasized>
        </View>
        <Separator my='m' w={200} />
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
      <WalletList wallets={wallets} handleNavigation={handleNavigation} />
    </View>
  );
};

interface WalletListProps {
  wallets: Wallet[];
  handleNavigation: (Wallet: Wallet) => void;
}

const WalletList: React.FC<WalletListProps> = ({
  wallets,
  handleNavigation,
}) => {
  return (
    <FlatList
      ListHeaderComponent={
        <Heading my='m' ml='m'>
          Other
        </Heading>
      }
      data={wallets}
      keyExtractor={(item) => item.id}
    >
      {({ item }) => (
        <WalletItem onPress={() => handleNavigation(item)} wallet={item} />
      )}
    </FlatList>
  );
};

interface WalletItemProps {
  wallet: Wallet;
  onPress: () => void;
}

const WalletItem: React.FC<WalletItemProps> = ({ wallet, onPress }) => {
  const { name, balance, currency, description } = wallet;
  return (
    <Button onPress={onPress}>
      <Card p='l' align='center' mx='m' mb='m' direction='row'>
        <Image w={61} h={43} source={require('../../assets/images/card.png')} />
        <View ml='m' flex={1}>
          <CaptionEmphasized mb='s'>{description}</CaptionEmphasized>
          <Caption>{name}</Caption>
        </View>
        <SubheadingEmphasized> {balance} </SubheadingEmphasized>
        <Subheading fontSize={16}>{currency}</Subheading>
      </Card>
    </Button>
  );
};

export default MainWallet;
