import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

export type AppStackParamList = {
  Root: undefined;
  Auth: undefined;
  AuthLoading: undefined;
};

const AppNavigator = createNativeStackNavigator({
  initialRouteName: 'AuthLoading',
  screens: {
    AuthLoading: {
      screen: ActivityIndicator,
      options: {
        headerShown: false,
      },
    },
    Auth: {
      screen: AuthStack,
      options: {
        headerShown: false,
      },
    },
    Root: {
      screen: AppStack,
      options: {
        headerShown: false,
      },
    },
  },
});

const RootNavigation = createStaticNavigation(AppNavigator);
export default RootNavigation;
