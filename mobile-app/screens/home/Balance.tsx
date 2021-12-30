import React from 'react';

import CardDetails from '../../components/CardDetails';
import Button from '../../components/shared/button/Button';
import Header from '../../components/shared/Header';
import { Image } from '../../components/shared/image';
import SafeAreaView from '../../components/shared/SafeAreaView';
import Divider from '../../components/shared/spacer/Divider';
import Switch from '../../components/shared/Switch';
import {
  BodyEmphasized,
  LargeTitleEmphasized,
  Subheading,
  SubheadingEmphasized,
} from '../../components/shared/typography';

import View from '../../components/shared/View';
import { useHideBottomTab } from '../../hooks/useHideBottomTab';
import { HomeStackScreenProps } from '../../types/navigation';

interface BalanceProps extends HomeStackScreenProps<'Balance'> {}

const Balance: React.FC<BalanceProps> = ({ navigation }) => {
  useHideBottomTab(navigation.getParent());
  return (
    <SafeAreaView flex={1} bg='card'>
      <View px='m' borderRadius={[0, 's']} pb='m'>
        <Header title='Balance' />
        <View mb='m' direction='row' align='flex-end' justify='center'>
          <Subheading>$ </Subheading>
          <LargeTitleEmphasized>2,323.93</LargeTitleEmphasized>
        </View>
        <Button
          bg='primary'
          alpha={0.2}
          alignS='center'
          place='center'
          py='m'
          px='l'
          borderRadius='s'
        >
          <BodyEmphasized>Actual Card</BodyEmphasized>
        </Button>
        <Divider my='m' />
        <View direction='row' justify='center'>
          <View align='center'>
            <Button size={56} place='center' isRound bg='primary' alpha={0.2}>
              <Image
                size={24}
                resizeMode='contain'
                source={require('../../assets/images/add-funds.png')}
              />
            </Button>
            <BodyEmphasized mt='m' color='primary'>
              Add Card
            </BodyEmphasized>
          </View>
          <View ml='m' align='center'>
            <Button
              size={56}
              place='center'
              p='l'
              isRound
              bg='primary'
              alpha={0.2}
              onPress={() => navigation.navigate('Exchange')}
            >
              <Image
                size={32}
                resizeMode='contain'
                source={require('../../assets/images/exchange.png')}
              />
            </Button>
            <BodyEmphasized mt='m' color='primary'>
              Exchange
            </BodyEmphasized>
          </View>
        </View>
      </View>
      <View bg='background' p='m' flex={1}>
        <CardDetails />
        <View direction='row' align='center' mt='m' justify='space-between'>
          <SubheadingEmphasized>This Card is Enable</SubheadingEmphasized>
          <Switch value={true} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Balance;
