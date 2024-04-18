import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Event, Events, NewEvent} from '../../screens';

const Stack = createNativeStackNavigator();
const EventsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Event" component={Event} />
      <Stack.Screen name="New Event" component={NewEvent} />
    </Stack.Navigator>
  );
};

export default EventsStackNavigator;
