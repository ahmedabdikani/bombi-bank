import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Balance from '../screens/home/Balance';
import Exchange from '../screens/home/Exchange';
import Home from '../screens/home/Home';
import { HomeStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

interface HomeStackNavigatorProps {}

const HomeStackNavigator: React.FC<HomeStackNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Balance' component={Balance} />
      <Stack.Screen name='Exchange' component={Exchange} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
