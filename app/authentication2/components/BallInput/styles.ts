import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default () => {
  return StyleSheet.create({
    inputContainer: {
      width: widthPercentageToDP('86%'),
      alignSelf: 'center',
    }
  });
};
