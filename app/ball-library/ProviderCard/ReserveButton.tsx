import React from 'react';
import { View } from 'react-native';
import Button from '../Button';
import { showSportReserve } from './nav';
// styles
import { reserveButtonStyle } from './styles';

// types.ts
import { IReserveButton } from './types';
const ReserveButton = (props: IReserveButton) => {
  const { type, id, onReservePress } = props;
  const styles = reserveButtonStyle();
  const onPress = async () => {
    if ('sportComplex' === 'sportComplex') {
      onReservePress && onReservePress();
    } else {
      await showSportReserve('sport', 'test');
    }
  };
  return (
    <View style={styles.container}>
      <Button
        onPress={onPress}
        style={styles.button}
        mode={'contained'}
        fullRadius
        size={'small'}
        rippleColor={'grey'}
      >
        {'رزرو'}
      </Button>
    </View>
  );
};

export default ReserveButton;
