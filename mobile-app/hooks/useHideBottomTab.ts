import {  useLayoutEffect } from "react";
import { RootTabScreenProps } from "../types/navigation";

const useHideBottomTabListener = (navigation:RootTabScreenProps<any>['navigation']) => {

  navigation.setOptions({ tabBarVisible: false });

  return () => {
    navigation.setOptions({ tabBarVisible: true });
  }

}

export const useHideBottomTab = (navigation:RootTabScreenProps<any>['navigation'])=>{
  useLayoutEffect(()=>{
    const unsubscribe = useHideBottomTabListener(navigation);
    return ()=>{
      unsubscribe();
    }
  },[navigation])
};

export default useHideBottomTabListener;