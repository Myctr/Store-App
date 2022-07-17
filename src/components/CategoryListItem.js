import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoryListItem = props => {
  return (
    <View
      style={props.selected ? styles.selectedItemContainer : styles.container}>
      <Text style={props.selected ? styles.selectedItemText : styles.text}>
        {props.data.name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  selectedItemContainer: {
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  selectedItemText: {color: 'black', fontSize: 14},
});
export default CategoryListItem;
