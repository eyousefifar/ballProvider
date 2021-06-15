import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from "../../ball-library/theme";

const {width} = Dimensions.get('window');

const boxWidth = width * 8 / 10;


export default () => {
    return StyleSheet.create({
        container: {
            flex: 1,

            alignItems: 'center'

            // backgroundColor: '#efefef',
        },
        preview: {
            width:boxWidth,
            height:boxWidth,

            marginTop: 48,

            borderRadius:8,
            overflow: 'hidden',

            alignItems: 'center',

            // backgroundColor:"yellow"
        },
        qrCode_box: {
            flex: 1,

            // position: 'absolute',
            // top: '5%',

            width: boxWidth,
            height: boxWidth,

            // backgroundColor: 'yellow',

            alignSelf: 'center',

            opacity: 1,
            padding: 10,
            borderRadius: 8,

            overflow: 'hidden',
        },

        container2:{
            flex: 1,

            alignItems: 'center',
            justifyContent: 'center'
        },

        card_info_container: {
            // position: 'absolute',
            // bottom: '10%',

            width: boxWidth,
            // height:150,

            alignSelf: 'center',
            alignItems: 'center',

            backgroundColor: Colors.whiteBall,
            opacity: 1,

            borderRadius: 5,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.titleBarLines,

            paddingVertical: 12,
            paddingHorizontal: 12,
        },

        user_name: {
            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 16,
            color: Colors.titleBarLines,
        },
        card_info: {
            flexDirection: 'row-reverse',

            width: '100%',

            alignItems: 'center',
            justifyContent: 'space-between',

        },
        text: {
            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 12,
            color: '#616266',
        },

        input_code: {
            width: '100%',
            height: 45,

            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 12,

            backgroundColor: '#efefef',

            marginBottom: 24,

            textAlign:'right'
        },
        acc_btn: {
            width: '100%',
            height: 30,

            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: Colors.primaryPurple,

            borderRadius: 5,
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
            height: 30,

            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: '#7200ca',

            borderRadius: 5,
        },
        cancel_btn: {
            width: '34.5%',
            height: 30,

            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: 'red',

            borderRadius: 5,
        },
        text_btn: {
            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 14,
            color: Colors.whiteBall,
        },


        border_hor_1: {
            width: 50,
            height: 15,

            zIndex: 1,
            opacity: 1,

            borderBottomEndRadius: 16,
            borderTopEndRadius: 16,

            position: 'absolute',

            backgroundColor: Colors.primaryPurple,
        },
        border_ver_1: {
            width: 15,
            height: 50,

            zIndex: 1,
            opacity: 1,

            borderBottomEndRadius: 16,
            borderBottomStartRadius: 16,

            position: 'absolute',

            backgroundColor: Colors.primaryPurple,
        },

        border_hor_2: {
            width: 50,
            height: 15,

            zIndex: 1,
            opacity: 1,

            borderBottomStartRadius: 16,
            borderTopStartRadius: 16,

            position: 'absolute',
            right: 0,

            backgroundColor: Colors.primaryPurple,
        },
        border_ver_2: {
            width: 15,
            height: 50,

            zIndex: 1,
            opacity: 1,

            borderBottomEndRadius: 16,
            borderBottomStartRadius: 16,

            position: 'absolute',
            right: 0,

            backgroundColor: Colors.primaryPurple,
        },

        border_hor_3: {
            width: 50,
            height: 15,

            zIndex: 1,
            opacity: 1,

            borderBottomEndRadius: 16,
            borderTopEndRadius: 16,

            position: 'absolute',
            bottom: 0,

            backgroundColor: Colors.primaryPurple,
        },
        border_ver_3: {
            width: 15,
            height: 50,

            zIndex: 1,
            opacity: 1,

            borderTopEndRadius: 16,
            borderTopStartRadius: 16,

            position: 'absolute',
            bottom: 0,

            backgroundColor: Colors.primaryPurple,
        },

        border_hor_4: {
            width: 50,
            height: 15,

            zIndex: 1,
            opacity: 1,

            borderBottomStartRadius: 16,
            borderTopStartRadius: 16,

            position: 'absolute',
            right: 0,
            bottom: 0,

            backgroundColor: Colors.primaryPurple,
        },
        border_ver_4: {
            width: 15,
            height: 50,

            zIndex: 1,
            opacity: 1,

            borderTopEndRadius: 16,
            borderTopStartRadius: 16,

            position: 'absolute',
            right: 0,
            bottom: 0,

            backgroundColor: Colors.primaryPurple,
        },
    });
};
