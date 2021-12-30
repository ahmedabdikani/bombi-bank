import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../types/navigation';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Confirm from '../screens/auth/Confirm';
import Verify from '../screens/auth/Verify';
import RootTabNavigator from './RootTabNavigator';
import { useAuthContext } from '../hooks/useContext';

const Auth = createNativeStackNavigator<AuthStackParamList>();

interface AuthNavigatorProps {}

const AuthNavigator: React.FC<AuthNavigatorProps> = ({}) => {
  const { user } = useAuthContext();

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {user ? (
        <Auth.Screen name='RootTab' component={RootTabNavigator} />
      ) : (
        <Auth.Group>
          <Auth.Screen name='Login' component={Login} />
          <Auth.Screen name='Register' component={Register} />
          <Auth.Screen name='ForgotPassword' component={Login} />
          <Auth.Screen name='Confirm' component={Confirm} />
          <Auth.Screen name='Verify' component={Verify} />
        </Auth.Group>
      )}
    </Auth.Navigator>
  );
};
export default AuthNavigator;
