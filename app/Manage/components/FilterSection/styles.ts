import {StyleSheet} from 'react-native';
import {BorderWidth, Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		parent:{
			width:'100%',

			paddingHorizontal: 12,
		},
		container:{
			width:'100%',

			paddingTop:6,
			paddingBottom:2,
			paddingHorizontal:12,

			borderWidth: BorderWidth.type_4,
			borderColor:Colors.titleBarLines,
			borderRadius: Radius.typeButton_4,
		}
	});
};
