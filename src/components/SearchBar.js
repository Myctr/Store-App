import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import seacth_icon from '../../assets/png/search_icon.png';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        onChangeText={props.setValue}
        placeholder="Search.."
        style={styles.textInput}
        keyboardType={'default'}
        returnKeyType={'search'}
      />
      <View style={styles.searchIcon}>
        <Image style={styles.icon} source={seacth_icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  textInput: {
    width: '85%',
  },
  searchIcon: {width: '15%'},
  icon: {
    width: 30,
    height: 30,
  },
});

export default SearchBar;
