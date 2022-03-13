/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text
} from 'react-native';
import {Provider} from 'react-redux';
import store from './Assets/Redux/Store';
import FirstScreen from './Assets/Screen/FirstScreen';
import Home from './Assets/Screen/Home';
import Navigation from './Assets/Screen/Navigation';

const App= () => {

  return (
    <Provider store={store}>
    <Navigation/>
    </Provider>
  );
};


export default App;
