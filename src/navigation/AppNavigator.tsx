import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, MainNavigator} from './index';

const AppNavigator = () => {
  const isSignedIn = true;
  return (
    <NavigationContainer>
      {isSignedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
