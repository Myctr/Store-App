import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import CategoryList from '../components/CategoryList';
import AddProductButton from '../components/AddProductButton';
import BackButton from '../components/BackButton';
import axios from 'axios';

const CreateView = props => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const addProductButtonClicked = () => {
    axios
      .post('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products', {
        name: title,
        price: price,
        category: selectedCategory,
        description: desc,
        avatar: imageLink,
        developerEmail: 'mycotur@gmail.com',
      })
      .then(res => {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'HomeView'}],
        });
      })
      .catch(err => {
        alert(err);
      });
  };
  const backButtonClicked = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={backButtonClicked} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView>
          <View style={styles.input}>
            <Text style={styles.placeholder}>{title && 'Product title'}</Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder="Product title"
              style={styles.textInput}
              keyboardType={'default'}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.placeholder}>{price && 'Price'}</Text>
            <TextInput
              value={price}
              onChangeText={setPrice}
              placeholder="Price"
              style={styles.textInput}
              keyboardType={'default'}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.placeholder}>{desc && 'Description'}</Text>
            <TextInput
              value={desc}
              onChangeText={setDesc}
              placeholder="Description"
              style={styles.textInput}
              keyboardType={'default'}
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.placeholder}>{imageLink && 'Image Link'}</Text>
            <TextInput
              value={imageLink}
              onChangeText={setImageLink}
              placeholder="Image Link"
              style={styles.textInput}
              keyboardType={'default'}
            />
          </View>
          <Text style={styles.categoryTitle}>Selected Category:</Text>
          <CategoryList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <AddProductButton onPress={addProductButtonClicked} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {marginHorizontal: 10, flex: 1},
  input: {marginTop: 10},
  textInput: {borderWidth: 1, borderRadius: 10},
  categoryTitle: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default CreateView;
