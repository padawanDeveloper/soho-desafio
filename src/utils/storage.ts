import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (value: string, itemName: string) => {
  try {
    await AsyncStorage.setItem(itemName, value);
  } catch (e) {
    Alert.alert('Problemas con el token', 'Problema inesperado');
  }
};

export const getItem = async (itemName: string) => {
  try {
    await AsyncStorage.getItem(itemName);
  } catch (e) {
    Alert.alert('Problemas obteniendo el valor', 'Problema inesperado');
  }
};
