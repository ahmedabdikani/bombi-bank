import Color from 'color';
import React from 'react';
import { Dimensions } from 'react-native';

import RadialGradient from '../../components/shared/gradient/RadialGradient';
import Header from '../../components/shared/Header';
import { Image } from '../../components/shared/image';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import { Body, LargeTitleEmphasized } from '../../components/shared/typography';
import View from '../../components/shared/View';
import { PRIMARY_TINT_COLOR } from '../../constants/Colors';
import { useHideBottomTab } from '../../hooks/useHideBottomTab';
import { ProfileScreenProps } from '../../types/navigation';

const { height } = Dimensions.get('screen');
const colorShades = [0.6, 0.5, 0.3].map((opacity) =>
  Color(PRIMARY_TINT_COLOR).lighten(opacity).hex()
);

interface AboutUsProps extends ProfileScreenProps<'AboutUs'> {}

const AboutUs: React.FC<AboutUsProps> = ({ navigation }) => {
  useHideBottomTab(navigation.getParent());
  return (
    <View flex={1}>
      <RadialGradient
        SvgProps={{
          height,
        }}
        colors={colorShades}
      />

      <SafeAreaView pb='m' flex={1} px='m'>
        <Header title='About Us' color='black' />
        <Spacer flex={0.6} />
        <View align='center'>
          <Image
            mb='m'
            h={90}
            w={62}
            resizeMode='contain'
            source={require('../../assets/images/logo.png')}
          />
          <LargeTitleEmphasized color='black'>Bombi Bank.</LargeTitleEmphasized>
        </View>
        <Spacer />
        <View align='center'>
          <Body mb='l' textAlign='center' color='gray' w='70%'>
            Copyright 2021 Bombi software Ltd, all rights reserved.
          </Body>
          <Body color='gray'>htps://Bombi.com</Body>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default AboutUs;
