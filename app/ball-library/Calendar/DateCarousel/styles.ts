import { StyleSheet } from 'react-native';
import { LayoutProvider } from 'recyclerlistview';
import memoize from 'fast-memoize';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export const dateCarouselStyle = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: verticalScale(36 * 2 + 16),
      alignSelf: 'center',
      justifyContent: 'space-between'
    }
  });
};

export const dateListStyle = memoize((mode: 'day' | 'month') => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 36
    },
    scrollView: {
      flex: 1,
      transform: [
        {
          scaleX: -1
        }
      ]
    },
    transformFixer: {
      transform: [
        {
          scaleX: -1
        }
      ]
    }
  });
  const layout = new LayoutProvider(
    index => 0,
    (type, dim) => {
      (dim.width =
        mode === 'month'
          ? widthPercentageToDP('20%')
          : widthPercentageToDP('16%')),
        (dim.height = 36);
    }
  );
  const scrollViewProps = {
    style: styles.scrollView
  };
  return { styles, layout, scrollViewProps };
});
