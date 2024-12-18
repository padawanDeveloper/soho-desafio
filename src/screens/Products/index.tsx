import React, { useCallback } from 'react';
import { FlatList, SafeAreaView, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppStack';

import styles from './styles';
import ProductCard from './components/ProductCard';
import { Product } from '../../types/Product';
import { PRODUCT_DETAIL } from '../../constants/screens';

const ProductList: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSetCurrentProduct = (item: Product) => {
    navigation.navigate(PRODUCT_DETAIL, { product: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <View style={styles.empty}>
            <ActivityIndicator animating={true} />
          </View>
        }
        data={[
          {
            id: 1,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price: 109.95,
            description:
              'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
            category: "men's clothing",
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: {
              rate: 3.9,
              count: 120,
            },
          },
          {
            id: 2,
            title: 'Mens Casual Premium Slim Fit T-Shirts ',
            price: 22.3,
            description:
              'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
            category: "men's clothing",
            image:
              'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            rating: {
              rate: 4.1,
              count: 259,
            },
          },
        ]}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleSetCurrentProduct(item)}
          />
        )}
        keyExtractor={(item: Product) => String(item.id)}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      />
    </SafeAreaView>
  );
};

export default ProductList;
