import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Colors} from '../../../ball-library';
import {BorderWidth, IconSize, Radius} from '../../../ball-library/theme';

const NotificationCardHeight = 60;

export default () => {
  const styles = StyleSheet.create({
    parent_container:{
      width: widthPercentageToDP('86%'),
      height: NotificationCardHeight,

      borderWidth:BorderWidth.type_4,
      borderColor:Colors.whiteBall,
      borderRadius: Radius.typeButton_4,

      alignSelf: 'center',

      overflow: 'hidden',

      // marginVertical:6
    },
    container: {
      width: '100%',
      height: '100%',

      borderRadius: Radius.typeButton_4,


      alignSelf: 'center',
      alignItems:'center',
      justifyContent:'center',

      backgroundColor: 'transparent',

      paddingHorizontal:12,
    },

    right_section:{
      flex:1,
      flexDirection: 'row-reverse',

      alignItems:'center',

      // backgroundColor: 'red'
    },
    message_text:{
      // maxWidth:'60%',
      marginRight:12
    },

    left_section:{
      flexDirection: 'row-reverse',

      alignItems:'center',
    },
    date:{
      marginLeft:12,
      marginRight: 32
    }
  });
  const icon = {
    size: IconSize.type_1,
    color: Colors.primaryPurple,
  };
  return {styles, icon};
};
