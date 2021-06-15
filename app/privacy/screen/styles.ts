import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP,
    heightPercentageToDP
} from 'react-native-responsive-screen';
import {Colors} from '../../ball-library';
import {Radius} from "../../ball-library/theme";

export default () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
        image: {
            width: widthPercentageToDP('52%'),
            height: widthPercentageToDP('54%')
        },
        aboutUsTextContainer: {
            width: widthPercentageToDP('86%'),
            // height: heightPercentageToDP('80%'),
            maxHeight: '90%',
            backgroundColor: Colors.transparentAboutUs,
            borderRadius: Radius.typeButton_4,
            overflow: 'hidden',

            alignItems: 'center',
            // justifyContent: 'center',

            paddingVertical:12
        },
        scrollView: {
            // maxHeight: '70%'
        },
        scrollPadding: {
            padding: 8
        },
        text: {
            color: Colors.whiteBall,
            // textAlign: 'center',
            lineHeight: 25
        },
        footer_container:{
            width: widthPercentageToDP('86%'),
            flexDirection:'row-reverse',

            alignSelf:'center',
            alignItems: 'center',
            justifyContent: 'space-between',

            position:'absolute',
            bottom:12,
        },
        footer_btn:{
            alignItems: 'center',
            justifyContent: 'center',

            // paddingHorizontal:16
        },
        footer_text:{
            color:Colors.whiteBall,
        }
    });
};
