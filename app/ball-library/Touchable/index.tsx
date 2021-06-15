import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { Colors } from '../theme';

interface touchableProps extends RectButtonProperties {
  rippleColor: 'lightGrey' | 'grey' | 'darkGrey';
}

export default (props: touchableProps) => {
  let color: string;
  switch (props.rippleColor) {
    case 'lightGrey':
      color = Colors.lightGrey;
      break;
    case 'grey':
      color = Colors.grey;
      break;
    case 'darkGrey':
      color = Colors.darkGrey;
      break;
    default:
      throw Error('color must be of valid types.ts');
  }
  return (
    <RectButton
      {...props}
      rippleColor={color}
      style={StyleSheet.absoluteFill}
    />
  );
};
