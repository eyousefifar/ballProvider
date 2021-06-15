import {StyleSheet} from 'react-native';

import {Colors} from '../../../ball-library';
import {IconSize} from "../../../ball-library/theme";

export default () => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row-reverse',

            width: '100%',
            height: 56,

            alignItems: 'center',
            justifyContent: 'space-between',

            paddingHorizontal: 12

            // backgroundColor:'brown'
        },
        drawer_buttons:{
            flex:1,
            flexDirection:'row-reverse',

            alignItems:'center',
            justifyContent:'flex-end'
        }
        ,
        iconsContainer: {
            // width: '20%',
            height: '100%',

            // backgroundColor: 'red',

            padding:8,

            marginRight: 12,
        },
    });
    const rippleColor = Colors.grey;
    const icon = {
        size: IconSize.type_2,
        color: Colors.darkGrey,
    };
    return {styles, rippleColor, icon};
};
