import React from 'react';
import Button from '../../Button';
import { observer } from 'mobx-react';

// types.ts
import { IDateItem } from './types';
import { Colors } from '../../theme';
// styles
import store from './store';
const DateItem = (props: IDateItem) => {
  const {
    value,

    mode
  } = props;
  const dateItem = `${value}`;
  const disabled = false;
  const selected =
    mode === 'month' ? value === store.selectedMonth : value === store.day;
  const color = disabled
    ? Colors.lightGrey
    : selected
    ? Colors.primaryPurple
    : 'black';
  const onPress = () => {
    if (mode === 'month') {
      store.setMonth(dateItem);
    } else {
      store.setDay(parseInt(dateItem));
    }
  };
  return (
    <Button
      mode={'text'}
      size={'small'}
      rippleColor={'grey'}
      onPress={onPress}
      color={color}
      disabled={disabled}
    >
      {dateItem}
    </Button>
  );
};

export default observer(DateItem);
