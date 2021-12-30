import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Notification from '../screens/notification/Notification';
import { NotificationStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<NotificationStackParamList>();

interface NotificationNavigatorProps {}

const NotificationNavigator: React.FC<NotificationNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Notification' component={Notification} />
    </Stack.Navigator>
  );
};
export default NotificationNavigator;
