import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './state/store';
import Home from './components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
export default App;
