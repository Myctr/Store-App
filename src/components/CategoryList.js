import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View, StyleSheet} from 'react-native';
import CategoryListItem from './CategoryListItem';
import axios from 'axios';

const CategoryList = props => {
  const [categories, setCategories] = useState([
    {
      id: 0,
    },
  ]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get('https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {props.all && (
          <TouchableOpacity
            onPress={() => {
              props.setSelectedCategory('');
            }}>
            <CategoryListItem
              data={{name: 'All'}}
              selected={props.selectedCategory == ''}
            />
          </TouchableOpacity>
        )}

        {categories.map(category => {
          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => {
                props.setSelectedCategory(category.name);
              }}>
              <CategoryListItem
                data={category}
                selected={props.selectedCategory == category.name}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
export default CategoryList;
