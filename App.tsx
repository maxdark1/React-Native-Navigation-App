import React from 'react';
import {View, Text} from 'react-native';
import {NavigationApp} from './src/screens/navigationApp';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';


const App = () => {
  return (
    <NavigationContainer>
      {/*<StackNavigator></StackNavigator> */}
      <MenuLateralBasico></MenuLateralBasico>
    </NavigationContainer>
  )
}

export default App;
