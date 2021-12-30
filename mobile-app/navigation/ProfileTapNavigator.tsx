import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import About from '../screens/profile/tab/AboutMe';
import Help from '../screens/profile/tab/Help';
import Settings from '../screens/profile/tab/Settings';
import { useThemeColors } from '../hooks/useThemeColor';
import useColorScheme from '../hooks/useColorScheme';

const Tabs = createMaterialTopTabNavigator();

interface ProfileTobTapNavigatorProps {}

const ProfileTobTapNavigator: React.FC<ProfileTobTapNavigatorProps> = ({}) => {
  const {
    card,
    tint: { tertiary },
    secondaryText,
    text,
  } = useThemeColors();
  const isDark = useColorScheme() === 'dark';
  const color = isDark ? text : tertiary;
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: color,
        tabBarInactiveTintColor: secondaryText,
        tabBarIndicatorStyle: { backgroundColor: color, height: 4 },
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: 'capitalize',
        },
      }}
    >
      <Tabs.Screen
        name='AboutMe'
        options={{
          tabBarLabel: 'About Me',
        }}
        component={About}
      />
      <Tabs.Screen name='Settings' component={Settings} />
      <Tabs.Screen name='Help' component={Help} />
    </Tabs.Navigator>
  );
};
export default ProfileTobTapNavigator;
