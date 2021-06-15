import React from 'react';
import {Text,View} from 'react-native'
import { observer } from 'mobx-react';
// styles
import styleGenerator from './styles';
import {H2} from "..";


interface IEmptyCard {
  mode: 'thin' | 'thick';
  transparent: boolean;
  text: string;
}

const EmptyCard = (props: IEmptyCard) => {
  const { mode, text, transparent } = props;
  const styles = styleGenerator(mode, transparent);

  return (
    <View style={styles.container}>
      <H2 style={styles.whiteText}>{text}</H2>
    </View>
  );
};

export default observer(EmptyCard);
