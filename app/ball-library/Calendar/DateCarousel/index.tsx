import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';

// local
import DateList from './DateList';
import { jMonths } from './util';
// styles

import { dateCarouselStyle as styleGenerator } from './styles';

// types.ts
import { IDateCarousel } from './types';
import TitleBar from '../../TitleBar';

// store
const DateCarousel = (props: IDateCarousel) => {
  const { mode } = props;
  const styles = styleGenerator();

  return (
    <View style={styles.container}>
      <TitleBar title={'تاریخ'} />
      <DateList mode={'month'} data={jMonths} />
      <DateList data={['s']} mode={'day'} />
    </View>
  );
};

export default observer(DateCarousel);
