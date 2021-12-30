import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/shared/button/Button';
import Card from '../../../components/shared/Card';
import { BodyEmphasized } from '../../../components/shared/typography';
import View from '../../../components/shared/View';
import { PRIMARY_TINT_COLOR } from '../../../constants/Colors';

const settingLinks = [
  {
    id: '1',
    title: 'Reference Currency',
    icon: 'dollar',
  },
  {
    id: '2',
    title: 'Account and Security',
    icon: 'lock',
  },
];

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  const navigation = useNavigation<any>();

  const handleNavigation = (index: number) => {
    switch (index) {
      case 0:
        navigation.navigate('ReferenceCurrency');
        break;
      case 1:
        navigation.navigate('AccountAndSecurity');
        break;
    }
  };
  return (
    <View p='m'>
      {settingLinks.map((link, index) => (
        <LinkItem
          key={link.id}
          {...link}
          index={index}
          handleNavigation={handleNavigation}
        />
      ))}
    </View>
  );
};

interface LinkItemProps {
  title: string;
  icon: any;
  handleNavigation: (index: number) => void;
  index: number;
}

const LinkItem: React.FC<LinkItemProps> = ({
  title,
  icon,
  index,
  handleNavigation,
}) => {
  return (
    <Button
      onPress={() => handleNavigation(index)}
      direction='row'
      align='center'
      mb='m'
    >
      <Card size={48} place='center' mr='m'>
        <FontAwesome name={icon} size={24} color={PRIMARY_TINT_COLOR} />
      </Card>
      <BodyEmphasized>{title}</BodyEmphasized>
    </Button>
  );
};

export default Settings;
