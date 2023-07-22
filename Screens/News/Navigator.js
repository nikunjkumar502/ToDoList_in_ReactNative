import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NewsOverView from './NewsOverView';

const Drawer = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
    <Drawer.Screen name="HomeScreen" component={HomeScreen}></Drawer.Screen>
    <Drawer.Screen name="NewsOverView" component={NewsOverView}></Drawer.Screen>

  </Drawer.Navigator>
);
}

export default Navigator;