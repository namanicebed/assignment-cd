import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';


const ForcastScreen = () => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);

  return (
    <View style={{flex: 1}}>
      <View style={{flex:0.6}}>
        
      </View>
      <View style={{flex:0.4}}></View>
    </View>
  );
};
export default ForcastScreen;
