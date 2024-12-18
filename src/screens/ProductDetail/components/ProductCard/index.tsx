import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './styles';
import { Product } from '../../../../types/Product';

interface IProps {
  product: Product;
}

const ProductDetail: React.FC<IProps> = ({ product }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
