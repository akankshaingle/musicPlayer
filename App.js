import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/Navigation/AppNavigator';

export default function App() {
  return (<NavigationContainer>
    <AppNavigator />
  </NavigationContainer>)

}


