import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { SIGNIN } from '../constants/screens';

const Page = () => (
  <SafeAreaView style={styles.container}>
    <Text>Screen2</Text>
  </SafeAreaView>
);

export const AuthStack = createNativeStackNavigator({
  screens: {
    [SIGNIN]: Page,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
