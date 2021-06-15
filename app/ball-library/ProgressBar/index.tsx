import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import { Caption } from 'react-native-paper';
// styles
import styleGenerator from './styles';
import UIClass from './UI';

interface progressBarProps {
  value: number;
  small?: boolean;
}

class ProgressBar extends React.Component<progressBarProps> {
  private UI = new UIClass();

  public componentDidMount() {
    this.UI.loadProgress();
  }
  public render() {
    const { value, small } = this.props;
    const barWidth = this.UI.barLoaded ? value : 0;
    const emptyWidth = this.UI.barLoaded ? 10 - value : 10;
    const styles = styleGenerator(small);
    return (
      <>
        <View style={styles.container}>
          <View style={[styles.bar, { flex: barWidth }]} />
          <View style={{ flex: emptyWidth }} />
        </View>
        <View style={styles.numbers}>
          <Caption style={styles.number}>{'0'}</Caption>
          <Caption style={styles.number}>{'1'}</Caption>
          <Caption style={styles.number}>{'2'}</Caption>
          <Caption style={styles.number}>{'3'}</Caption>
          <Caption style={styles.number}>{'4'}</Caption>
          <Caption style={styles.number}>{'5'}</Caption>
        </View>
      </>
    );
  }
}

export default observer(ProgressBar);
