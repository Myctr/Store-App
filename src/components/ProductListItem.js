import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import edit_icon from '../../assets/png/edit_icon.png';

const ProductListItem = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.productClicked(props.item.id);
      }}>
      <Image style={styles.image} source={{uri: props.item.avatar}} />
      <View style={styles.tag}>
        <Text style={styles.tagText}>{props.item.name}</Text>
        <Text style={styles.tagText}>${props.item.price}</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            props.editProductClicked(props.item.id);
          }}>
          <Image source={edit_icon} style={styles.editIconImage} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 250,
    padding: 10,
    justifyContent: 'space-between',
  },
  image: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  tag: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 5,
  },
  tagText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
  },
  editButton: {
    position: 'absolute',
    bottom: 1,
    right: 2,
    width: 20,
    height: 20,
  },
  editIconImage: {
    width: '100%',
    height: '100%',
  },
});
export default ProductListItem;
