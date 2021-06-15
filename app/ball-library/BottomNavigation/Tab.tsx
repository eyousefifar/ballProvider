import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { Caption } from 'react-native-paper';
import { Observer, observer } from 'mobx-react-lite';
// local
import Icon from '../Icon';
// styles
import { tabStyle as styleGenerator } from './styles';
import { tabUI } from './UI';
// types.ts
import { tabProps } from './types';

const Tab = (props: tabProps) => {
  const { index, onPress, tabTitle, tabIcon } = props;
  const isActiveTab:boolean = tabUI.activeTabIndex === index;

  const { styles, color, size, activeColor } = styleGenerator();
  const onTabPress = () => {
    tabUI.setActiveTab(index);
    onPress(index);

    // TODO : use there

  };
  return (
    <TouchableOpacity
      style={[styles.container, isActiveTab && styles.activeBorder]}
      onPress={onTabPress}
      activeOpacity={1}
    >
      <Icon
        type={tabIcon.type}
        name={tabIcon.name}
        color={isActiveTab ? activeColor : color}
        size={size}
      />
      <Text style={[styles.caption, isActiveTab ? {color:activeColor} : {color}]}>{tabTitle}</Text>
    </TouchableOpacity>
  );
};

export default observer(Tab);
