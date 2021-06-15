import {StyleSheet} from 'react-native';
import memoize from 'fast-memoize';

export default memoize((scrollView: boolean | undefined) => {
  const size = 86;
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // marginVertical: scrollView ? 64 : 0,
    },
    loading: {
      width: size,
      height: size,
      // padding: 8,
    },
  });
});
