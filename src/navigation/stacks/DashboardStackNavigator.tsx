import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, Event} from '../../screens';

const Stack = createNativeStackNavigator();
const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Event" component={Event} />
    </Stack.Navigator>
  );
};

export default DashboardStackNavigator;
