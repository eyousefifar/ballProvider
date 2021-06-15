import {StyleSheet} from 'react-native';
import {BorderWidth, Colors} from '../theme';
import memoize from 'fast-memoize';
import {widthPercentageToDP} from 'react-native-responsive-screen';
export const providerCardStyle = memoize(() => {
  return StyleSheet.create({
    container: {
      width: 120,
      height: 230,
      backgroundColor: 'white',
      borderWidth: BorderWidth.type_4,
      borderRadius: 16,
      marginHorizontal: 2,
      borderColor: Colors.primaryPurple,
      overflow: 'hidden',
    },
  });
});

export const cardStyle = memoize(() => {
  const styles = StyleSheet.create({
    container: {
      width: 120,
      height: 230,
    },
  });
  const rippleColor = Colors.grey;
  return {styles, rippleColor};
});

export const complexReserveStyle = memoize(() => {
  const styles = StyleSheet.create({
    container: {
      width: 120,
      height: 230,
    },
    header: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingHorizontal: 12,
    },
    buttonContainer: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    selectorContainer: {
      flex: 1,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    icon: {
      padding: 8,
    },
  });
  const icon = {
    size: 16,
    color: Colors.primaryPurple,
  };
  const rippleColor = Colors.grey;
  return {styles, icon, rippleColor};
});

function providerImageStyleFn() {
  const imageSize = 108;
  return StyleSheet.create({
    container: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: imageSize,
      height: imageSize,
      borderRadius: imageSize / 2,
    },
  });
}
export const providerImageStyle = memoize(providerImageStyleFn);
function providerInfoStyleFn() {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      width: '96%',
      textAlign: 'center',
    },
  });
}
export const providerInfoStyle = memoize(providerInfoStyleFn);
function reserveButtonStyleFn() {
  // console.log('providerImageStyle');
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: widthPercentageToDP('30%'),
    },
  });
}
export const reserveButtonStyle = memoize(reserveButtonStyleFn);
