import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileStackParamList } from '../types/navigation';
import Profile from '../screens/profile/Profile';
import ProfileEdit from '../screens/profile/ProfileEdit';
import TermsAndConditions from '../screens/profile/TermsAndConditions';
import PrivacyAndPolicy from '../screens/profile/PrivacyAndPolicy';
import InviteFriends from '../screens/profile/InviteFriends';
import AboutUs from '../screens/profile/AboutUs';
import ContactUs from '../screens/profile/ContactUs';
import HelpCenter from '../screens/profile/HelpCenter';
import AccountAndSecurity from '../screens/profile/AccountAndSecurity';
import ReferenceCurrency from '../screens/profile/ReferenceCurrency';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

interface ProfileNavigatorProps {}

const ProfileNavigator: React.FC<ProfileNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='ProfileEdit' component={ProfileEdit} />
      <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} />
      <Stack.Screen name='PrivacyAndPolicy' component={PrivacyAndPolicy} />
      <Stack.Screen name='InviteFriends' component={InviteFriends} />
      <Stack.Screen name='AboutUs' component={AboutUs} />
      <Stack.Screen name='ContactUs' component={ContactUs} />
      <Stack.Screen name='HelpCenter' component={HelpCenter} />
      <Stack.Screen name='AccountAndSecurity' component={AccountAndSecurity} />
      <Stack.Screen name='ReferenceCurrency' component={ReferenceCurrency} />
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
