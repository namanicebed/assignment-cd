import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Image source={require('../assets/loader.gif')} resizeMode="center" />
    </View>
  );
};
export default Loader;
