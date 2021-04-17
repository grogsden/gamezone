import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about'


const aboutStack = createStackNavigator()

export const AboutStack = () => {
  return (
    <aboutStack.Navigator>
        <aboutStack.Screen name='About' component={About} options={{ title: 'About GameZone' }} />
    </aboutStack.Navigator>
  )
}