import {StyleSheet} from 'react-native';


export default () => {
    return StyleSheet.create({
        container:{
            width:'100%',
            // height:70,

            paddingHorizontal:12,


            marginTop:12

        },

        row1:{
            flexDirection:'row-reverse',

            width: '100%',

            alignItems: 'center',
            justifyContent:'space-between',
        },

        row2:{
            flexDirection:'row-reverse',

            width: '100%',

            alignItems: 'center',
            justifyContent:'space-between',

        }


    });
};
