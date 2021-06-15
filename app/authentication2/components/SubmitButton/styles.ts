import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";
import {widthPercentageToDP} from "react-native-responsive-screen";


export default () => {
	return StyleSheet.create({
		container:{
			width:widthPercentageToDP('86'),
			height:40,

			alignItems: 'center',
			justifyContent: 'center',
			alignSelf:'center',

			borderRadius:Radius.typeButton_4,

			// backgroundColor:Colors.primaryPurple,
			backgroundColor:Colors.whiteBall,

			marginTop:12,
		},
		submit_text:{
			// color:Colors.whiteBall,
			color:Colors.primaryPurple,
		}
	});
};
