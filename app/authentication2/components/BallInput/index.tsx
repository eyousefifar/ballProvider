import React from 'react';
import { View } from 'react-native';
import Input from '../authInput';
import { observer } from 'mobx-react-lite';
// styles
import styleGenerator from './styles';
import {Colors} from "../../../ball-library/theme";

interface IBallInput {
  value: string,
  label:string,
  onChangeText(text: string): void,
  secure?:boolean,
  keyboardType:'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad',
  inputBlur : (fieldName : string) => void,
  maxLength?:number,
  fontSize?:number
}


const BallInput = (props: IBallInput) => {
  const styles = styleGenerator();
  const {label,value,onChangeText,secure,keyboardType,inputBlur,maxLength} = props;

  return (
    <View style={styles.inputContainer}>
      <Input
        mode={'flat'}
        themeMode={'default'}
        placeholder={''}
        label={label}
        value={value}
        onChangeText={onChangeText}
        textAlign={'center'}
        numberOfLines={1}
        inputBlur={inputBlur}
        keyboardType={keyboardType}
        selectionColor={Colors.ballNewGray}
        returnKeyType={'done'}
        isSecure={secure}
        maxLength={maxLength}
      />
    </View>
  );
};

export default observer(BallInput);
