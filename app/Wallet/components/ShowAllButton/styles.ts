import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',
			height:45,

			position:'absolute',
			bottom:0,

			backgroundColor:Colors.primaryPurple,

			alignItems: 'center',
			justifyContent: 'center',

			paddingHorizontal:16,
			paddingVertical:4
		},
		button:{
			width: '100%',
			height: '100%',

			borderRadius:Radius.typeButton_4,

			alignItems: 'center',
			justifyContent: 'center',

			backgroundColor: Colors.whiteBall

		},
		submit_text:{
			color:Colors.primaryPurple
		}
	});
};
