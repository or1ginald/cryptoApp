import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomInput = ({placeholderName}) => {
  return (
    <TextInput
      style={styles.input}
      // onChangeText={onChangeNumber}
      // value={}
      placeholder={placeholderName}
      placeholderTextColor="#fff"
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 23,
    color: '#9BA4AB',
    borderColor: 'transparent',
    backgroundColor: 'rgb(29,29,29)',
    fontFamily: 'Palanquin-Medium',
    // backdropFilter: blur(10),
    // blurRadius={1},
  },
});
