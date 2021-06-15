import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";

const {width} = Dimensions.get('window');
const boxWidth = width * 8 / 10;

const borderWidthItems = 20;
const borderWidth = 70;


export default () => {
    return StyleSheet.create({

        qrCode_box: {

            marginTop:48,

            width: boxWidth,
            height: boxWidth,

            alignSelf: 'center',

            padding: 10,
            borderRadius: 8,

            overflow: 'hidden',
        },

        defaultQrCode:{
            width: boxWidth - 25,
            height: boxWidth - 25,

            alignSelf: 'center',

            padding: 10,
            borderRadius: 8,

            overflow: 'hidden',
        },


        border_hor_1: {
            width: borderWidth,
            height: borderWidthItems,

            zIndex: 2,
            opacity: 1,

            borderBottomEndRadius: 16,
            borderTopEndRadius: 16,

            position: 'absolute',

            backgroundColor: Colors.primaryPurple,
        },
        border_ver_1: {
            width: borderWidthItems,
            height: borderWidth,

            zIndex: 2,
            opacity: 1,

            borderBottomEndRadius: 16,
            borderBottomStartRadius: 16,

            position: 'absolute',

            backgroundColor: Colors.primaryPurple,
        },

        border_hor_2: {
            width: borderWidth,
            height: borderWidthItems,

            zIndex: 2,
            opacity: 1,

            borderBottomStartRadius: 16,
            borderTopStartRadius: 16,

            position: 'absolute',
            right: 0,

            backgroundColor: Colors.primaryPurple,
        },
        border_ver_2: {
            width: borderWidthItems,
            height: borderWidth,

            zIndex: 2,
            opacity: 1,

            borderBottomEndRadius: 16,
            borderBottomStartRadius: 16,

            position: 'absolute',
            right: 0,

            backgroundColor: Colors.primaryPurple,
        },

        border_hor_3: {
            width: borderWidth,
            height: borderWidthItems,

            zIndex: 2,
            opacity: 1,

            borderBottomEndRadius: 16,
            borderTopEndRadius: 16,

            position: 'absolute',
            bottom: 0,

            backgroundColor: Colors.primaryPurple,
        },
        border_ver_3: {
            width: borderWidthItems,
            height: borderWidth,

            zIndex: 2,
            opacity: 1,

            borderTopEndRadius: 16,
            borderTopStartRadius: 16,

            position: 'absolute',
            bottom: 0,

            backgroundColor: Colors.primaryPurple,
        },

        border_hor_4: {
            width: borderWidth,
            height: borderWidthItems,

            zIndex: 2,
            opacity: 1,

            borderBottomStartRadius: 16,
            borderTopStartRadius: 16,

            position: 'absolute',
            right: 0,
            bottom: 0,

            backgroundColor: Colors.primaryPurple,
        },
        border_ver_4: {
            width: borderWidthItems,
            height: borderWidth,

            zIndex: 2,
            opacity: 1,

            borderTopEndRadius: 16,
            borderTopStartRadius: 16,

            position: 'absolute',
            right: 0,
            bottom: 0,

            backgroundColor: Colors.primaryPurple,
        },


        alert_box:{
            position:'absolute',
            top:'45%',

            width:boxWidth,
            height:50,

            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: Radius.typeButton_4,

            zIndex:1,

            backgroundColor:Colors.redDiscount,

        }


    });
};
