import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

import { RootTabParamList } from '../types/navigation';
import View from '../components/shared/View';
import Button from '../components/shared/button/Button';
import ProfileNavigator from './ProfileStackNavigator';
import NotificationNavigator from './NotificationStackNavigator';
import WalletStackNavigator from './WalletStackNavigator';
import { useThemeColors } from '../hooks/useThemeColor';
import { BodyEmphasized } from '../components/shared/typography';
import HomeStackNavigator from './HomeStackNavigator';
import withClassComponent from '../hoc/withClassComponent';

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const AnimatedText = Animated.createAnimatedComponent(
  withClassComponent(BodyEmphasized)
);

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { tabBarVisible = true }: any =
    descriptors[state.routes[state.index].key].options;

  const {
    tint: { primary },
    card,
    tertiaryText,
  } = useThemeColors();

  return (
    <View
      direction='row'
      bg={card}
      style={{
        display: tabBarVisible ? 'flex' : 'none',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 80,
        elevation: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = options.tabBarIcon;
        const isFocused = state.index === index;
        const color = isFocused ? primary : tertiaryText;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: route.params,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // const inputRange = state.routes.map((_, i) => i);
        // const opacity = position.interpolate({
        //   inputRange,
        //   outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        // });

        return (
          <Button
            accessibilityRole='button'
            direction='row'
            place='center'
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flexGrow: 1 }}
          >
            <View>
              {icon?.({
                color: color,
                size: 24,
                focused: isFocused,
              })}
              {options.tabBarBadge && (
                <View
                  bg='primary'
                  size={6}
                  right={6}
                  top={3}
                  isRound
                  pos='absolute'
                />
              )}
            </View>
            {isFocused && (
              <AnimatedText
                entering={FadeIn}
                layout={Layout.springify()}
                exiting={FadeOut}
                ml='s'
                color={color}
              >
                {label}
              </AnimatedText>
            )}
          </Button>
        );
      })}
    </View>
  );
};

const RootTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName='HomeStack'
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen
        name='HomeStack'
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} name='home' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='WalletStack'
        component={WalletStackNavigator}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} name='wallet' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='NotificationStack'
        component={NotificationNavigator}
        options={{
          tabBarLabel: 'Notification',
          tabBarBadge: 22,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} name='notifications' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='ProfileStack'
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused} name='person' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

interface TabBarIconProps {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  focused: boolean;
}

const TabBarIcon: React.FC<TabBarIconProps> = (props) => {
  const { focused, name, ...rest } = props;
  return focused ? (
    <Ionicons size={30} name={name} {...rest} />
  ) : (
    <Ionicons name={(name + '-outline') as any} size={30} {...rest} />
  );
};

export default RootTabNavigator;
