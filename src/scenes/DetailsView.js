import React, {useEffect, useState} from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import axios from 'axios';
import BackButton from '../components/BackButton';

const DetailsView = props => {
  const [product, setProduct] = useState({});

  //FIRST FETCH
  useEffect(() => {
    axios
      .get(
        'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/' +
          props.route.params.id,
      )
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        alert(err);
      });
  }, []);

  const backButtonClicked = () => {
    props.navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={backButtonClicked} />
      <Image source={{uri: product.avatar}} style={styles.productImage} />
      <View style={styles.productCard}>
        <View style={styles.productHeader}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
        </View>
        <Text style={styles.productDesc}>{product.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  productImage: {width: '100%', height: '50%', resizeMode: 'contain'},
  productCard: {
    width: '100%',
    height: '40%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    padding: 10,
    backgroundColor: 'black',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  productTitle: {color: 'white', fontSize: 20, fontWeight: '500'},
  productPrice: {color: 'white', fontSize: 16, fontWeight: '500'},
  productDesc: {color: 'white', fontSize: 12},
});

export default DetailsView;
