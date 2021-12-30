import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/shared/button/Button';
import Card from '../../../components/shared/Card';
import ScrollView from '../../../components/shared/ScrollView';
import { PRIMARY_TINT_COLOR } from '../../../constants/Colors';
import { BodyEmphasized } from '../../../components/shared/typography';

const helpLinks = [
  {
    id: '1',
    title: 'About Us',
    icon: 'information-circle',
  },
  {
    id: '2',
    title: 'Invite Friends',
    icon: 'person-add',
  },
  {
    id: '3',
    title: 'Terms and Conditions',
    icon: 'document-text',
  },
  {
    id: '4',
    title: 'Privacy and Policy',
    icon: 'shield-checkmark',
  },
  {
    id: '5',
    title: 'Help Center',
    icon: 'help-circle',
  },
  {
    id: '6',
    title: 'Contact Us',
    icon: 'ios-remove-circle',
  },
];

interface HelpProps {}

const Help: React.FC<HelpProps> = () => {
  const navigation = useNavigation<any>();
  const handleNavigation = (index: number) => {
    switch (index) {
      case 0:
        navigation.navigate('AboutUs');
        break;
      case 1:
        navigation.navigate('InviteFriends');
        break;
      case 2:
        navigation.navigate('TermsAndConditions');
        break;
      case 3:
        navigation.navigate('PrivacyAndPolicy');
        break;
      case 4:
        navigation.navigate('HelpCenter');
        break;
      case 5:
        navigation.navigate('ContactUs');
        break;
    }
  };
  return (
    <ScrollView p='m' showsVerticalScrollIndicator={false}>
      {helpLinks.map((link, index) => (
        <LinkItem
          key={link.id}
          {...link}
          index={index}
          handleNavigation={handleNavigation}
        />
      ))}
    </ScrollView>
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
        <Ionicons name={icon} size={24} color={PRIMARY_TINT_COLOR} />
      </Card>
      <BodyEmphasized>{title}</BodyEmphasized>
    </Button>
  );
};

export default Help;
