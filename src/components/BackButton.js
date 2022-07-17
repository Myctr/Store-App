import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const BackButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>ᐸ</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {position: 'absolute', top: 3, left: 3, zIndex: 1},
  text: {fontSize: 20},
});
export default BackButton;
