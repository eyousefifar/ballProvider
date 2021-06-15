import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import Touchable from '../Touchable';
import { Paragraph } from 'react-native-paper';
import Icon from '../Icon';
import Activity from './Activity';
// styles
import styleGenerator from './styles';
// types.ts
import { IButtonProps } from './types';
const Button = (props: IButtonProps) => {
  const {
    mode,
    size,
    icon,
    style,
    loading,
    dark,
    onPress,
    rippleColor,
    disabled,
    color,
    children,
    fullRadius
  } = props;
  const { styles, iconStyle } = styleGenerator({
    dark,
    disabled,
    mode,
    size,
    color,
    fullRadius
  });
  return (
    <View style={[styles.container, style]}>
      {icon && !loading && (
        <View style={styles.icon}>
          <Icon
            type={icon.type}
            name={icon.name}
            size={iconStyle.size}
            color={iconStyle.color}
          />
        </View>
      )}
      {loading && <Activity mode={mode} />}
      <Paragraph numberOfLines={1} style={styles.text}>
        {children}
      </Paragraph>

      <Touchable onPress={onPress} rippleColor={rippleColor} />
    </View>
  );
};

export default observer(Button);
