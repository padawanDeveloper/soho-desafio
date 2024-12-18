import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface IProps {
  product: IProduct;
  onPress: () => void;
}

const ProductCard = ({ product, onPress }: IProps) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
    </View>
  </TouchableOpacity>
);

export default memo(ProductCard);
