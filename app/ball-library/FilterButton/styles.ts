import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../theme";


export default () => {
    return StyleSheet.create({
        container:{
            height:35,
            marginRight:6,

            borderRadius:Radius.typeButton_4,
            backgroundColor: Colors.inputBack,

            marginTop:6,
            marginBottom:3,

            overflow:'hidden',

        },
        filterButton:{
            flexDirection:'row-reverse',
            alignItems:'center',
            justifyContent:'center',
            height:'100%',
            // width:'100%',
            paddingHorizontal:6,
            paddingVertical:6,
        },
        filterButton_pressed:{
            backgroundColor:Colors.primaryPurple
        },
        filterButton_text:{
            marginRight:12,
            marginLeft:12,
        },
        filterButton_text_pressed:{
            color:Colors.whiteBall
        }
    });
};
