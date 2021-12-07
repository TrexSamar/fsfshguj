import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './navigator/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (

       <NavigationContainer>

          <BottomTabNavigator/>

       </NavigationContainer> 

  )
}

 
 
