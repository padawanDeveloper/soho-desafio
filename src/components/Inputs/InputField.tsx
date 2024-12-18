import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './Styles';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: (e?: any) => void;
  error: string | undefined | boolean;
  placeholder: string;
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default InputField;
