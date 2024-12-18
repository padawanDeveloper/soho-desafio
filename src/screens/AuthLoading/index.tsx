import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { AppStackParamList } from '../../navigation';
import { USER_TOKEN } from '../../constants/common';
import { ROOT, AUTH } from '../../constants/screens';
import { getItem } from '../../utils/storage';

export const AuthLoadingScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await getItem(USER_TOKEN);
        if (!!value) {
          navigation.replace(ROOT);
        } else {
          navigation.replace(AUTH);
        }
      } catch (e) {
        navigation.replace(AUTH);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.indicatorStyle}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AuthLoadingScreen;
