import React from 'react';

import View from '../components/shared/View';
import { RootStackScreenProps } from '../types/navigation';
import { Body, TitleEmphasized } from '../components/shared/typography';
import Button from '../components/shared/button/Button';

const NotFound: React.FC<RootStackScreenProps<'NotFound'>> = ({
  navigation,
}) => {
  return (
    <View flex={1} place='center' p='m'>
      <TitleEmphasized>This screen doesn't exist.</TitleEmphasized>
      <Button
        onPress={() => navigation.replace('Root', { screen: 'Login' })}
        mt='m'
        py='m'
      >
        <Body color='#2e78b7'>Go to home screen!</Body>
      </Button>
    </View>
  );
};

export default NotFound;
