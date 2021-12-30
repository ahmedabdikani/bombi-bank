import React from 'react';

import Card from '../../components/shared/Card';
import Header from '../../components/shared/Header';
import { FlatList } from '../../components/shared/list';
import SafeAreaView from '../../components/shared/SafeAreaView';
import {
  BodyEmphasized,
  HeadingEmphasized,
  LargeTitleEmphasized,
  Subheading,
  TitleEmphasized,
} from '../../components/shared/typography';
import View from '../../components/shared/View';
import { useHideBottomTab } from '../../hooks/useHideBottomTab';
import { ProfileScreenProps } from '../../types/navigation';

const currencies = [
  {
    name: 'US Dollar',
    symbol: '$',
  },
  {
    name: 'Euro',
    symbol: '€',
  },
  {
    name: 'Rupiah',
    symbol: 'Rp',
  },
  {
    name: 'Pound',
    symbol: '£',
  },
  {
    name: 'Yen',
    symbol: '¥',
  },
  {
    name: 'Peso',
    symbol: '₱',
  },
  {
    name: 'Dinar',
    symbol: 'د.إ',
  },
  {
    name: 'Bath',
    symbol: '฿',
  },
  {
    name: 'US Singapore',
    symbol: 'S$',
  },
];

interface ReferenceCurrencyProps
  extends ProfileScreenProps<'ReferenceCurrency'> {}

const ReferenceCurrency: React.FC<ReferenceCurrencyProps> = ({
  navigation,
}) => {
  useHideBottomTab(navigation.getParent());

  return (
    <SafeAreaView flex={1}>
      <View px='l'>
        <Header title='Reference Currency' />
        <View direction='row' place='center' mt='m'>
          <Subheading> $ </Subheading>
          <LargeTitleEmphasized>2,323.93</LargeTitleEmphasized>
        </View>
      </View>
      <Card mt='xl' flex={1} px='l' pt='l'>
        <FlatList
          ListHeaderComponent={
            <HeadingEmphasized mb='l'>Recent Activity</HeadingEmphasized>
          }
          data={currencies}
          keyExtractor={(item) => item.name}
        >
          {({ item }) => <CurrencyItem {...item} />}
        </FlatList>
      </Card>
    </SafeAreaView>
  );
};

interface CurrencyItemProps {
  name: string;
  symbol: string;
}

const CurrencyItem: React.FC<CurrencyItemProps> = ({ name, symbol }) => {
  return (
    <View direction='row' align='center' mb='m'>
      <View size={32} place='center' borderRadius='s' bg='primary' alpha={0.2}>
        <TitleEmphasized color='primary'>{symbol}</TitleEmphasized>
      </View>
      <BodyEmphasized ml='m'>{name}</BodyEmphasized>
    </View>
  );
};

export default ReferenceCurrency;
