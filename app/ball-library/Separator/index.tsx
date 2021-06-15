import React from 'react';
import { View } from 'react-native';

// styles
import styleGenerator from './styles';

interface seperatorProps {
  isVertical?: boolean;
  marginVertical?: number;
  marginHorizontal?: number;
  haveMargin?: boolean;
}

const Separator = (props: seperatorProps) => {
  const { isVertical, marginVertical, marginHorizontal, haveMargin } = props;
  const styles = styleGenerator(haveMargin);
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

export default Separator;
