import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchWeatherData} from '../state/Home/actions';

const ErrorScreen = ({getLocation}) => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.6,
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 50,
            color: 'rgba(0,0,0,0.7)',
            fontWeight: '600',
            marginLeft: 30,
            width: '80%',
          }}>
          Something Went Wrong at out End
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => getLocation()}
        style={{
          borderColor: 'rgba(0,0,0,0.7)',
          borderWidth: 1,
          justifyContent: 'center',
          marginTop: 100,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{margin: 15, marginHorizontal: 40}}>RETRY</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ErrorScreen;
