import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { observer } from 'mobx-react';
// styles
import { tabWrapperStyle as styleGenerator } from './styles';
// types.ts
import { tabWrapperProps } from './types';
class TabViewWrapper extends React.Component<tabWrapperProps> {
  public componentDidMount() {
    const {
      isFirstViewableTab,
      firstTabIsRendered,
      setFirstTabRendered
    } = this.props;
    if (isFirstViewableTab) {
      if (!firstTabIsRendered) {
        requestAnimationFrame(time => {
          setFirstTabRendered();
        });
      }
    }
  }

  public render() {
    const { children, isFirstViewableTab, firstTabIsRendered } = this.props;
    const { styles, indicatorColor } = styleGenerator();
    if (isFirstViewableTab) {
      return <View style={styles.container}>{children}</View>;
    }
    if (!isFirstViewableTab && firstTabIsRendered) {
      return <View style={styles.container}>{children}</View>;
    }
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size={'large'} color={indicatorColor} />
      </View>
    );
  }
}

export default observer(TabViewWrapper);
