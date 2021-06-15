import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";
import {widthPercentageToDP} from "react-native-responsive-screen";

const {width} = Dimensions.get('window');
const boxWidth = width * 8 / 10;

const buttonSizes = 40;

export default () => {
    return StyleSheet.create({

        card_info_container: {
            width: boxWidth,

            alignSelf: 'center',
            alignItems: 'center',

            backgroundColor: Colors.whiteBall,

            borderRadius: 5,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.titleBarLines,

            paddingVertical: 12,
            paddingHorizontal: 12,

            marginTop: 24,
            marginBottom: 12
        },
        input_code: {
            width: '100%',
            height: 50,

            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 16,

            backgroundColor: Colors.inputBack,

            borderRadius:Radius.typeButton_4,

            marginBottom: 3,

            textAlign:'right'
        },
        acc_btn: {
            width: '100%',
            height: buttonSizes,

            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: Colors.primaryPurple,

            borderRadius: Radius.typeButton_4,

            marginTop:12
        },

        card_info: {
            flexDirection: 'row-reverse',

            width: '100%',

            alignItems: 'center',
            justifyContent: 'space-between',

        },

        btn_container: {
            flexDirection: 'row-reverse',

            width: '100%',

            alignItems: 'center',
            justifyContent: 'space-between',

            marginTop: 12,
        },
        accept_btn: {
            width: '64.5%',
            height: buttonSizes,

            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: '#7200ca',

            borderRadius: 5,
        },
        cancel_btn: {
            width: '34.5%',
            height: buttonSizes,

            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: Colors.redDiscount,

            borderRadius: 5,
        },
        text_btn: {
            color: Colors.whiteBall,
        },

        input_container: {
            width: '100%',

            alignSelf: 'center'
        },


    });
};
