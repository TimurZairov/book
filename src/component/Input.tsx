import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {colors} from '../theme/colors';

interface InputProps {
  placeholder?: string;
  setAuthorData?: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
  keyboard?: boolean;
}

const Input = ({placeholder, setAuthorData, value, keyboard}: InputProps) => {
  const textInputHandler = (name: string) => {
    if (setAuthorData) {
      setAuthorData(name);
    }
  };

  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={text => textInputHandler(text)}
      value={value}
      keyboardType={keyboard ? 'numeric' : 'ascii-capable'}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 6,
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 2,
    marginTop: 10,
  },
});

export default Input;
