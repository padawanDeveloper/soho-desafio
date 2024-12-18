import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

export const AuthLoadingScreen: React.FC = () => {
  return (
    <View style={styles.indicatorStyle}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AuthLoadingScreen;
