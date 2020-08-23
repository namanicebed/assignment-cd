import React, {useEffect} from 'react';
import {Text, View, Platform, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../common/Loader';
import {fetchWeatherData} from '../state/Home/actions';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const Home = () => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);

  useEffect(() => {
    if (Platform.OS == 'android') {
      askPermission();
    } else {
      locationData();
    }
  }, []);

  function askPermission() {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then((data) => {
        console.log(data);
        locationData();
      })
      .catch((err) => {
        Alert.alert(
          'Are you sure?',
          'To get your current location, GPS services should be enabled. Press okay to continue with default location else to get a prompt for location press Enable Location',
          [
            {
              text: 'Enable Location',
              onPress: () => askPermission(),
            },
            {
              text: 'Okay',
              onPress: () => dispatch(fetchWeatherData(28.7041, 77.1025)),
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      });
  }

  function locationData() {
    Geolocation.getCurrentPosition(
      (position) => {
        let {longitude, latitude} = position.coords;
        dispatch(fetchWeatherData(longitude, latitude));
      },
      (error) => {
        console.log(error);
        Alert.alert(
          'Location Error',
          'Cannot fetch the location at the moment!!',
          [
            {
              text: 'OK',
              onPress: () => dispatch(fetchWeatherData(28.7041, 77.1025)),
            },
          ],
          {cancelable: false},
        );
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  }

  if (!home.loading) {
    return <View style={{flex: 1}}>
      
    </View>;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Loader />
    </View>
  );
};
export default Home;
