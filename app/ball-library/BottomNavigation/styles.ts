import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import memoize from 'fast-memoize';
import { Colors } from '../theme';

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1
    },
    scrollView: {
      flex: 1,
      transform: [{ scaleX: -1 }]
    }
  });
};

function tabWrapperStyleFn() {
  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP('100%'),
      height: '100%',
      transform: [{ scaleX: -1 }]
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  const indicatorColor = Colors.primaryPurple;
  return { styles, indicatorColor };
}
export const tabWrapperStyle = memoize(tabWrapperStyleFn);

export const tabStyle = memoize(() => {
  const color = Colors.darkGrey;
  const activeColor = Colors.primaryPurple;
  const size = 20;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderBottomWidth: 0,
      borderColor: 'transparent'
    },
    activeBorder: {
      borderBottomWidth: 2,
      borderColor: Colors.primaryPurple
    },
    caption: {
      color,
      fontFamily:'IRANSansMobile(FaNum)'
    }
  });
  return { color, activeColor, styles, size };
});

export function tabsStyle() {
  return StyleSheet.create({
    container: {
      width: widthPercentageToDP('100%'),
      height: (58),
      flexDirection: 'row-reverse',
      backgroundColor: Colors.lightGrey
    }
  });
}
