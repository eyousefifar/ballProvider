import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {BorderWidth, Colors} from '../theme';

export default () => {
  const size = widthPercentageToDP('86%');
  return StyleSheet.create({
   /* container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      zIndex: 1
    },
    logoutContainer: {
      width: size,
      height: size,
      borderRadius: moderateScale(16),
      alignItems: 'center',
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      borderWidth: BorderWidth.type_4,
      borderColor: Colors.primaryPurple,
      backgroundColor: 'white',
      zIndex: 2
    },
    title: {
      textAlign: 'center',
      height: '36%',
      width: '86%'
    },
    button: {
      width: '86%',
      height: verticalScale(36),
      borderRadius: verticalScale(18),
      backgroundColor: Colors.lightGrey
    },*/

    container: {
      flex: 1,
      backgroundColor: Colors.transparentGrey,
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardContainer: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 12,
      zIndex: 1,
      alignItems: 'center',
      justifyContent:'center',
      overflow:'hidden'
    },
    popup_text:{
      fontFamily:'IRANSansMobile(FaNum)',
      fontSize:15,
    },

    two_buttons:{
      width:'100%',
      height:45,
      flexDirection:'row-reverse',
      justifyContent:'space-between',
      borderWidth: BorderWidth.type_4,
      borderColor:Colors.primaryPurple,
      borderBottomLeftRadius:8,
      borderBottomRightRadius:8,
    },

    reserve_button:{
      width: '50%',
      height:'100%',
      backgroundColor:Colors.whiteBall,
      alignItems:'center',
      justifyContent:'center',
      // position:'absolute',
      // bottom:0

    },
    reserve_button_text:{
      fontFamily:'IRANSansMobile(FaNum)',
      color:Colors.primaryPurple,
      fontSize:14,
      // marginVertical:8
    }
  });
};
