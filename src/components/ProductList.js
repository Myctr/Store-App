import React from 'react';
import {FlatList, View} from 'react-native';
import ProductListItem from './ProductListItem';

const ProductList = props => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={props.data}
        renderItem={({item}) => {
          return (
            <ProductListItem
              item={item}
              editProductClicked={props.editProductClicked}
              productClicked={props.productClicked}
            />
          );
        }}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductList;
