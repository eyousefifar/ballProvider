import { StyleProp, ViewStyle } from 'react-native';

export interface IButtonProps {
  mode: 'text' | 'outlined' | 'contained';
  size: 'small' | 'medium' | 'big';
  dark?: boolean;
  loading?: boolean;
  icon?: {
    type: 'antDesign' | 'evilIcons' | 'feather' | 'ion' | 'ball' | 'simpleLine';
    name: string;
  };
  style?: StyleProp<ViewStyle>;
  onPress: () => any;
  rippleColor: 'lightGrey' | 'grey' | 'darkGrey';
  disabled?: boolean;
  children: string;
  color?: string;
  fullRadius?: boolean;
}
