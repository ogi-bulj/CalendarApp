import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardStackNavigator, EventsStackNavigator} from './index';
import {Settings} from '../screens';

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Dashboard Stack" component={DashboardStackNavigator} />
      <Tab.Screen name="Events Stack" component={EventsStackNavigator} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
