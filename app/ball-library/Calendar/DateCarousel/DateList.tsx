import React from 'react';
import { View } from 'react-native';
import { DataProvider, RecyclerListView } from 'recyclerlistview';

import { observer } from 'mobx-react-lite';
// local
import DateItem from './DateItem';
import { jMonths, getJDayInMonth, generateMonthDaysArray } from './util';
// styles
import { dateListStyle as styleGenerator } from './styles';

// types.ts

// store
import store from './store';
import { IDateList } from './types';
import timeClass from "../../time";
const DateList = (props: IDateList) => {
  const { data, mode } = props;
  const { styles, layout, scrollViewProps } = styleGenerator(mode);
  const dataProvider = new DataProvider((r1, r2) => r1 !== r2);
  const indexOfMonth = jMonths.indexOf(store.selectedMonth);
  const listData = () => {
    if (mode === 'month') {
      return jMonths;
    } else {
      const jDays = getJDayInMonth(timeClass.currentYear, indexOfMonth + 1);
      return generateMonthDaysArray(jDays);
    }
  };
  const rowRenderer = (type, data) => {
    return (
      <View style={styles.transformFixer}>
        <DateItem value={data} mode={mode} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <RecyclerListView
        isHorizontal
        dataProvider={dataProvider.cloneWithRows(listData())}
        layoutProvider={layout}
        rowRenderer={rowRenderer}
        scrollViewProps={scrollViewProps}
      />
    </View>
  );
};

export default observer(DateList);
