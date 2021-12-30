import React from 'react';
import { Image } from './shared/image';
import {
  Body,
  HeadingEmphasized,
  Subheading,
  Title,
  TitleEmphasized,
} from './shared/typography';
import View from './shared/View';

interface CardDetailsProps {}

const CardDetails: React.FC<CardDetailsProps> = ({}) => {
  return (
    <View p='l' borderRadius='m' h={205} bg='secondary' mt='m'>
      <View direction='row' justify='space-between'>
        <View>
          <Image
            mb='m'
            size={24}
            resizeMode='contain'
            source={require('../assets/images/logo-white.png')}
          />
          <TitleEmphasized color='white'>BOMBI BANK</TitleEmphasized>
        </View>
        <Image
          mb='m'
          h={25}
          w={74}
          resizeMode='contain'
          source={require('../assets/images/visa.png')}
        />
      </View>
      <View align='flex-end' mt='m'>
        <HeadingEmphasized color='white'>{'* * * *    5449'}</HeadingEmphasized>
      </View>
      <View>
        <Body color='white' opacity={0.7} mb='s'>
          Total Asset
        </Body>
        <View direction='row' justify='space-between'>
          <View direction='row'>
            <TitleEmphasized color='white'>2,323.93</TitleEmphasized>
            <Title color='white'> USD</Title>
          </View>
          <Subheading color='white'>Komarudin</Subheading>
        </View>
      </View>
    </View>
  );
};
export default CardDetails;
