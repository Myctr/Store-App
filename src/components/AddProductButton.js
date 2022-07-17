import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const AddProductButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>Add Product</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 5,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
  },
  text: {fontSize: 12, color: 'white'},
});
export default AddProductButton;
