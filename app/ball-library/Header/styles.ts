import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Colors} from '../theme';

export const fullHeaderStyle = (
  backgroundColor: 'white' | 'primary' | 'transparent' | undefined,
) => {
  const chooseBackground = () => {
    switch (backgroundColor) {
      case 'primary':
        return Colors.primaryPurple;
      case 'white':
        return 'white';
      case 'transparent':
        return 'rgba(0,0,0,0)';
      default:
        return 'rgba(0,0,0,0)';
    }
  };
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'flex-start',
      zIndex: 9999, // make it to be on top,
    },
    animatedHeaderContainer: {
      minWidth: 32,
      height: 32,
      flexDirection: 'row-reverse',
      alignItems:'center',
      backgroundColor: Colors.headerColor,
      borderRadius: 16,
      overflow: 'hidden',
      zIndex: 99999,
      elevation: 2,
    },
    iconContainer: {
      width: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginRight: 8,
      marginLeft: 8 + 6,
    },
    topPadding: {
      height: 56,
      width: widthPercentageToDP('100%'),
      backgroundColor: chooseBackground(),
      zIndex: 0,
    },
  });
  const iconSize = 18;
  return {styles, iconSize};
};
export const backButtonStyle = () => {
  const styles = StyleSheet.create({
    container: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
  });
  const iconSize = 18;
  return {styles, iconSize};
};
