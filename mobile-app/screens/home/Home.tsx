import { Ionicons } from '@expo/vector-icons';
import React, { ComponentProps, FC, useMemo, useState } from 'react';
import CardDetails from '../../components/CardDetails';

import Button from '../../components/shared/button/Button';
import Card from '../../components/shared/Card';
import { Image } from '../../components/shared/image';
import SafeAreaView from '../../components/shared/SafeAreaView';
import ScrollView from '../../components/shared/ScrollView';
import Separator from '../../components/shared/spacer/Divider';
import {
  Body,
  BodyEmphasized,
  CaptionEmphasized,
  HeadingEmphasized,
} from '../../components/shared/typography';
import View from '../../components/shared/View';
import TransactionHeader from '../../components/transaction/TransactionHeader';
import TransactionItem from '../../components/transaction/TransactionItem';
import Layout from '../../constants/Layout';
import { transactions, cryptocurrencies } from '../../data/mock';
import { HomeStackScreenProps } from '../../types/navigation';
import currencyConverter from '../../utils/currencyConverter';

interface HomeProps extends HomeStackScreenProps<'Home'> {}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [x, setX] = useState(0);
  const [width, setWidth] = useState(1);

  return (
    <ScrollView>
      <SafeAreaView flex={1}>
        <View mx='m'>
          <CardDetails />
        </View>
        <View mx='m' mt='m' direction='row' justify='space-between'>
          <HomeButton
            title='Deposit'
            bg='tertiary'
            iconName='arrow-down-circle-outline'
            onPress={() => navigation.navigate('Balance')}
          />
          <HomeButton
            bg='primary'
            iconName='arrow-up-circle-outline'
            title='Withdraw'
          />
        </View>
        <Separator my='m' mx='m' />
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          scrollEventThrottle={16}
          horizontal
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={({ nativeEvent }) => {
            const { x } = nativeEvent.contentOffset;
            setX(x);
          }}
          onContentSizeChange={(width, height) => {
            setWidth(width);
          }}
        >
          {cryptocurrencies.map((wallet, index) => (
            <CardItem key={index} wallet={wallet} />
          ))}
        </ScrollView>
        <Pagination x={x} width={width} />
        <View mx='m' mt='m' flex={1}>
          <TransactionHeader />
          {transactions.map((transaction, index) => (
            <TransactionItem key={index} transaction={transaction} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

interface PaginationProps {
  x: number;
  width: number;
}

const Pagination: React.FC<PaginationProps> = ({ x, width }) => {
  const length = useMemo(() => 3, []);
  const dots = useMemo(() => Array(length).fill(0), []);
  const percentage = useMemo(() => (x / width) * length, [x, width]);

  return (
    <View justify='center' direction='row' mt='m'>
      {dots.map((_, index) => {
        const active = useMemo(
          () => Math.round(percentage) === index,
          [percentage, index]
        );
        const bg = useMemo(() => (active ? 'tertiary' : 'lightgrey'), [active]);
        const w = useMemo(() => (active ? 12 : 8), [active]);

        return <View key={index} mr='s' w={w} size={6} isRound bg={bg} />;
      })}
    </View>
  );
};

interface CardItemProps {
  wallet: typeof cryptocurrencies[number];
}

const CardItem: React.FC<CardItemProps> = ({ wallet }) => {
  const { balance, icon, currency } = wallet;
  const convertedBalance = currencyConverter(
    currency,
    parseInt(balance)
  ).toFixed(8);

  return (
    <Card mr='m' w={180} h={143} p='m'>
      <View mb='s' direction='row' align='center'>
        <Image size={36} source={icon} resizeMode='contain' />
        <Body ml='m' color='gray'>
          {currency}/USD
        </Body>
      </View>
      <View direction='row' align='center' mt='m'>
        <HeadingEmphasized mb='s'>{balance}</HeadingEmphasized>
        <CaptionEmphasized color='gray'> USD</CaptionEmphasized>
      </View>
      <Body color='gray'>{`${convertedBalance} ${currency}`}</Body>
    </Card>
  );
};

interface HomeButtonProps {
  title: string;
  iconName: ComponentProps<typeof Ionicons>['name'];
}

const HomeButton: FC<HomeButtonProps & ComponentProps<typeof Button>> = (
  props
) => {
  const { title, iconName, ...rest } = props;
  return (
    <Button
      flex={1}
      direction='row'
      borderRadius='s'
      h={50}
      mr='m'
      place='center'
      {...rest}
    >
      <Ionicons size={24} name={iconName} color={'white'} />
      <BodyEmphasized color='white' ml='s'>
        {title}
      </BodyEmphasized>
    </Button>
  );
};
export default Home;
