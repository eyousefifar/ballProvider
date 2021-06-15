import {StyleSheet} from 'react-native';
import {Colors} from "../theme";


export default () => {
    return StyleSheet.create({
        container:{
            width:100,
            height:35,
            marginLeft:2,
            marginRight:8,
            borderRadius:8,
            backgroundColor: '#fafafa',
            // marginHorizontal:2,
            marginVertical:8,
            overflow:'hidden'
        },
        filterButton:{
            width:'100%',
            height:'100%',
            alignItems:'center',
            justifyContent:'center',
        },
        filterButton_pressed:{
            backgroundColor:Colors.primaryPurple
        },
        filterButton_text:{
            fontFamily:'IRANSansMobile(FaNum)',
            fontSize:12,
            // marginRight:12,
            // marginLeft:12,
        },
        filterButton_text_pressed:{
            color:Colors.whiteBall
        }
    });
};
