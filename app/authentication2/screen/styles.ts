import {StyleSheet} from 'react-native';
import {BorderWidth, Colors, Radius} from "../../ball-library/theme";
import {widthPercentageToDP} from 'react-native-responsive-screen';


export default () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'center'
        },
        logo: {
            width: 80,
            height: 125,

            // marginTop:-200,
            marginBottom: 36
        },
        error_text: {
            color: Colors.whiteBall,
        },
        input_container: {
            width: widthPercentageToDP('86%'),

            alignSelf: 'center'
        },

        input: {
            width: '100%',
            height: 45,

            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 14,
            color: Colors.whiteBall,

            textAlign: 'center',

            backgroundColor: Colors.transparentAuthInput,

            borderRadius: Radius.typeButton_4,

            paddingHorizontal: 12,
            marginBottom: 3
        },

        register_btn_container: {
            position: 'absolute',
            bottom: 12,

            width: widthPercentageToDP('86%'),
            height: 40,

            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: Radius.typeButton_4,
            borderWidth:BorderWidth.type_4,
            borderColor:Colors.whiteBall,

            overflow:'hidden'
        },

        register_btn: {
            width: '100%',
            height: '100%',

            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: Radius.typeButton_4,
        }
    });
};
