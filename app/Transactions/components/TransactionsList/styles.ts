import {StyleSheet} from 'react-native';
import {BorderWidth, Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		empty_box:{
			flex: 1,
			height:'100%',
			width:'100%',

			alignItems: 'center',
			justifyContent: 'center',

			// backgroundColor:'red'
		},
		not_found_box_container:{
			flex:1,

			alignItems: 'center',
			justifyContent: 'center'
		},
		not_found_box:{
			flex:1,

			width: '100%',

			alignItems:'center',
			justifyContent:'center',

			borderRadius:Radius.typeButton_4,
			borderColor:Colors.titleBarLines,
			borderWidth:BorderWidth.type_4,

			paddingVertical:12,
			marginTop:2
		}

	});
};
