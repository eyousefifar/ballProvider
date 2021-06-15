import { StyleSheet } from 'react-native';
import {Colors, Radius} from '../theme';

export default () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 35,
      flexDirection: 'row-reverse',
      borderRadius: Radius.typeButton_4,
      // borderWidth: BorderWidth.type_4,
      alignSelf: 'center',
      overflow: 'hidden',
    },
    switch: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    maleBackground: {
      backgroundColor: Colors.maleBlue
    },
    femaleBackground: {
      backgroundColor: Colors.femalePink
    },
    selectedText: {
      color: 'white'
    },
    text: {
      color: 'black'
    }
  });
  const lightGray = Colors.lightGrey;
  return { styles, lightGray };
};
