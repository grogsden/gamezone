import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import { AboutStack } from './aboutStack';
import About from '../screens/about'


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name ="Home" component={HomeStack} />
        <Drawer.Screen name ="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
