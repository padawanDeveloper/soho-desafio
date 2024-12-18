import React, { useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
  Text,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../state/store';
import styles from './styles';
import ProductCard from './components/ProductCard';
import { Product } from '../../types/Product';
import { PRODUCT_DETAIL } from '../../constants/screens';
import {
  fetchProducts,
  IState,
} from '../../state/features/products/ProductSlice';
import { setItem } from '../../utils/storage';
import { USER_TOKEN } from '../../constants/common';
import { AUTH } from '../../constants/screens';

interface IMyState {
  product: IState;
}

const ProductList: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const handleBack = async () => {
      await setItem(USER_TOKEN, '');
      navigation.replace(AUTH);
    };

    navigation.setOptions({
      headerLeft: () => <Button onPress={handleBack} title="Salir" />,
    });
  }, [navigation]);

  const products = useSelector((state: IMyState) => state.product.products);
  const isLoading = useSelector((state: IMyState) => state.product.loading);
  const error = useSelector((state: IMyState) => state.product.error);

  const handleSetCurrentProduct = (item: Product) => {
    navigation.navigate(PRODUCT_DETAIL, { product: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <View style={styles.empty}>
            {isLoading ? (
              <ActivityIndicator animating={true} />
            ) : (
              <Text>{error ? 'Ocurrió un error inesperado' : '0 results'}</Text>
            )}
          </View>
        }
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleSetCurrentProduct(item)}
          />
        )}
        keyExtractor={(item: Product) => String(item.id)}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default ProductList;
