import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PRODUCTS, PRODUCT_DETAIL } from '../constants/screens';
import { Products, ProductDetail } from '../screens';
import { Product } from '../types/Product';

interface IPdoductScreen {
  product: Product;
}

export type RootStackParamList = {
  [PRODUCT_DETAIL]: IPdoductScreen;
  [PRODUCTS]: undefined;
};

export const AppStack = createNativeStackNavigator({
  screens: {
    [PRODUCTS]: {
      screen: Products,
      options: {
        title: 'SOHO APP',
      },
    },
    [PRODUCT_DETAIL]: {
      screen: ProductDetail,
      options: {
        title: '',
        headerBackTitle: 'Atras',
      },
    },
  },
});
