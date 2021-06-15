import React from 'react';
import { View } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { observer } from 'mobx-react';

// styles
import styleGenerator from './styles';
import {H2} from "..";

interface titleBarProps {
  title: string;
}
const TitleBar = (props: titleBarProps) => {
  const styles = styleGenerator();
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.captionContainer}>
        <H2 style={styles.caption}>{props.title}</H2>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default observer(TitleBar);
