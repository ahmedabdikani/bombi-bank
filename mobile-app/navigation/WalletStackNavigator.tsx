import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WalletStackParamList } from '../types/navigation';
import MainWallet from '../screens/wallet/MainWallet';
import OtherWallet from '../screens/wallet/OtherWallet';

const Stack = createNativeStackNavigator<WalletStackParamList>();

interface WalletNavigatorProps {}

const WalletNavigator: React.FC<WalletNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name='Main' component={MainWallet} />
      <Stack.Screen name='Other' component={OtherWallet} />
    </Stack.Navigator>
  );
};
export default WalletNavigator;
