import React from 'react';
import {View, Text} from 'react-native';
import {NavigationApp} from './src/screens/navigationApp';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  )
}

export default App;
