import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Heading, {HeadingVariant} from '../heading/Heading';
import {COLORS} from '../../utils/constants';
import {styles} from './Header.styles';

export interface HeaderProps {
  screenTitle?: string;
}
const Header: React.FC<HeaderProps> = ({screenTitle}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Heading variant={HeadingVariant.Small} color={COLORS.white}>
          {screenTitle}
        </Heading>
      </View>
    </SafeAreaView>
  );
};
export default Header;
