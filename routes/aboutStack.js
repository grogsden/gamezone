import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about'
import Header from '../shared/header';
import HeaderBg from '../shared/headerBg';

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({ navigation }) => (    
    <Navigator
        headerMode='float'        
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#ccc', height: 80 },
        }}
    >
        <Screen
            name='About'
            component={About}
            options={{
                headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
                headerBackground: () => <HeaderBg/>,
                           
            }}
        />
      
    </Navigator>
);