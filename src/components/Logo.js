import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Logo = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>UPayments Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
});

export default Logo;
