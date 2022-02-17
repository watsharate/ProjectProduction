import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './StartScreen';
import Login from './Login';
import TestConfig from './TestConfig';
import Home from './Home';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#FFB23E'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerShadowVisible: false,
        headerTitleAlign: 'center', }} >
        <RootStack.Screen name="StartScreen" component={StartScreen} options={{title: ''}} />
        <RootStack.Screen name="Login" component={Login} options={{title: 'LOGIN'}} />
        <RootStack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <RootStack.Screen name="TestConfig" component={TestConfig} options={{title: 'CONFIGURATION'}} />
    </RootStack.Navigator>
);

export default RootStackScreen;