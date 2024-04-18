import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardStackNavigator, EventsStackNavigator} from './index';
import {Settings} from '../screens';
import {Header, TabBar} from '../components';

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        header: props => <Header screenTitle={props.route.name} />,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Dashboard" component={DashboardStackNavigator} />
      <Tab.Screen name="Events" component={EventsStackNavigator} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
