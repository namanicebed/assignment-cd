import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
const Loader = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={require('../assets/loader.gif')} resizeMode="center" />
    </View>
  );
};
export default Loader;
