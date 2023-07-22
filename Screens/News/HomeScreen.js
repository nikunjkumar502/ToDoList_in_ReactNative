import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />

    </Tab.Navigator>
  )
}

export default HomeScreen;