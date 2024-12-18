import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SIGNIN } from '../constants/screens';
import { Signin } from '../screens';

export const AuthStack = createNativeStackNavigator({
  screens: {
    [SIGNIN]: {
      screen: Signin,
      options: {
        headerShown: false,
      },
    },
  },
});
