import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import SafeAreaView from '../../components/shared/SafeAreaView';
import View from '../../components/shared/View';
import { PRIMARY_TINT_COLOR } from '../../constants/Colors';
import { ProfileScreenProps } from '../../types/navigation';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import { Spacer } from '../../components/shared/spacer';
import FormField from '../../components/shared/input/FormField';
import ScrollView from '../../components/shared/ScrollView';
import { BodyEmphasized } from '../../components/shared/typography';
import { useHideBottomTab } from '../../hooks/useHideBottomTab';
import Picker from '../../components/shared/Picker';
import { countries } from '../../data/mock';

interface ProfileEditProps extends ProfileScreenProps<'ProfileEdit'> {}

const ProfileEdit: React.FC<ProfileEditProps> = ({ navigation }) => {
  useHideBottomTab(navigation.getParent());

  const [countryNames] = React.useState<string[]>(() =>
    countries.map((country) => country.name)
  );

  const [selectedCountry, setSelectedCountry] = React.useState<string>(
    countryNames[0]
  );

  return (
    <ScrollView>
      <SafeAreaView flex={1} pb='l'>
        <View
          size={135}
          bg='primary'
          alignS='center'
          isRound
          borderWidth={3}
          borderColor='primary'
          alpha={0.1}
          place='center'
          borderStyle='dashed'
        >
          <Ionicons name='ios-person' size={30} color={PRIMARY_TINT_COLOR} />
          <BodyEmphasized color='primary' mt='s'>
            Add Photo
          </BodyEmphasized>
        </View>
        <View m='m'>
          <View direction='row'>
            <View flex={1} mr='m'>
              <FormField placeholder='First Name' />
            </View>
            <View flex={1}>
              <FormField placeholder='Last Name' />
            </View>
          </View>
          <FormField value='komaralam' />
          <FormField value='komar.alam@gmail.com' />
          <View direction='row'>
            <View flex={1} mr='m'>
              <FormField
                placeholder='Birth Month'
                rightIcon={
                  <Ionicons
                    name='caret-down'
                    size={20}
                    color={PRIMARY_TINT_COLOR}
                  />
                }
              />
            </View>
            <View flex={1} mr='m'>
              <FormField
                placeholder='Birth Day'
                rightIcon={
                  <Ionicons
                    name='caret-down'
                    size={20}
                    color={PRIMARY_TINT_COLOR}
                  />
                }
              />
            </View>
            <View flex={1}>
              <FormField
                placeholder='Birth Year'
                rightIcon={
                  <Ionicons
                    name='caret-down'
                    size={20}
                    color={PRIMARY_TINT_COLOR}
                  />
                }
              />
            </View>
          </View>
          <FormField
            rightIcon={
              <Ionicons
                name='caret-down'
                size={20}
                color={PRIMARY_TINT_COLOR}
              />
            }
            placeholder='Select Country'
          />
          <Picker
            options={countryNames}
            leftIcon={
              <Ionicons name='flag' size={20} color={PRIMARY_TINT_COLOR} />
            }
          />
          <FormField placeholder='Phone number' />
          <FormField placeholder='Address' />
        </View>
        <Spacer />
        <ButtonWithText
          onPress={() => navigation.goBack()}
          mx='m'
          bg='primary'
          label='Save'
        />
      </SafeAreaView>
    </ScrollView>
  );
};
export default ProfileEdit;
