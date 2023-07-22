import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './List';
import Schedule from '../Calendar/Schedule';


const Drawer = createNativeStackNavigator();

function ToDoList() {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="todos" component={List}></Drawer.Screen>
          <Drawer.Screen name = "Schedule" component={Schedule} />
        </Drawer.Navigator>
    )
  }
  
  export default ToDoList;