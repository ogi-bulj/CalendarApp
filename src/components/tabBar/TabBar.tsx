import React from 'react';
import {View, Pressable} from 'react-native';
import TextBody, {TextBodyVariant} from '../textBody/TextBody';
import {styles} from './TabBar.styles';
import {COLORS} from '../../utils/constants';

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <View key={index} style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={styles.button}>
              {label === 'Dashboard' && <></>}
              {label === 'Events' && <></>}
              {label === 'Settings' && <></>}
              <TextBody
                variant={TextBodyVariant.Regular}
                color={isFocused ? COLORS.rust : COLORS.slate}
                style={{opacity: isFocused ? 1 : 0.8}}>
                {label}
              </TextBody>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};
export default TabBar;
