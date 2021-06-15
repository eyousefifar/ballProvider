import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Touchable from '../Touchable';

// styles
import { backButtonStyle as styleGenerator } from './styles';

// types.ts
import { backButtonProps } from './types';

const BackButton = (props: backButtonProps) => {
  const { styles, iconSize } = styleGenerator();
  const onBackPress = () => {
    const { onPress } = props;
    if (onPress) {
      onPress();
    }
  };
  return (
    <View style={styles.container}>
      <Icon name={'arrow-right'} color={'black'} size={iconSize} />
      {/* 
          using react button with position absolute to make the 
          touch and styles less buggy and easier to manage
      */}
      <Touchable onPress={onBackPress} rippleColor={'darkGrey'} />
    </View>
  );
};

export default BackButton;
