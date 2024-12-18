import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Product } from '../../../../types/Product';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}>{product.rating?.rate} ★</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductCard);
