import {StyleSheet} from 'react-native';


export default () => {
    return StyleSheet.create({
        month_carousel_container: {
            width: 80,
            height: 24,
            // backgroundColor: 'rgba(0,85,255,0.36)',
            alignItems: 'center',
            justifyContent:'center'
        },
        month_carousel_text: {
            fontFamily: 'IRANSansMobile(FaNum)_Medium',
            fontSize: 16,
            color: '#414141'
        },
        slider_container: {
            // backgroundColor:'blue',
            width: '60%'
        }
    });
};
