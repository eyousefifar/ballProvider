import {StyleSheet} from 'react-native';
import {Colors} from '../../../ball-library';
import {IconSize} from "../../../ball-library/theme";

export default () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal:12,

      // backgroundColor:'red',

      // marginBottom:8
    },
    collapsedContainer: {
      flexDirection: 'row-reverse',

      height: 56,

      alignItems: 'center',
      justifyContent: 'space-between',

    },
  });
  const icon = {
    size: IconSize.type_1,
    color: Colors.darkGrey,
  };
  return {styles, icon};
};
