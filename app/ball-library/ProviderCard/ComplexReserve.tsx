import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';
import Button from '../Button';
import Icon from '../Icon';
import Touchable from '../Touchable';
import { Caption } from 'react-native-paper';

// styles
import { complexReserveStyle as styleGenerator } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

// types.ts
interface IComplexReserve {
  onHidePress: () => void;
}
const ComplexReserve = (props: IComplexReserve) => {
  const { onHidePress } = props;
  const { styles, icon, rippleColor } = styleGenerator();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon type={'ball'} name={'close'} {...icon} />
        <Touchable onPress={onHidePress} rippleColor={'grey'} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {}}
          mode={'outlined'}
          rippleColor={'grey'}
          size={'big'}
        >
          {'ورزش ۱'}
        </Button>
        <Button
          onPress={() => {}}
          mode={'outlined'}
          rippleColor={'grey'}
          size={'big'}
        >
          {'ورزش ۲'}
        </Button>
      </View>

      <View style={styles.selectorContainer}>
        <BorderlessButton onPress={() => {}} rippleColor={rippleColor}>
          <Icon
            style={styles.icon}
            type={'simpleLine'}
            name={'arrow-right'}
            {...icon}
          />
        </BorderlessButton>
        <Caption>{`${1}/${15}`}</Caption>
        <BorderlessButton onPress={() => {}} rippleColor={rippleColor}>
          <Icon
            style={styles.icon}
            type={'simpleLine'}
            name={'arrow-left'}
            {...icon}
          />
        </BorderlessButton>
      </View>
    </View>
  );
};

export default observer(ComplexReserve);
