import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'montserrat-regular':require('../assets/fonts/Montserrat-Regular.ttf'),
          'montserrat-bold':require('../assets/fonts/Montserrat-Bold.ttf'),
          'montserrat-medium':require('../assets/fonts/Montserrat-Medium.ttf'),
          'montserrat-thin':require('../assets/fonts/Montserrat-Thin.ttf'),
          'montserrat-light':require('../assets/fonts/Montserrat-Light.ttf'),
          'montserrat-black':require('../assets/fonts/Montserrat-Black.ttf'),
          'montserrat-extra-light':require('../assets/fonts/Montserrat-ExtraLight.ttf'),
          'montserrat-semi-bold':require('../assets/fonts/Montserrat-SemiBold.ttf'),
          'montserrat-extrabold':require('../assets/fonts/Montserrat-ExtraBold.ttf'),

        });
      } catch (e) {
        
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
