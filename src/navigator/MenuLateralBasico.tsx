import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from '../navigator/StackNavigator';
import { SettingsScreens } from '../screens/SettingsScreens';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" options={{title: 'Home'}} component={ Tabs } />
      <Drawer.Screen name="SettingsScreens" options={{title: 'Settings'}} component={SettingsScreens} />
    </Drawer.Navigator>
  );
}