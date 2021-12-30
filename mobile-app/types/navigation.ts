/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
 import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Wallet from './wallet';
 
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList {}
   }
 }
 
export type RootStackParamList = {
   Root: NavigatorScreenParams<AuthStackParamList>;
   NotFound: undefined;
 };
export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    Verify: undefined;
    Confirm: undefined;
    ForgotPassword: undefined;
    RootTab: NavigatorScreenParams<RootTabParamList>;
}
export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  NotificationStack:NavigatorScreenParams<NotificationStackParamList> ;
  WalletStack: NavigatorScreenParams<WalletStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

export type NotificationStackParamList = {
  Notification: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Balance: undefined;
  Exchange: undefined;
};


export type ProfileStackParamList = {
  Profile: undefined;
  ProfileEdit: undefined;
  TermsAndConditions: undefined;
  PrivacyAndPolicy: undefined;
  InviteFriends: undefined;
  AboutUs: undefined;
  ContactUs: undefined;
  HelpCenter: undefined;
  AccountAndSecurity: undefined;
  ReferenceCurrency: undefined;
};

export type WalletStackParamList = {
  Main: undefined;
  Other: {wallet:Wallet};
};


 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
  
 export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
   BottomTabScreenProps<RootTabParamList, Screen>,
   NativeStackScreenProps<AuthStackParamList>
 >;
 
 export type ProfileScreenProps<Screen extends keyof ProfileStackParamList> = CompositeScreenProps< 
    NativeStackScreenProps<ProfileStackParamList, Screen>,
    BottomTabScreenProps<RootTabParamList>
  >;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>>;

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, Screen>,
  BottomTabScreenProps<RootTabParamList>
>;

export type WalletStackScreenProps<Screen extends keyof WalletStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<WalletStackParamList, Screen>,
  BottomTabScreenProps<RootTabParamList>
>;