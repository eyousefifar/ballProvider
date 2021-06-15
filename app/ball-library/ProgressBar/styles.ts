import {StyleSheet} from 'react-native';
import {BorderWidth, Colors} from '../theme';

export default (small: boolean | undefined) => {
  return StyleSheet.create({
    container: {
      height: small ? 4 : 8,
      width: '92%',
      flexDirection: 'row',
      backgroundColor: Colors.lightGrey,
      marginHorizontal: small ? 2 : 4,
      borderRadius: small ? 2 : 4,
    },
    bar: {
      backgroundColor: Colors.primaryPurple,
      borderWidth: BorderWidth.type_4,
      borderColor: Colors.primaryPurple,
      borderRadius: small ? 2 : 4,
    },
    numbers: {
      height: small ? 4 : 8,
      width: '92%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 4,
      marginLeft: 4,
    },
    number: {fontSize: small ? 10 : 12},
  });
};
