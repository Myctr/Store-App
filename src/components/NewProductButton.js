import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const NewProductButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 35,
    height: 35,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  text: {fontSize: 24, fontWeight: 'bold', textAlign: 'center'},
});
export default NewProductButton;
