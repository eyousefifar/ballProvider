import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {BorderWidth, Colors} from '../theme';

export default (haveMargin: boolean | undefined) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: BorderWidth.type_5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
      marginVertical: haveMargin ? 4 : 0,

      // backgroundColor: 'green'
    },
    line: {
      height: BorderWidth.type_5,
      width: '100%',
      backgroundColor: Colors.primaryPurple,
    },
  });
};
