import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import axios from 'axios';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import NewProductButton from '../components/NewProductButton';

const HomeView = props => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');

  //FIRST FETCH
  useEffect(() => {
    axios
      .get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/')
      .then(res => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch(err => {
        alert(err);
      });
  }, []);

  //FILTERATION LISTENER
  useEffect(() => {
    filterProduct();
  }, [selectedCategory, search]);

  //EVENTS
  const productClicked = id => {
    props.navigation.navigate('DetailsView', {
      id: id,
    });
  };
  const editProductClicked = id => {
    alert('Product Edit');
  };
  const newProductClicked = () => {
    props.navigation.navigate('CreateView');
  };

  const filterProduct = () => {
    let filteredProducts = products;
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => {
        return product.category == selectedCategory;
      });
    }
    if (search) {
      filteredProducts = filteredProducts.filter(product => {
        return product.name.includes(search);
      });
    }
    setFilteredProducts(filteredProducts);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.topBar}>
        <Logo />
        <SearchBar value={search} setValue={setSearch} />
      </View>
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        all
      />
      <ProductList
        data={filteredProducts}
        productClicked={productClicked}
        editProductClicked={editProductClicked}
      />
      <NewProductButton onPress={newProductClicked} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default HomeView;
