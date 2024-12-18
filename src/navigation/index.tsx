import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { AUTH_LOADING, AUTH, ROOT } from '../constants/screens';
import { AuthLoadingScreen } from '../screens';

export type AppStackParamList = {
  [ROOT]: undefined;
  [AUTH]: undefined;
  [AUTH_LOADING]: undefined;
};

const AppNavigator = createNativeStackNavigator({
  initialRouteName: ROOT,
  screens: {
    [AUTH_LOADING]: {
      screen: AuthLoadingScreen,
      options: {
        headerShown: false,
      },
    },
    [AUTH]: {
      screen: AuthStack,
      options: {
        headerShown: false,
      },
    },
    [ROOT]: {
      screen: AppStack,
      options: {
        headerShown: false,
      },
    },
  },
});

const RootNavigation = createStaticNavigation(AppNavigator);
export default RootNavigation;
