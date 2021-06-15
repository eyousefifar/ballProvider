import React, { ReactNode } from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const BallIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'ballIcon',
  'ballIcon.ttf'
);
let Icon: ReactNode = null;
interface iconProps {
  type: 'antDesign' | 'evilIcons' | 'feather' | 'ion' | 'simpleLine' | 'fontAwesome' | 'ball';
  name: string;
  size: number;
  color: string;
  style?: object;
}
export default (props: iconProps) => {
  switch (props.type) {
    case 'antDesign':
      Icon = require('react-native-vector-icons/AntDesign').default;
      return (
        <Icon
          name={props.name}
          size={props.size}
          color={props.color}
          style={props.style}
        />
      );
    case 'evilIcons':
      Icon = require('react-native-vector-icons/EvilIcons').default;
      return (
        <Icon
          name={props.name}
          size={props.size}
          color={props.color}
          style={props.style}
        />
      );
    case 'feather':
      Icon = require('react-native-vector-icons/Feather').default;
      return (
        <Icon
          name={props.name}
          size={props.size}
          color={props.color}
          style={props.style}
        />
      );
    case 'ion':
      Icon = require('react-native-vector-icons/Ionicons').default;
      return (
        <Icon
          name={props.name}
          size={props.size}
          color={props.color}
          style={props.style}
        />
      );
    case 'simpleLine':
      Icon = require('react-native-vector-icons/SimpleLineIcons').default;
      return (
        <Icon
          name={props.name}
          size={props.size}
          color={props.color}
          style={props.style}
        />
      );
    case 'fontAwesome':
      Icon = require('react-native-vector-icons/FontAwesome').default;
      return (
          <Icon
              name={props.name}
              size={props.size}
              color={props.color}
              style={props.style}
          />
      );
    case 'ball':
      return (
        <BallIcon
          name={props.name}
          size={props.size}
          color={props.color}
          style={props.style}
        />
      );
    default:
      throw Error('icon type should be valid');
  }
};
