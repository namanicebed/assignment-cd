import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';


const ForcastScreen = () => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello World</Text>
    </View>
  );
};
export default ForcastScreen;
