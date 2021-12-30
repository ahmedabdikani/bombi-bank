import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import BackButtonNative from '../../components/shared/button/BackButtonNative';
import Button from '../../components/shared/button/Button';
import Card from '../../components/shared/Card';
import { Image } from '../../components/shared/image';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import Text from '../../components/shared/Text';
import View from '../../components/shared/View';
import { useHideBottomTab } from '../../hooks/useHideBottomTab';
import { ProfileScreenProps } from '../../types/navigation';
import Header from '../../components/shared/Header';
import { Body } from '../../components/shared/typography';

const socialApps = [
  require('../../assets/images/twitter.png'),
  require('../../assets/images/facebook.png'),
  require('../../assets/images/skype.png'),
  require('../../assets/images/telegram.png'),
];

interface InviteFriendsProps extends ProfileScreenProps<'InviteFriends'> {}

const InviteFriends: React.FC<InviteFriendsProps> = ({ navigation }) => {
  useHideBottomTab(navigation.getParent());
  return (
    <View flex={1}>
      <Card px='l' pb='l' borderRadius={[0, 's']}>
        <SafeAreaView />
        <Header title='Invite Friends' />
        <Body my='xl' w='60%' textAlign='center' alignS='center'>
          Invite Your Friends by sharing you referral code
        </Body>

        <Card bg='#F7F9FB' p='m' direction='row' justify='space-between'>
          <Body color='primary'>komaralam29</Body>
          <Ionicons name='copy' color='#24325C' size={24} />
        </Card>
      </Card>
      <Spacer flex={0.5} />
      <View align='center'>
        <Body>Or share to social media</Body>
        <View direction='row' mt='m'>
          {socialApps.map((app, index) => (
            <Button key={index}>
              <Image source={app} size={50} resizeMode='contain' ml='m' />
            </Button>
          ))}
        </View>
      </View>
      <Spacer />
    </View>
  );
};
export default InviteFriends;
