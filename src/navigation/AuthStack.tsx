import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const Page = () => (
  <SafeAreaView style={styles.container}>
    <Text>Screen2</Text>
  </SafeAreaView>
);

export const AuthStack = createNativeStackNavigator({
  screens: {
    Signin: Page,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
