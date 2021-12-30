import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import Button from '../../components/shared/button/Button';

import { Image } from '../../components/shared/image';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Body, Heading } from '../../components/shared/typography';
import View from '../../components/shared/View';
import { PRIMARY_TINT_COLOR } from '../../constants/Colors';
import { useThemeColors } from '../../hooks/useThemeColor';
import ProfileTobTapNavigator from '../../navigation/ProfileTapNavigator';
import { ProfileScreenProps } from '../../types/navigation';

interface ProfileProps extends ProfileScreenProps<'Profile'> {}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const { card } = useThemeColors();
  return (
    <SafeAreaView bg={card} flex={1}>
      <View
        bg={card}
        direction='row'
        p='l'
        justify='space-between'
        align='center'
      >
        <View direction='row'>
          <Image
            size={60}
            h={60}
            w={60}
            source={require('../../assets/images/user-profile.png')}
          />
          <View ml='s'>
            <Heading>Komarudin Alamsyah</Heading>
            <Body color='gray'>komar.alam@gmail.com</Body>
          </View>
        </View>
        <Button onPress={() => navigation.navigate('ProfileEdit')}>
          <AntDesign name='edit' size={30} color={PRIMARY_TINT_COLOR} />
        </Button>
      </View>
      <ProfileTobTapNavigator />
    </SafeAreaView>
  );
};
export default Profile;
