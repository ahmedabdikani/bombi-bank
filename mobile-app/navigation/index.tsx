import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';

import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './RootStackNavigator';
import myTheme from '../constants/Theme';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { colors } = myTheme;
  const theme =
    colorScheme === 'dark'
      ? ({
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            background: colors.dark.background,
            card: colors.dark.card,
          },
        } as Theme)
      : DefaultTheme;

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
