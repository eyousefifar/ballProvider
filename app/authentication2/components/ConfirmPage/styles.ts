import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";
import {widthPercentageToDP} from "react-native-responsive-screen";


export default () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
		},
		logo:{
			width: 80,
			height: 125,

			// resizeMode:'repeat',

			// marginTop:-200,
			marginBottom:36
		},
		error_text: {
			color: Colors.whiteBall,
		},
		input_container: {
			width: widthPercentageToDP('86%'),
			alignSelf: 'center'
		},
		input:{
			width:'100%',
			height: 45,

			fontFamily:'IRANSansMobile(FaNum)',
			fontSize : 14,
			color:Colors.whiteBall,

			textAlign:'center',

			backgroundColor:Colors.transparentAuthInput,

			borderRadius:Radius.typeButton_4,

			paddingHorizontal:12,
			marginBottom: 3
		},

		timer: {
			color: Colors.redDiscount,
			fontSize: 12,
			fontFamily: 'IRANSansMobile(FaNum)'

		},
		under_box: {
			width: '100%',
			alignItems: 'center',
			justifyContent:'space-between',
			flexDirection: 'row'
		}
	});
};
