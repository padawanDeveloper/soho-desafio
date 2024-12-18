import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { AUTH_LOADING, AUTH, ROOT } from '../constants/screens';

export type AppStackParamList = {
  Root: undefined;
  Auth: undefined;
  AuthLoading: undefined;
};

const AppNavigator = createNativeStackNavigator({
  initialRouteName: AUTH_LOADING,
  screens: {
    [AUTH_LOADING]: {
      screen: ActivityIndicator,
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
