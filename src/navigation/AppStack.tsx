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
    [PRODUCTS]: Products,
    [PRODUCT_DETAIL]: ProductDetail,
  },
});
