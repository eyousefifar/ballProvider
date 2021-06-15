import React from 'react';
import { ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react';
import { Colors } from '../theme';

// types.ts
interface IActivity {
  mode: 'text' | 'outlined' | 'contained';
}
const Activity = (props: IActivity) => {
  const { mode } = props;
  const activityColor: string =
    mode === 'contained' ? 'white' : Colors.primaryPurple;
  return (
    <ActivityIndicator
      style={{ transform: [{ scale: 0.8 }] }}
      size={'small'}
      color={activityColor}
    />
  );
};

export default observer(Activity);
