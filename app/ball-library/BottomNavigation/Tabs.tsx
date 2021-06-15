import React from 'react';
import { View } from 'react-native';
import { Observer } from 'mobx-react-lite';

// local
import Tab from './Tab';
// styles
import { tabsStyle as styleGenerator } from './styles';
import { tabUI } from './UI';
// types.ts
import { tabsProps } from './types';
const Tabs = (props: tabsProps) => {
  const { tab, initialScreenIndex } = props;
  const styles = styleGenerator();
  tabUI.setActiveTab(initialScreenIndex ? initialScreenIndex : 0);
  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          {tab.map(item => {
            return (
              <Tab
                tabTitle={item.tabTitle}
                tabIcon={item.tabIcon}
                index={item.index}
                key={`${item.index}`}
                onPress={item.onPress}
              />
            );
          })}
        </View>
      )}
    </Observer>
  );
};

export default Tabs;
