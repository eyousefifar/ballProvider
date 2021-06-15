import {StyleSheet} from 'react-native';
import {BorderWidth, Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',

			paddingTop:8,
			paddingBottom:4,
			paddingHorizontal:12,

			borderWidth: BorderWidth.type_4,
			borderColor:Colors.titleBarLines,
			borderRadius:Radius.typeButton_4,


			// backgroundColor:'red'
			// marginBottom:8
		}
	});
};
