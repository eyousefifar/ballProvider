import React from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Observer } from 'mobx-react';
import { Paragraph } from 'react-native-paper';

// styles
import styleGenerator from './styles';
//local
import UIClass from './UI';
import {BorderWidth} from "../theme";

interface ISwitch {
  border?:boolean,
  onChangeSwitch?(state: 'مرد' | 'زن'): void,
}
const Switch = (props:ISwitch) => {
  const { styles, lightGray } = styleGenerator();
  const UI = new UIClass();
  const {border} = props;

  const onMalePress = () => {
    UI.toggleSwitch('male');
    props.onChangeSwitch ?  props.onChangeSwitch('مرد') : null
  };

  const onFemalePress = () => {
    UI.toggleSwitch('female');
    props.onChangeSwitch ?  props.onChangeSwitch('زن') : null
  };

  return (
    <Observer>
      {() => (
        <View style={[styles.container, border && {borderWidth: BorderWidth.type_4,backgroundColor:'rgba(0,0,0,0.5)'}]}>
          <RectButton
            onPress={onMalePress}
            rippleColor={lightGray}
            style={[styles.switch, UI.isMale && styles.maleBackground]}>
            <Paragraph style={UI.isMale && styles.selectedText}>
              {'آقایان'}
            </Paragraph>
          </RectButton>
          <RectButton
            onPress={onFemalePress}
            rippleColor={lightGray}
            style={[styles.switch, UI.isFemale && styles.femaleBackground]}>
            <Paragraph style={UI.isFemale && styles.selectedText}>
              {'بانوان'}
            </Paragraph>
          </RectButton>
        </View>
      )}
    </Observer>
  );
};

export default Switch;
