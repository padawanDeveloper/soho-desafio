import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

import { PRODUCTS } from '../constants/screens';

export type RootStackParamList = {
  Home: undefined;
};

const Page = () => (
  <SafeAreaView style={styles.container}>
    <Text>Screen1</Text>
  </SafeAreaView>
);

export const AppStack = createNativeStackNavigator({
  screens: {
    [PRODUCTS]: Page,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
