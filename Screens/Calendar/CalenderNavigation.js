import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Schedule from "./Schedule";
const Calender = createNativeStackNavigator();

const CalenderNavigation = () => {
  return (
    <Calender.Navigator screenOptions={{ headerShown: false }}>
      <Calender.Screen name="Schedule" component={Schedule}></Calender.Screen>
    </Calender.Navigator>
  );
};

export default CalenderNavigation;
