import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Welcome.styles';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
    </View>
  );
};

export default Welcome;
