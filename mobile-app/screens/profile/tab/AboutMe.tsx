import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Card from '../../../components/shared/Card';
import { Body, BodyEmphasized } from '../../../components/shared/typography';
import View from '../../../components/shared/View';
import { PRIMARY_TINT_COLOR } from '../../../constants/Colors';

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = ({}) => {
  const color = PRIMARY_TINT_COLOR;
  return (
    <View m='l'>
      <View direction='row' align='center' mb='l'>
        <Card size={48} place='center'>
          <FontAwesome name='id-card-o' size={24} color={color} />
        </Card>
        <View ml='m'>
          <Body color='gray'>Nickname</Body>
          <BodyEmphasized>komaralam</BodyEmphasized>
        </View>
      </View>
      <View direction='row' align='center' mb='l'>
        <Card size={48} place='center'>
          <FontAwesome name='calendar-o' size={24} color={color} />
        </Card>
        <View ml='m'>
          <Body color='gray'>Day of birth</Body>
          <BodyEmphasized>19 November 1998</BodyEmphasized>
        </View>
      </View>
      <View direction='row' align='center' mb='l'>
        <Card size={48} place='center'>
          <FontAwesome name='phone' size={24} color={color} />
        </Card>
        <View ml='m'>
          <Body color='gray'>Phone number</Body>
          <BodyEmphasized>+018373127863</BodyEmphasized>
        </View>
      </View>
      <View direction='row' align='center' mb='l'>
        <Card size={48} place='center'>
          <FontAwesome name='flag' size={24} color={color} />
        </Card>
        <View ml='m'>
          <Body color='gray'>Country</Body>
          <BodyEmphasized>+Indonesia</BodyEmphasized>
        </View>
      </View>
      <View direction='row' align='center' mb='l'>
        <Card size={48} place='center'>
          <FontAwesome name='map-marker' size={24} color={color} />
        </Card>
        <View ml='m'>
          <Body color='gray'>Address</Body>
          <BodyEmphasized>
            St. Avenue 244, San Fransisco, California
          </BodyEmphasized>
        </View>
      </View>
    </View>
  );
};

export default AboutMe;
