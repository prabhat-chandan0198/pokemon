import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import FirstScreen from './FirstScreen';
import Edit from './Edit';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
     
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
      <Stack.Screen name="FirstScreen" component={FirstScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Edit" component={Edit}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}