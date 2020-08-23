import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
  Animated,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Styles from '../Styles';

const height = Dimensions.get('window').height;

const ForcastScreen = () => {
  const home = useSelector((state) => state.home);

  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  function startAnimation() {
    Animated.timing(animation, {
      toValue: 0,
      timing: 500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  }

  function _renderItem({item}) {
    return (
      <View>
        <View style={Styles.listItemStyle}>
          <Text style={[Styles.textStyle, {marginLeft: 30}]}>{item.date}</Text>
          <Text style={[Styles.textStyle, {marginRight: 30}]}>
            {item.temp.toFixed(0)}°C
          </Text>
        </View>
        <View style={Styles.lineStyle} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View
        style={{
          flex: 0.6,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: animation,
        }}>
        <Text style={[Styles.textStyle, {fontSize: 60}]}>
          {home.data.todayData.temp.toFixed(0)}°C
        </Text>
        <Text
          style={[
            Styles.textStyle,
            {
              marginTop: 10,
              fontSize: 25,
              letterSpacing: 2,
            },
          ]}>
          {home.data.todayData.city}
        </Text>
      </Animated.View>
      <View
        style={{
          flex: 0.4,
          justifyContent: 'flex-end',
        }}>
        <FlatList
          data={home.data.nextFiveDayTemp}
          renderItem={_renderItem}
          bounces={false}
          ListHeaderComponent={<View style={Styles.lineStyle} />}
        />
      </View>
    </SafeAreaView>
  );
};
export default ForcastScreen;
