import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('Click');
        }}>
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D69821',
    padding: 10,
    borderRadius: 20,
    // background: linear-gradient(90deg, #D69821 0%, #FCC201 100%);
    height: 40,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#fff',
  },
});

export default CustomButton;
