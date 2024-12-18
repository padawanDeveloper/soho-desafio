import React, { useState } from 'react';
import { View, Text, Button, Alert, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './styles';
import { AppStackParamList } from '../../navigation';
import { AUTH } from '../../constants/screens';
import { AuthUser } from '../../types/User';
import InputField from '../../components/Inputs/InputField';

const validationSchema = Yup.object({
  username: Yup.string().required('El nombre de usuario es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});

const SignInScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const _handleSubmit = async (values: AuthUser) => {
    const { username, password } = values;
    try {
      navigation.navigate(AUTH);
    } catch (error) {
      Alert.alert(
        'Error al autenticar el usuario',
        'Usuario o contraseña incorrecta',
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={_handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }: any) => (
          <View style={styles.form}>
            <InputField
              label="Nombre de usuario"
              value={values.username}
              onChange={handleChange('username')}
              onBlur={handleBlur('username')}
              error={touched.username && errors.username}
              placeholder="Nombre de usuario"
            />

            <InputField
              label="Contraseña"
              value={values.password}
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password}
              placeholder="Contraseña"
              secureTextEntry
            />

            <Button
              disabled={loading}
              title="Iniciar sesión"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default SignInScreen;
