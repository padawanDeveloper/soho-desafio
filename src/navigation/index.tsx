import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export type RootStackParamList = {
  root: undefined;
};

const Page = () => (
  <SafeAreaView style={styles.container}>
    <Text>Screen</Text>
  </SafeAreaView>
);

const AppNavigator = createNativeStackNavigator({
  screens: {
    root: {
      screen: Page,
      if: () => true,
      options: {
        headerShown: false,
      },
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

const RootNavigation = createStaticNavigation(AppNavigator);
export default RootNavigation;
