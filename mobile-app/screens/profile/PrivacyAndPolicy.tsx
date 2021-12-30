import React, { useEffect } from 'react';

import BackButtonNative from '../../components/shared/button/BackButtonNative';
import ButtonWithText from '../../components/shared/button/ButtonWithText';
import Header from '../../components/shared/Header';
import SafeAreaView from '../../components/shared/SafeAreaView';
import { Spacer } from '../../components/shared/spacer';
import Text from '../../components/shared/Text';
import View from '../../components/shared/View';
import useHideBottomTab from '../../hooks/useHideBottomTab';
import { ProfileScreenProps } from '../../types/navigation';

interface PrivacyAndPolicyProps
  extends ProfileScreenProps<'PrivacyAndPolicy'> {}

const PrivacyAndPolicy: React.FC<PrivacyAndPolicyProps> = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = useHideBottomTab(navigation.getParent());
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <SafeAreaView p='m' flex={1}>
      <Header title='Privacy and Policy' />

      <View>
        <Text mt='xl' mb='l' fontSize={30} fontWeight='600'>
          Lorem Ipsum
        </Text>
        <Text color='gray' mb='m' fontSize={14} fontWeight='500'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Text color='gray' mb='m' fontSize={14} fontWeight='500'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Text color='gray' mb='m' fontSize={14} fontWeight='500'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Text color='gray' mb='m' fontSize={14} fontWeight='500'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
      </View>
      <Spacer />
      <ButtonWithText bg='primary' label='I Agree' />
    </SafeAreaView>
  );
};
export default PrivacyAndPolicy;
