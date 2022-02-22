import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EventEntity = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.rating}</Text>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202027',
    width: '100%',
    height: 142,
  },
  text: {
    color: 'green',
  },
});
export default EventEntity;
