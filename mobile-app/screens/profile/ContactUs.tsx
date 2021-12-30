import React from 'react';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import Header from '../../components/shared/Header';
import FormField from '../../components/shared/input/FormField';

import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import View from '../../components/shared/View';
import { useHideBottomTab } from '../../hooks/useHideBottomTab';
import { ProfileScreenProps } from '../../types/navigation';

interface ContactUsProps extends ProfileScreenProps<'ContactUs'> {}

const ContactUs: React.FC<ContactUsProps> = ({ navigation }) => {
  useHideBottomTab(navigation.getParent());
  return (
    <SafeAreaView flex={1} px='m' pb='m'>
      <Header title='Contact Us' />
      <View mt='xl'>
        <FormField placeholder='Your Address' />
        <FormField placeholder='Your email address' />
        <FormField
          multiline
          numberOfLines={8}
          textAlignVertical='top'
          placeholder='What do you want to tell us about?'
        />
      </View>
      <Spacer />
      <ButtonWithText label='Send' bg='primary' />
    </SafeAreaView>
  );
};
export default ContactUs;
