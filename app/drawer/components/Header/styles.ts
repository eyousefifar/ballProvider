import {StyleSheet} from 'react-native';
import {Colors} from '../../../ball-library';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {BorderWidth} from "../../../ball-library/theme";

export default () => {
  const styles = StyleSheet.create({
    container: {
      height: 128,
      width: '100%',
      flexDirection: 'row-reverse',

      // paddingHorizontal: 4
    },
    profileInfoContainer: {
      flex: 5,
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    editProfileContainer: {
      flex: 2,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingVertical: 4,

      marginLeft: 12
    },
    editProfileButton: {
      width: 120,
      height: 32,
      borderRadius: 16,
      borderWidth: BorderWidth.type_4,
      borderColor: 'white',
      marginLeft: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },

    whiteRightAlign: {
      marginRight: 12,
      textAlign: 'right',
      color: 'white',
      fontSize: 15,
      fontFamily: 'IRANSansMobile(FaNum)',
    },
    whiteRightAlign2: {
      marginRight: 12,
      textAlign: 'right',
      color: 'white',
      fontSize: 12,
      fontFamily: 'IRANSansMobile(FaNum)',
    },
    authContainer: {
      flex: 7,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: 12,
    },
    authButton: {
      width: 125,

      left:6,
      bottom:2,

      backgroundColor:Colors.whiteBall,

    },

    image_container_box: {
      marginRight: 8,
    },
    user_info_container_parent: {
      width: '100%',
      height: 110,
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
    user_info_container: {
      flex: 1,
      paddingHorizontal: 8,
      // alignItems: 'center',
      justifyContent: 'center',
    },
    user_name_text: {
      color: Colors.whiteBall,
      textAlign: 'right',
    },
    user_phone_text: {
      color: Colors.whiteBall,
      textAlign: 'right',

      // li
    },
  });
  const avatar = {
    size: 56,
    color: 'white',
  };
  const icon = {
    size: 18,
    color: 'white',
  };
  const rippleColor = Colors.lightGrey;
  return {styles, avatar, icon, rippleColor};
};
