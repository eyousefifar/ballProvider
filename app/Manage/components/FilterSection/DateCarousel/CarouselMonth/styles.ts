import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../ball-library/theme";


export default () => {
    return StyleSheet.create({
        month_carousel_container: {
            width: 80,
            height: 24,
            // backgroundColor: 'rgba(0,85,255,0.36)',
            alignItems: 'center',
            justifyContent:'center',
            // marginTop: -4,
        },
        month_carousel_text: {
            color: Colors.titleBarLines
        },
        slider_container: {
            // backgroundColor:'blue',
            width: '60%'
        }
    });
};
