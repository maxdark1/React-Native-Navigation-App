import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { NavigationApp } from '../screens/navigationApp';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pagina1Screen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#B55500',
        },
        cardStyle: {
          backgroundColor: 'gray'
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Pagina1Screen" options= {{title:"Steel Technologies"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options= {{title:"Menu"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options= {{title:"Aprobacion Pronosticos"}} component={Pagina3Screen} />
      <Stack.Screen name="NavigationApp" options= {{title:"App de Navegacion"}} component={NavigationApp} />
    </Stack.Navigator>
  );
}